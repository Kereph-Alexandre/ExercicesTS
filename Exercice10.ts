const temperatures:number[] = [2, 4, -5, 18, 36, -10, 24];
const targetTemperature:number = 0;

/**
 * Determine la température la plus proche d'une température cible
 * @param target la température cible
 * @param temperatures l'ensemble des températures possible
 * @returns la température la plus proche
 */
function determineClosestToTarget(target:number,...temperatures:number[]):number{
    let nearestTemperature:number = temperatures[0];
    let smallestGap:number = compareToTarget(temperatures[0], target);

    temperatures.forEach(temperature => {
        const gap = compareToTarget(temperature, target);
        
        if (gap < smallestGap){
            smallestGap = gap;
            nearestTemperature = temperature;
        }
    });

    return nearestTemperature;
}

/**
 * Donne l'écart entre deux températures
 * @param temperature une température quelconque
 * @param target température cible
 * @returns l'écart
 */
function compareToTarget(temperature:number, target:number):number{
    const gap:number = Math.abs(temperature - target);
    return gap
}


console.log(`La température la plus proche de ${targetTemperature} est de ${determineClosestToTarget(targetTemperature, ...temperatures)} degrés`);