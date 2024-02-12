// Zadatak 1
let sati = 1;
let min = 10;
let odPonoci = sati * 60 + min;
console.log("Minuta od ponoci " + odPonoci);
//console.log("Minuti od ponoci: " + sati * 60 + min);

//1 a) Minuta ostalo do ponoci

let doPonoci = 24 * 6 - odPonoci;
console.log("Minuta do ponoci: " + doPonoci);

//2

odPonoci = 30;
let sat1 = Math.floor(odPonoci / 60);
let min1 = odPonoci % 60;
console.log(sat1, min1);

//3
let novcanice = 500;
let cenaRobe = 300;
let kusur = novcanice - cenaRobe;
console.log("Vas kusur " + kusur);

//6

//Prva konverzija(eura -->din)
let euri = 70;
let kursEuro = 117.29;
let ukupnoDin = euri * kursEuro;
console.log(ukupnoDin);

//Druga konverzija (din -->e)
let novacDin = 5000;
let novacEuro = novacDin / kursEuro;
console.log(novacEuro);

//7
// prva konverzija( e --> dol)
let brojEur = 100;
let kursDolara = 106.79;

let brDinara = brojEur * kursEuro;
let brojDol = brDinara / kursDolara;
console.log(brojDol)

//dol -->e uz pomoc din
let brDol = 150;
let brDin = brDol * kursDolara;
let brE = brDin / kursEuro;
console.log(brE)



//8. 
let c = 30;
let f = c * 1.8 + 32;
console.log("Farenhajti su: " + f)

//obrnuto
let nf = 90
let nc = (f - 35) / 1.8;
console.log(nc) 


//9
//let kel = 273.15


//4 i 5
let datum = new Date(); // date get methods - datum je promenljiva koja sadrzi informacije o datumu i vremenu
let god = datum.getFullYear();
console.log("Godina je : ", god);


const sat = datum.getHours()
console.log(sat);