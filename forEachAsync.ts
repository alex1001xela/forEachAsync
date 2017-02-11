"use strict";

interface Iterable {
	[key: string]: any;
}

function forEachAsync (objectLiteralOrArray: Iterable, doOnIteration: (item: any, next: () => void) => void, doAfterLastIteration: () => void): void {
	let length: number, i: number = 0;

	let incrementIteration = function (): void {
		i++;
		iterateArray();
	};

	let iterateArray = function (): void {
		if(i < length){
			doOnIteration(objectLiteralOrArray[i], incrementIteration);
		}
		else{
			doAfterLastIteration();
		}
	};

	let iterateObject = function (keys: Array<string>): void {

			forEachAsync(keys, (item: string, next: () => void) => {
				doOnIteration(objectLiteralOrArray[item], next);
			}, doAfterLastIteration);
	};

	if (objectLiteralOrArray instanceof Array){
		length = objectLiteralOrArray.length;
		iterateArray();
	}
	else if(objectLiteralOrArray instanceof Object){
		let objectKeys: Array<string> = Object.keys(objectLiteralOrArray);
		iterateObject(objectKeys);
	}
	else{
		throw(new Error("Please insert an array, or a plain object"));
	}
}

export default forEachAsync;