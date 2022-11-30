import CDI  from './Classes/CDI';
import CDD from './Classes/CDD';
import Stagiaire from './Classes/Stagiaire';

const employee: CDI = new CDI ('Terieur', 'Alex', 1000);
const larbin : Stagiaire = new Stagiaire('Nareff', 'Pol', new Date('2022/12/31'));
const temporaire : CDD = new CDD ('Nicouette', 'Sandra', new Date ('2022/12/31'), 1000)

employee.augmentation(10);
larbin.prolonger(30);
temporaire.prolonger(60); 
temporaire.augmentation(11)