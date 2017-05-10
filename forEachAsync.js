"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function forEachAsync(arrayOrObjectLiteral, doOnIteration, doAfterLastIteration) {
    var length, i;
    var incrementIteration = function () {
        i++;
        if (i % 1000 === 0) {
            setTimeout(iterateArray, 0);
        }
        else {
            iterateArray();
        }
    };
    var iterateArray = function () {
        if (i < length) {
            doOnIteration(arrayOrObjectLiteral[i], i, incrementIteration);
        }
        else if (doAfterLastIteration) {
            doAfterLastIteration();
        }
    };
    var iterateObject = function (keys) {
        forEachAsync(keys, function (key, _i, next) {
            doOnIteration(arrayOrObjectLiteral[key], key, next);
        }, doAfterLastIteration);
    };
    if (arrayOrObjectLiteral instanceof Array) {
        i = 0;
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
exports.default = forEachAsync;
//# sourceMappingURL=forEachAsync.js.map