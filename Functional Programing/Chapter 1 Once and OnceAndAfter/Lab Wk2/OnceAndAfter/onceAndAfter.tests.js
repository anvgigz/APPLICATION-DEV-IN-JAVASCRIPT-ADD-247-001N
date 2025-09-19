"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var onceAndAfter_1 = require("./onceAndAfter");
describe("onceAndAfter", function () {
    it("calls the 1st function once & the 2nd after", function () {
        var func1 = jasmine.createSpy("func1");
        var func2 = jasmine.createSpy("func2");
        var testFn = (0, onceAndAfter_1.onceAndAfter)(func1, func2);
        testFn();
        testFn();
        testFn();
        testFn();
        expect(func1).toHaveBeenCalledTimes(1);
        expect(func2).toHaveBeenCalledTimes(3);
    });
});
