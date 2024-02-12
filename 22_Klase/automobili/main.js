import Auto from "./moduli/auto.js";

let a1 = new Auto("Audi", "bela", true); // a1._marka, a1._boja, a1._imaKrov
console.log(a1);
a1.sviraj();

let a2 = new Auto("Peugeot", "plava", false); // a2._marka, a2._boja, a2._imaKrov
console.log(a2.marka);
console.log(a2.boja);
console.log(a2.imaKrov);
console.log(a2.marka);
a2.sviraj();

a2.marka = "Citroen"; // seter - pristupa mu se kao polju, a zapravo se poziva metoda
console.log(a2.marka);
a2.imaKrov = "blabla";

a1.marka = "";
console.log(a1.marka);
a1.boja = "";
console.log(a1.boja);

let a3 = new Auto("", "", "");
console.log(a3);
