import StringCalculator from "./StringCalculator";

describe.only('Add strings', () => {
  let stringCalculator
  beforeEach(() => {
    stringCalculator = new StringCalculator()
  })

  it('should correctly add one and one', () => {
    const testString = '1,1'
    const result = stringCalculator.add(testString)
    expect(result).toBe(2)
  })

  it('should return 0 for an empty string', () => {
    const testString = ''
    const result = stringCalculator.add(testString)
    expect(result).toBe(0)
  })

  it('should return 123 for given string "123"', () => {
    const testString = '123'
    const result = stringCalculator.add(testString)
  })


})
