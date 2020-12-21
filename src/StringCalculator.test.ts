import StringCalculator from "./StringCalculator";

describe("Add strings", () => {
  let stringCalculator;
  beforeEach(() => {
    stringCalculator = new StringCalculator();
  });

  it("should correctly add one and one", () => {
    const testString = "1,1";
    const result = stringCalculator.add(testString);
    expect(result).toBe(2);
  });

  it("should return 0 for an empty string", () => {
    const testString = "";
    const result = stringCalculator.add(testString);
    expect(result).toBe(0);
  });

  it('should return 123 for given string "123"', () => {
    const testString = "123";
    const result = stringCalculator.add(testString);
    expect(result).toBe(123);
  });

  it("should return handle an unknown amount of numbers", () => {
    const testString = "1,2,3,4";
    const result = stringCalculator.add(testString);
    expect(result).toBe(1 + 2 + 3 + 4);
  });

  it("should handle new lines between numbers", () => {
    const testString = "1\n2,3";
    const result = stringCalculator.add(testString);
    expect(result).toBe(6);
  });

  it("should support dynamic delimiter", () => {
    const testString = "//;\n1;2";
    const result = stringCalculator.add(testString);
    expect(result).toBe(3);
  });

  it("should throw an exception negatives not allowed for negative numbers", () => {
    const testString = "//;\n1;2;-3";
    const errorMessage = "negatives not allowed: -3"
    expect(() => stringCalculator.add(testString)).toThrow(errorMessage)
  })

  it("should throw an exception which includes all negatives", () => {
    const testString = "//;\n1;2;-3;-5";
    const errorMessage = "negatives not allowed: -3, -5"
    expect(() => stringCalculator.add(testString)).toThrow(errorMessage)
  })
});
