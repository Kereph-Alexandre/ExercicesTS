// Exercice 4

/**
 * Compare 3 nombres pour trouver le plus grand
 * @param firstNumber un premier nombre
 * @param secondNumber un deuxième nombre
 * @param thirdNumber un troisème nombre
 * @returns le nombre de la plus grande valeur dans une phrase
 */
 function deternmineHighestNumber(
    firstNumber: number,
    secondNumber: number,
    thirdNumber: number
  ): string {
    let highestNumber = 0;
    if (firstNumber > secondNumber && firstNumber > thirdNumber) {
      highestNumber = firstNumber;
    } else if (secondNumber > firstNumber && secondNumber > thirdNumber) {
      highestNumber = secondNumber;
    } else highestNumber = thirdNumber;
    return `Le plus grand nombre est ${highestNumber}`;
  }
  
  console.log(deternmineHighestNumber(2, 25, 15));