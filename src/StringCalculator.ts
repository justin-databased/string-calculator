class StringCalculator {
  public add(numberString: string): number {
    if (numberString === "") {
      return 0;
    }
    
    let delimiter = ','
    if(numberString.includes('//')) {
      delimiter = numberString[2]
    }
    console.log(numberString
      .replace(/\n|\r/g, delimiter)
      .split(delimiter))

    return numberString
      .replace(/\n|\r/g, delimiter)
      .split(delimiter)
      .reduce((sum: number, numToAdd: string) => {
        if (Number.isNaN(parseInt(numToAdd, 10))) {
          return sum
        }
        return sum + parseInt(numToAdd, 10);
      }, 0);
  }
}

export default StringCalculator;
