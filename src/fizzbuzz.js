"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fizzbuzzDigit = void 0;
const fizzbuzzDigit = (digit) => {
    if (digit % 3 === 0)
        return "Fizz";
    return digit.toString();
};
exports.fizzbuzzDigit = fizzbuzzDigit;
