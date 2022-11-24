// Exercice 5
/**
 * Détermine le plus grand nombre dans un ensemble
 * @param numberList ensemble des nombres
 * @returns une phrase indiquant le plus grand nombre
 */
 function highestAmongMany(...numberList: number[]): string {
    let highestNumber = 0;
    numberList.forEach((number) => {
      if (number > highestNumber) {
        highestNumber = number;
      }
    });
    return `Le plus grand nombre est ${highestNumber}`;
  }
  
  console.log(highestAmongMany(2, 0, 12, 108, 840, 65, 42));