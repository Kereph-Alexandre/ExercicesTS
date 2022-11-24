/* Type de variable
 * Type de retour
 * Fonction Séparées par exercice
 * uniquement fonctions natives
 * DOC ! */

// Exercice 1
/**
 * Affiche un message de bienvenue dans la console
 * @param prenom
 */
function accueil(prenom: string): void {
  console.log(`Bonjour ${prenom} !`);
}

accueil("Alexandre");

// Exercice 2

/**
 * Affiche dans la console la somme des deux nombre entrés en paramètre
 * @param nombre1
 * @param nombre2
 */
function somme(nombre1: number, nombre2: number): void {
  const resultat: number = nombre1 + nombre2;
  console.log(resultat);
}

somme(2, 5);

// Exercice 3

/**
 * Calcule la différence entre deux nombres, puis demande l'affichage d'un commentaire
 * @param prixDeVente
 * @param prixDeFabrication
 */
function calculDesBenefices(
  prixDeVente: number,
  prixDeFabrication: number
): void {
  const benefice: number = prixDeVente - prixDeFabrication;
  console.log(affichageDesBenefices(benefice));
}

/**
 * Modifie le commentaire selon qu'il s'agit de perte ou de gain
 */
function affichageDesBenefices(benefice: number): string {
  let affichage: string = "";

  if (benefice > 0) {
    affichage = `Gain de ${benefice}`;
  } else {
    affichage = `Perte de ${Math.abs(benefice)}`;
  }

  return affichage;
}

calculDesBenefices(20, 15);
