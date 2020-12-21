class StringCalculator {
  public add(numberString: string): number {
    if (numberString === "") {
      return 0;
    }

    return this.getNumberStringToSum(numberString)
      .reduce((sum: number, numToAdd: string) => {
        if (Number.isNaN(parseInt(numToAdd, 10))) {
          return sum;
        }
        if(parseInt(numToAdd))
        return sum + parseInt(numToAdd, 10);
      }, 0);
  }

  private getNumberStringToSum(numberString: string): string[] {
    let delimiter = ",";
    let numberStringToSum = numberString;
    if (numberString.includes("//")) {
      delimiter = numberString[2];
      numberStringToSum = numberString.split('\n')[1]
    }

    return numberStringToSum.replace(/\n|\r/g, delimiter).split(delimiter)
  }

}

export default StringCalculator;
