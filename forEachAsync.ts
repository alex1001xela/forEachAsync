type ObjectLiteral<T> = {[key: string]: T};
type Iterable<T> = Array<T> | ObjectLiteral<T>;

function forEachAsync<T>(arrayOrObjectLiteral: Iterable<T>,
					  doOnIteration: (item: any, indexOrKey: number | string, next: () => void) => void,
					  doAfterLastIteration: () => void): void {

	let length: number, i: number;


	function incrementIteration(): void {
		i++;
		return iterateOrFinish();
	}

	function iterateOrFinish(): void {
		if (i < length) {
			let iterable: T = (arrayOrObjectLiteral as Array<T>)[i];
			return doOnIteration(iterable, i, incrementIteration);
		}
		else if(doAfterLastIteration) {
			return doAfterLastIteration();
		}
	}

	function iterateObject(keys: Iterable<string>): void {

		return forEachAsync(keys, (key: string, _i: number, next: () => void) => {
			return doOnIteration((arrayOrObjectLiteral as ObjectLiteral<T>)[key], key, next);
		}, doAfterLastIteration);
	}


	if (arrayOrObjectLiteral instanceof Array) {
		i = 0;
		length = arrayOrObjectLiteral.length;
		return iterateOrFinish();
	}
	else if (arrayOrObjectLiteral instanceof Object) {
		let objectKeys: Iterable<string> = Object.keys(arrayOrObjectLiteral) as Iterable<string>;
		return iterateObject(objectKeys);
	}
	else {
		throw(new Error("Inserted a: " + arrayOrObjectLiteral + ". Please insert an array, or an object literal"));
	}
}

export default forEachAsync;