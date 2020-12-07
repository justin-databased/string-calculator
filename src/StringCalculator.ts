class StringCalculator {
  public add(numberString: string): number {
    if (numberString === '') {
      return 0
    }

    return numberString.split(',')
      .reduce((sum: number, numToAdd: string) => {
      return sum + parseInt(numToAdd, 10)
    }, 0)
  }
}

export default StringCalculator;
