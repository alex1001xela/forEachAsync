"use strict";
function forEachAsync(objectLiteralOrArray, doOnIteration, doAfterLastIteration) {
    var length, i = 0;
    var incrementIteration = function () {
        i++;
        iterateArray();
    };
    var iterateArray = function () {
        if (i < length) {
            doOnIteration(objectLiteralOrArray[i], incrementIteration);
        }
        else {
            doAfterLastIteration();
        }
    };
    var iterateObject = function (keys) {
        forEachAsync(keys, function (item, next) {
            doOnIteration(objectLiteralOrArray[item], next);
        }, doAfterLastIteration);
    };
    if (objectLiteralOrArray instanceof Array) {
        length = objectLiteralOrArray.length;
        iterateArray();
    }
    else if (objectLiteralOrArray instanceof Object) {
        var objectKeys = Object.keys(objectLiteralOrArray);
        iterateObject(objectKeys);
    }
    else {
        throw (new Error("Please insert an array, or a plain object"));
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = forEachAsync;
