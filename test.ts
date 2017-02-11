import forEachAsync from "./forEachAsync";


const object: any = {
	"key1": "This",
	"key2": "is"
};

const array: Array<string> = ["creating", "a", "Hello", "World", "!"];

let iterations = [object, array, "This should give an error"];

forEachAsync(iterations, (item, next) => {

	forEachAsync(item, (item, next) => {

		//on iteration of inner loop
		setTimeout(() => {
			console.log(item);
			next();
		}, 300);

	}, () => {
		//on end of inner loop iterate the outer loop
		next();
	})
}, ()=> {
	//end of outer loop
	console.log("This shouldn't appear")
});