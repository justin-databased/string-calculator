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
    const testString = "1/n2,3";
    const result = stringCalculator.add(testString);
    expect(result).toBe(6);
  });
});
