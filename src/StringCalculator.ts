class StringCalculator {
  public add(numberString: string): number {
    if (numberString === "") {
      return 0;
    }

    let delimiter = ",";
    let numberStringToSum = numberString;
    if (numberString.includes("//")) {
      delimiter = numberString[2];
      numberStringToSum = numberString.split("").slice(3).join();
    }

    return numberStringToSum
      .replace(/\n|\r/g, delimiter)
      .split(delimiter)
      .reduce((sum: number, numToAdd: string) => {
        if (Number.isNaN(parseInt(numToAdd, 10))) {
          return sum;
        }
        return sum + parseInt(numToAdd, 10);
      }, 0);
  }
}

export default StringCalculator;
