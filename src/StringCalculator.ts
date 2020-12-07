class StringCalculator {
  public add(numberString: string): number {
    const splitString = numberString.split(',')
    splitString.reduce(sum, )
    console.log('splitString ', splitString)
  }
}

export default StringCalculator;
