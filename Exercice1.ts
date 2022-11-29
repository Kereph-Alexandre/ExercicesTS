type Animal = {
    nom : string,
    race: string,
    age:  number,
    poid: number, 
}

const Chat:Animal = {
    nom : 'chat',
    race: 'jikonéRi1',
    age:  7,
    poid: 4, 
    
}

function description(animal:Animal,...surnoms:string[]){
    const desc:string = `${animal.nom}, surnommé : ${surnoms.join(', ')}, est un ${animal.race} de ${animal.age} ans et pèse ${animal.poid}kg`
    console.log(desc);
}

description(Chat, 'tagueule', 'connard', 'enfoiros');