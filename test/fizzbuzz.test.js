"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fizzbuzz_1 = require("../src/fizzbuzz");
it("calculates default digit", () => {
    expect((0, fizzbuzz_1.fizzbuzzDigit)(1)).toBe("1");
    expect((0, fizzbuzz_1.fizzbuzzDigit)(2)).toBe("2");
});
it("calculates fizz digit", () => {
    expect((0, fizzbuzz_1.fizzbuzzDigit)(3)).toBe("Fizz");
    expect((0, fizzbuzz_1.fizzbuzzDigit)(9)).toBe("Fizz");
});
