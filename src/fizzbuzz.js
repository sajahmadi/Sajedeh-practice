"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fizzbuzzDigit = void 0;
const fizzbuzzDigit = (digit) => {
    if (digit % 3 === 0 && digit % 5 === 0)
        return "FizzBuzz";
    if (digit % 3 === 0)
        return "Fizz";
    if (digit % 5 === 0)
        return "Buzz";
    return digit.toString();
};
exports.fizzbuzzDigit = fizzbuzzDigit;
