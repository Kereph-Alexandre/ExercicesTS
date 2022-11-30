import Chat from "./Classes/Chat";
import Dauphin from "./Classes/Dauphin";

const chat1: Chat = new Chat("Félix", 4, new Date("2018/6/20"));
const dauphin1: Dauphin = new Dauphin("Flipper", 80, new Date("2019/10/06"));

chat1.afficher();
chat1.respirerHorsDeLeau("Terre");

dauphin1.respirerSousLeau();
chat1.marcher();

// setInterval(dauphin1.respirerSousLeau, 5000);
