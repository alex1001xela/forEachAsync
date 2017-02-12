"use strict";
function forEachAsync(arrayOrObjectLiteral, doOnIteration, doAfterLastIteration) {
    var length, i = 0;
    var incrementIteration = function () {
        i++;
        iterateArray();
    };
    var iterateArray = function () {
        if (i < length) {
            doOnIteration(arrayOrObjectLiteral[i], i, incrementIteration);
        }
        else {
            doAfterLastIteration();
        }
    };
    var iterateObject = function (keys) {
        forEachAsync(keys, function (key, i, next) {
            doOnIteration(arrayOrObjectLiteral[key], key, next);
        }, doAfterLastIteration);
    };
    if (arrayOrObjectLiteral instanceof Array) {
        length = arrayOrObjectLiteral.length;
        iterateArray();
    }
    else if (arrayOrObjectLiteral instanceof Object) {
        var objectKeys = Object.keys(arrayOrObjectLiteral);
        iterateObject(objectKeys);
    }
    else {
        throw (new Error("Please insert an array, or an object literal"));
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = forEachAsync;
//# sourceMappingURL=forEachAsync.js.map