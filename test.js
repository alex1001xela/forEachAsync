"use strict";
var forEachAsync_1 = require("./forEachAsync");
var object = {
    "key1": "This",
    "key2": "is"
};
var array = ["creating", "a", "Hello", "World", "!"];
var iterations = [object, array, "This should give an error"];
forEachAsync_1.default(iterations, function (item, next) {
    forEachAsync_1.default(item, function (item, next) {
        setTimeout(function () {
            console.log(item);
            next();
        }, 300);
    }, function () {
        next();
    });
}, function () {
    console.log("This shouldn't appear");
});
//# sourceMappingURL=test.js.map