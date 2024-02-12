/* 8)  Radno vreme jedne programerske firme je od 9h do 17h. 
Preuzeti vreme sa računara i ispitati da li u to vreme firma radi ili ne radi.
09: firma otvorena    17:00 firma ne radi*/
let datum = new Date();
let sati = datum.getHours();
if (sati < 9) {
  console.log("firma trenutno ne radi");
} else if (sati >= 17) {
  console.log("firma trenutno ne radi");
} else {
  console.log("firma radi");
}
//6)Preuzeti sa računara koji je dan u nedelji i ispitati da li je to radni dan
// ili je u pitanju vikend.

//let dan_nedelja = datum.getDay();
/*if (dan_nedelja === 1) {
  document.write("Ponedeljak");
} else if (dan_nedelja === 2) {
  document.write("Utorak");
} else if (dan_nedelja === 3) {
  document.write("Sreda");
} else if (dan_nedelja === 4) {
  document.write("Cetvrtak");
} else if (dan_nedelja === 5) {
  document.write("Petak");
} else {
  document.write("Vikend je");
}*/
let datum1 = new Date();
let dan = datum1.getDay();
if (dan == 0) {
  console.log(`Vikend je.`);
} else if (dan == 6) {
  console.log(`Vikend je.`);
} else {
  console.log(`Radni dan je.`);
}

// 7 )  Za vreme preuzeto sa računara ispisati
// dobro jutro za vreme manje od 12 sati ujutru,
// dobar dan za vreme manje od 18 sati,
// u ostalim slučajevima ispisati dobro veče.
let vreme = datum.getHours();
if (vreme < 12) {
  console.log("Dobro jutro");
} else if (vreme < 18) {
  console.log("Dobar dan");
} else {
  console.log("Dobro vece");
}

// 9)
let p1 = 8;
let p2 = 15;
let k1 = 16;
let k2 = 19;

if (k1 <= p2) {
  console.log("ne");
} else if (k2 <= p1) {
} else {
  console.log("da");
}

// 10 ) Uneti dva broja. Većem  broju ispisati sledbenik, a manjem broju ispisati prethodnik.

let a = 7;
let b = 17;
if (a > b) {
  console.log(++a);
  console.log(--b);
} else if (a < b) {
  console.log(--a);
  console.log(++b);
} else {
  console.log("Brojevi su jednaki");
}
//11  Učitati broj ispitati na ekranu “Ceo broj”, ukoliko je učitani broj ceo.

a = 15.6;
if (a === Math.round(a)) {
  console.log("Ceo broj");
} else {
  console.log("Nije ceo broj");
}
