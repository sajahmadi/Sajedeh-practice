import { fizzbuzzDigit } from "../src/fizzbuzz";

describe("fizzbuzz digit", () => {
  it("calculates default digit", () => {
    expect(fizzbuzzDigit(1)).toBe("1");
    expect(fizzbuzzDigit(2)).toBe("2");
  });

  it("calculates fizz digit", () => {
    expect(fizzbuzzDigit(3)).toBe("Fizz");
    expect(fizzbuzzDigit(9)).toBe("Fizz");
  });

  it("calculates buzz digit", () => {
    expect(fizzbuzzDigit(5)).toBe("Buzz");
    expect(fizzbuzzDigit(10)).toBe("Buzz");
  });

  it("calculates fizzbuzz digit", () => {
    expect(fizzbuzzDigit(15)).toBe("FizzBuzz");
    expect(fizzbuzzDigit(30)).toBe("FizzBuzz");
  });
});
