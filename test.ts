import forEachAsync from "./forEachAsync";

//Iterate over these with two nested forEachAsync loops
const iterations = [
	{"key1": "This", "key2": "is"},
	["creating", "a", "Hello", "World", "!"],
	"This should give an error"
];

/*
Results:
 i: 0		//objectLiteral
 key: key1
 value: This
 key: key2
 value: is
 i: 1		//stringArray
 j: 0		//stringArray[0]
 value: creating
 j: 1		//stringArray[1]
 value: a
 j: 2
 value: Hello
 j: 3
 value: World
 j: 4
 value: !	//stringArray[4]
 i: 2
 Error("Please insert an array, or an object literal")
*/

forEachAsync(iterations, (item, i, next) => {

	//on iteration of outer loop
	console.log("i: ", i);
	forEachAsync(item, (item, keyOrIndex, next) => {

		//on iteration of inner loop
		console.log("keyOrIndex: ", keyOrIndex);
		setTimeout(() => {
			console.log("value: ", item);
			return next();
		}, 300);

	}, () => {
		//on end of inner loop iterate the outer loop
		return next();
	});
}, ()=> {
	//end of outer loop
	console.log("This shouldn't appear")
});

/*
In node.js, only if using it with the --harmony_tailcalls flag, until it is normally implemented.
Check the 1st note in README.


Not a normal use case. Iterate over a big array, applying "accidentally" a synchronous function.

const bigArray = new Array(300000);

forEachAsync(bigArray, (_item, i, next) => {
	console.log(i);
	return next();
}, () => {
	console.log("end");
});
*/