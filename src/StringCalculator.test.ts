import StringCalculator from "./StringCalculator";

describe.only('Add strings', () => {
  it('should correctly add one and one', () => {
    const stringCalculator = new StringCalculator()
    const testString = '1,1'

    const result = stringCalculator.add(testString)
    expect(result).toBe(2)
  })
})