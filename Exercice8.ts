// // Exercice 8
/**
 * Constitue une pyramide d'astérisques
 * @param base hauteur de la pyramide
 */
function pyramid(base:number):void{
    let asterisks:string[] = [];

    for (let index = 0;  index < base ; index++){
        asterisks.push('*');
        console.log(asterisks.join(''));
    }

    for (let index = 0;  index < base ; index++){
        asterisks.pop();
        console.log(asterisks.join(''));
    }
}

pyramid(5);