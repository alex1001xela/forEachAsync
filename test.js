"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var forEachAsync_1 = require("./forEachAsync");
var iterations = [
    { "key1": "This", "key2": "is" },
    ["creating", "a", "Hello", "World", "!"],
    "This should give an error"
];
forEachAsync_1.default(iterations, function (item, i, next) {
    console.log("i: ", i);
    forEachAsync_1.default(item, function (item, keyOrIndex, next) {
        console.log("keyOrIndex: ", keyOrIndex);
        setTimeout(function () {
            console.log("value: ", item);
            return next();
        }, 300);
    }, function () {
        return next();
    });
}, function () {
    console.log("This shouldn't appear");
});
//# sourceMappingURL=test.js.map