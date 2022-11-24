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