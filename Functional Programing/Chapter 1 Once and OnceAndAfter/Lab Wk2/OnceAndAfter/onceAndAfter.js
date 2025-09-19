"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.onceAndAfter = void 0;
var onceAndAfter = function (f, g) {
    var done = false;
    return (function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (!done) {
            done = true;
            return f.apply(void 0, args);
        }
        else {
            return g.apply(void 0, args);
        }
    });
};
exports.onceAndAfter = onceAndAfter;
