// 1 )
let z = 101;
if (z <= 100) {
  document.write("<p style='color: green'>Spakuj me</p>");
} else {
  document.write("<p style='color: red'>Baci me</p>");
}

// 2)

let t = -1;
if (t >= 0) {
  document.write("<p style='color: red'> Temperatura u plusu</p>");
} else {
  document.write("<p style='color: blue'> Temperatura u minusu</p>");
}

/* 3)Za preuzetu godinu sa računara i unetu godinu rođenja izračunati da li osoba ove godine postaje punoletna. Ukoliko postaje, prikazati sliku torte sa brojem 18. U suprotnom, izračunati još koliko godina je preostalo do punoletstva i ispisati tu informaciju u paragrafu. */

let d = new Date();
let godina = d.getFullYear();
let god_rodjenja = 2005;
let punoletstvo = godina - god_rodjenja;
console.log(punoletstvo);
if (punoletstvo === 18) {
  document.write("osoba ove godine postaje punoletna");
  document.write("<img src='download.jpg'>");
} else if (punoletstvo > 18) {
  document.write("osoba je vec punoletna");
} else {
  document.write("osoba je maloletna");
  let ostalo_do_punoletstva = 18 - punoletstvo;
  console.log(ostalo_do_punoletstva);
  document.write(`<p> Ostalo do punoletstva : ${ostalo_do_punoletstva}</p>`);
}
// * 8)Radno vreme jedne programerske firme je od 9h do 17h.
// Preuzeti vreme sa računara i ispitati da li u to vreme firma radi ili ne radi.

let vreme = d.getHours();
console.log(vreme);
if (vreme < 9) {
  console.log("firma ne radi");
} else if (vreme >= 17) {
  console.log("firma ne radi");
} else {
  console.log("firma radi");
}

// // 9) Za unet sat početka i sat kraja radnog vremena dva lekara,
// ispisati DA ukoliko se smene lekara preklapaju,
// u suprotnom ispisati NE.
// (Ne može se desiti da lekar počne smenu pre ponoći, a završi sa

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

// 10) Uneti dva broja. Većem  broju ispisati sledbenik, a manjem broju ispisati prethodnik.

let c = 21;
let b = 20;
if (c > b) {
  console.log(++c);
  console.log(--b);
} else if (b > c) {
  console.log(++b);
  console.log(--c);
} else {
  console.log("Brojevi su jednaki");
}

// 11) Učitati broj ispitati na ekranu “Ceo broj”, ukoliko je učitani broj ceo

let a = 15.7;
let p = Math.floor(a);
console.log(p);
if (a === Math.floor(a)) {
  document.write("Ceo je broj");
} else {
  console.log("Nije ceo br");
}
