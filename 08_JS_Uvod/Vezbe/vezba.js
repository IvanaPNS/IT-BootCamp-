//1.  Date su dve promenljive u kojima su dati vreme u satima i minutima.  Izračunati koliko minuta je prošlo od ponoći.

let min = 30;
let sati = 2;
let odPonoci = sati * 60 + min;
console.log("Proslo je minuta od ponoci: " + odPonoci);

// 1-a
let doPonoci = 24 * 60 - odPonoci;
console.log("Do ponoci je ostalo jos minuta: " + doPonoci);

//2   Za dato vreme u minutima koji su prošli od ponoći, odrediti koliko je to u satima i minutima.

let minOdPonoci = 20;
let satiOdPonoci = Math.floor(minOdPonoci / 60);
console.log("satiOdPonoci", satiOdPonoci);
let UminOdPonoci = minOdPonoci % 60;
console.log("minuta od ponoci", UminOdPonoci);

//3  Date su dve promenljive kojima se zadaje cena robe i uneta novčanica kojom kupac plaća račun. Ispisati koliki kusur kasirka treba da mu vrati.

let cenaRobe = 500;
let novcanice = 1000;
let kusur = novcanice - cenaRobe;
console.log("kusur je: ", kusur);

//4  Uraditi zadatak 1 tako da se dohvati trenutno vreme, i za njega odredi koliko minuta je prošlo od ponoći.
let d = new Date();
let h = d.getHours();
console.log("Sati je:", h);

let m = d.getMinutes();
console.log("Minuta je: " + m);

odPonoci = h * 60 + m;
console.log("Trenutno minuta od ponoci je :", odPonoci);

//5 Ispisati u konzoli današnji datum u formatima dd.mm.yyyy. i yyyy/mm/dd.

let godina = d.getFullYear();
console.log("Godina je: ", godina);
let mesec = d.getMonth();
console.log("Mesec je: ", mesec + 1);
let dan = d.getDate();
console.log("Dan je: ", dan);
let danUnedelji = d.getDay();
console.log("Dan je: ", danUnedelji);
console.log("Datum je : ", dan, mesec, godina);
console.log("Datum je : ", godina, mesec, dan);
//6  Data je promenljiva u kojoj je ukupan broj evra koji posedujemo, kao i promenljiva u kojoj je vrednost trenutnog kursa. Odrediti koliko ćemo imati dinara nakon razmene. Uraditi isto i za konverziju iz dinara u evre.

//6-a euri u din
let euri = 100;
let kursEuro = 117.3;
let dinari = euri * kursEuro;
console.log("Ukupno dinara", dinari);

//6-bdin u eure

let din = 9000;
let euro = din / kursEuro;
console.log("Ukupno Eura: ", euro);

//7   Data je promenljiva u kojoj je ukupan broj evra koji posedujemo, kao i promenljive u kojima je vrednost kurseva evro-dinar, kao i dolar-dinar, redom. Odrediti koliko ćemo imati dolara nakon razmene. Uraditi isto i za konverziju iz dolare u evre.

//7-a iz e u dolare
let brEura = 100;
let kursDol = 106.7;
let brDolara = (brEura * kursEuro) / kursDol;
console.log("Imamo dolara: ", brDolara);

// 7-b  iz dolara u eure
let brE = (brDolara * kursDol) / kursEuro;
console.log("Imamo Eura: ", brE);

// 8  Temperatura iz Celzijusa u Farenhajte i obrnuto.

// 8-a
let c = 38;
let f = c * 1.8 + 32;
console.log("Temperatura u farenhajtima je: ", f);

// 8-b

let fa = 100;
let ce = (fa - 32) / 1.8;
console.log("temperatura u c je: ", ce);

// 9   Temperatura iz Celzijusa u Kelvine i obrnuto.
//9 -a  c - k

let k = c + 273.15;
console.log("temperatura u kelvinima je: ", k);

//9-a  k-c
c = k - 273.15;
console.log("temperatura u C je : ", c);
