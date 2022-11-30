abstract class Collaborateur {
    protected _nom: string;
    protected _prenom: string;

    constructor(nom:string, prenom:string){
        this._nom = nom; 
        this._prenom = prenom;
    }

    /**
     * Indique ce que fait le collaborateur lorsqu'il travaille
     */
    abstract travailler():string
}

class Salarie extends Collaborateur{
    private _salaire: number;

    constructor(nom:string, prenom:string, salaire:number){
        super(nom, prenom);
        this._salaire = salaire;
    }
    
    
    /**
     * Permet de'augmenter le salaire d'un employé
     * @param pourcentage de l'augmentation
     */
    augmentation(pourcentage: number): void {
        if (pourcentage < 0) {
            throw new Error("Le pourcentage doit être positif");
        } else {
            console.log(
                `le salaire de ${this._prenom} ${this._nom} va être augmenté de ${pourcentage}%.`
                );
                
                const augmentation = (this._salaire * pourcentage) / 100;
                console.log(`il gagnera ${augmentation}€ supplémentaire`);
                
                this._salaire += augmentation;
                console.log(`Son nouveau salaire est de ${this._salaire}`);
            }
        }
        
        travailler(): string {
            return `${this._prenom} ${this._nom} travaille comme un fou car il aimerait une augmentation`
        }
    }
    
    class Stagiaire extends Collaborateur{
        private _finContrat: Date;
        
        constructor(nom:string, prenom:string, finContrat:Date){
            super(nom, prenom);
            this._finContrat = finContrat;
        }

        get fin():string{
            return this._finContrat.toLocaleDateString();
        }

        prolonger(jours:number):void{
            //permet a partir d'une date, de la modifier
            this._finContrat.setDate(this._finContrat.getDate()+jours);
            console.log(`La date de fin de contrat a été prolongée jusqu'au ${this.fin}`);
        }

        travailler(): string {
            return `${this._prenom} ${this._nom} fait des trucs`
        }
    }
    
    const employe1:Salarie = new Salarie('Clette', 'Lara', 1000);
    const stagiaire1: Stagiaire = new Stagiaire('Paltan', 'Jay', new Date('2022/12/31'));

    console.log(employe1);
    employe1.augmentation(10);
    console.log(stagiaire1);
    stagiaire1.prolonger(90);
