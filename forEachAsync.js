"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function forEachAsync(arrayOrObjectLiteral, doOnIteration, doAfterLastIteration) {
    var length, i;
    function incrementIteration() {
        i++;
        return iterateOrFinish();
    }
    function iterateOrFinish() {
        if (i < length) {
            return doOnIteration(arrayOrObjectLiteral[i], i, incrementIteration);
        }
        else if (doAfterLastIteration) {
            return doAfterLastIteration();
        }
    }
    function iterateObject(keys) {
        return forEachAsync(keys, function (key, _i, next) {
            return doOnIteration(arrayOrObjectLiteral[key], key, next);
        }, doAfterLastIteration);
    }
    if (arrayOrObjectLiteral instanceof Array) {
        i = 0;
        length = arrayOrObjectLiteral.length;
        return iterateOrFinish();
    }
    else if (arrayOrObjectLiteral instanceof Object) {
        var objectKeys = Object.keys(arrayOrObjectLiteral);
        return iterateObject(objectKeys);
    }
    else {
        throw (new Error("Please insert an array, or an object literal"));
    }
}
exports.default = forEachAsync;
//# sourceMappingURL=forEachAsync.js.map