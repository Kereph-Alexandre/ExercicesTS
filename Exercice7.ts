// Exercice 7
/**
 * Effectue une opération entre deux opérande en fonction de l'opérateur
 * @param number1 le premier opérande
 * @param number2 le second opérande
 * @param opertor l'opérateur 
 * @returns le résultat de l'opération
 */
 function calculateNumber(
    number1: number,
    number2: number,
    opertor: string
  ): number {
    let result: number = 0;
  
    switch (opertor) {
      case "+":
        result = number1 + number2;
        break;
      case "-":
        result = number1 - number2;
        break;
      case "*":
        result = number1 * number2;
        break;
      case "/":
        if (number2 != 0) {
          result = number1 / number2;
        }
        break;
      default:
        console.log(`Erreur : opérateur invalide`);
    }
    return result;
  }
  
  console.log(calculateNumber(2, 3, "/"));