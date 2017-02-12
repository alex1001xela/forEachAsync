"use strict";

interface Iterable {
	[key: string]: any;
}

function forEachAsync (arrayOrObjectLiteral: Iterable, doOnIteration: (item: any, indexOrKey: number | string, next: () => void) => void, doAfterLastIteration: () => void): void {
	let length: number, i: number = 0;

	const incrementIteration = function (): void {
		i++;
		iterateArray();
	};

	const iterateArray = function (): void {
		if(i < length){
			doOnIteration(arrayOrObjectLiteral[i], i, incrementIteration);
		}
		else{
			doAfterLastIteration();
		}
	};

	const iterateObject = function (keys: Array<string>): void {

			forEachAsync(keys, (key: string, i: number, next: () => void) => {
				doOnIteration(arrayOrObjectLiteral[key], key, next);
			}, doAfterLastIteration);
	};

	if (arrayOrObjectLiteral instanceof Array){
		length = arrayOrObjectLiteral.length;
		iterateArray();
	}
	else if(arrayOrObjectLiteral instanceof Object){
		let objectKeys: Array<string> = Object.keys(arrayOrObjectLiteral);
		iterateObject(objectKeys);
	}
	else{
		throw(new Error("Please insert an array, or an object literal"));
	}
}

export default forEachAsync;