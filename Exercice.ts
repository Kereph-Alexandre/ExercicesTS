/* Type de variable
 * Type de retour
 * Fonction Séparées par exercice
 * uniquement fonctions natives
 * DOC ! */

// Exercice 1
/**
 * Affiche un message de bienvenue dans la console
 * @param name
 */
function welcome(name: string): void {
  console.log(`Bonjour ${name} !`);
}

welcome("Alexandre");

// Exercice 2

/**
 * Affiche dans la console la somme des deux nombre entrés en paramètre
 * @param number1
 * @param number2
 */
function Addition(number1: number, number2: number): void {
  const resultat: number = number1 + number2;
  console.log(resultat);
}

Addition(2, 5);

// Exercice 3

/**
 * Calcule la différence entre deux nombres, puis demande l'affichage d'un commentaire
 * @param sellPrice
 * @param prodPrice
 */
function calculateProfits(sellPrice: number, prodPrice: number): void {
  const profits: number = sellPrice - prodPrice;
  console.log(showProfits(profits));
}

/**
 * Modifie le commentaire selon qu'il s'agit de perte ou de gain
 * @param profits
 * @returns
 */
function showProfits(profits: number): string {
  let result: string = "";

  if (profits > 0) {
    result = `Gain de ${profits}`;
  } else {
    result = `Perte de ${Math.abs(profits)}`;
  }

  return result;
}

calculateProfits(20, 15);

// Exercice 4

/**
 * Compare 3 nombres
 * @param firstNumber
 * @param secondNumber
 * @param thirdNumber
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

// Exercice 5
/**
 * Détermine le plus grand nombre dans un ensemble
 * @param numberList ensemble des nombres
 * @returns une phrase indiquant le plus grand nombre
 */
function highestAmongMany(...numberList:number[]):string{
    let highestNumber = 0;
    numberList.forEach(number => {
        if (number > highestNumber){
            highestNumber = number
        }
    });
    return `Le plus grand nombre est ${highestNumber}`
}

console.log(highestAmongMany(2,0,12,108,840,65, 42))