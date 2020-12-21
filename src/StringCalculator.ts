class StringCalculator {
  private calledCount: number;
  constructor() {
    this.calledCount = 0;
  }

  public getCalledCount(): number {
    return this.calledCount;
  }

  public add(numberString: string): number {
    this.calledCount++;
    if (numberString === "") {
      return 0;
    }

    try {
      return this.getNumberStringToSum(numberString).reduce(
        (sum: number, numToAdd: string) => {
          return sum + this.getValidNumber(numToAdd);
        },
        0
      );
    } catch (error) {
      throw new Error(
        `negatives not allowed: ${this.getNumberStringToSum(numberString)
          .filter((num) => parseInt(num, 10) < 0)
          .join(", ")}`
      );
    }
  }

  private getNumberStringToSum(numberString: string): string[] {
    let delimiter = ",";
    let numberStringToSum = numberString;
    if (numberString.includes("//")) {
      delimiter = numberString[2];
      numberStringToSum = numberString.split("\n")[1];
    }

    return numberStringToSum.replace(/\n|\r/g, delimiter).split(delimiter);
  }

  private getValidNumber(numToAdd: string): number {
    if (Number.isNaN(parseInt(numToAdd, 10))) {
      return 0;
    }

    if (parseInt(numToAdd, 10) < 0) {
      throw new Error("negatives not allowed: ");
    }

    return parseInt(numToAdd, 10);
  }
}

export default StringCalculator;
