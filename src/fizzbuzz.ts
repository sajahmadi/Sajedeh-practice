export const fizzbuzzDigit = (digit: number) => {
  if (digit % 3 === 0 && digit % 5 === 0) return "FizzBuzz";
  if (digit % 3 === 0) return "Fizz";
  if (digit % 5 === 0) return "Buzz";
  return digit.toString();
};
