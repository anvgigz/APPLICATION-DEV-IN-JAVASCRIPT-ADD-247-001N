import { onceAndAfter } from "./onceAndAfter";

describe("onceAndAfter", () => {
  it("calls the 1st function once & the 2nd after", () => {
    const func1 = jasmine.createSpy("func1");
    const func2 = jasmine.createSpy("func2");

    const testFn = onceAndAfter(func1, func2);

    testFn();
    testFn();
    testFn();
    testFn();

    expect(func1).toHaveBeenCalledTimes(1);
    expect(func2).toHaveBeenCalledTimes(3);
  });
});