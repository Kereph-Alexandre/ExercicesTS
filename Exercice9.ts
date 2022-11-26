const bills: number[] = [
  500, 200, 100, 50, 20, 10, 5, 2, 1, 0.5, 0.2, 0.1, 0.05, 0.02, 0.01,
];

/**
 * Décompose une somme en nombre de billets et pièces de valeur prédéfinie
 * les multiplications et divisions par mille évitent les problème de gestion des décimales avec JS
 * @param sum Somme totale à décomposer
 */
function breakDownSum(sum: number): void {

  checkNumber(sum);

  for (let index: number = 0; index < bills.length; index++) {
    const currentBill: number = bills[index];
    if (sum >= currentBill) {
      const numberOfBills: number = Math.trunc((sum*1000 / currentBill )/1000);
      const remainingSum: number = ((sum*1000) % (currentBill*1000))/1000;

      console.log(logBreakdown(currentBill, numberOfBills));
      console.log(remainingSum);
      sum = remainingSum;
    }
  }
}

/**
 * Affiche la quantité de billets/Pièce nécéssaire pour constituer une somme
 * @param billValue la valeur du billet ou de la pièce traitée
 * @param numberOfBills la quantité nécessaire
 * @returns le commentaire à afficher
 */
function logBreakdown(billValue:number, numberOfBills:number):string {
  const logLine = `${(billValue >= 5 ? `Billets de` : `Pièces de`)} ${billValue} : ${numberOfBills}.`;
  return logLine;
}

/**
 * Vérifie qu'une variable est bien un nombre
 * @param toCheck la variable a tester
 */
function checkNumber(toCheck:any):void{
  if (Number.isNaN(toCheck)){
    console.log(`Erreur : la donnée d'entrée n'est pas un nombre`);
  }
}

breakDownSum(2437.57)


    