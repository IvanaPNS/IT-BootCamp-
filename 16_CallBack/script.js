//  bez call back funkcije

let a = [-6, 8, 11, 6, 0];
let b = ["pera", "Laza", "mika"];
function ispisNizaKonzola(niz) {
  let string = "";
  for (let i = 0; i < niz.length; i++) {
    string += niz[i] + " ";
  }
  console.log(string);
}
function ispisNizaStranica(niz) {
  let string = "";
  for (let i = 0; i < niz.length; i++) {
    string += niz[i] + " ";
  }
  let div = document.getElementById("container");
  div.innerHTML += string;
}

ispisNizaKonzola(a);
ispisNizaKonzola(b);
ispisNizaStranica(a);
ispisNizaStranica(b);

// fukcija 1 : Za niz for petljom prodjemo kroz sve elemente niza, i generisani string ispisemo u konzoli
// fukcija 2 : Za niz for petljom prodjemo kroz sve elemente niza, i generisani string ispisemo u div tag
// A moze li ovako?
//Funkcija(niz,nacin) : za niz for petljom prodje kroz sve elemnte niza i generisani string ispise na zadati nacin

// Sa callback funkcijama
function ispisKonzola(p) {
  console.log(p);
}
function ispisStranica(p) {
  let div = document.getElementById("container");
  div.innerHTML += p;
}
function ispisNiza(niz, cb) {
  let string = "";
  for (let i = 0; i < niz.length; i++) {
    string += niz[i] + " ";
  }
  cb(string);
}
// Anonimna funkcija, kao callback funkcija
ispisNiza(a, ispisKonzola);
ispisNiza(b, ispisKonzola);
ispisNiza(a, ispisStranica);
ispisNiza(b, ispisStranica);

ispisNiza([1, 2, 3, 4, 5], function (p) {
  console.log(p);
});

//Arrow funkcija kao callback funkcija
ispisNiza([9, 8, 7, 6], (p) => {
  console.log(p);
});

// forEach petlja
a.forEach(ispisKonzola);

//forEach petlja - prolazi kroz sve elemente niza i za svaki element niza, poziva callback funkciju i prosledjuje vrednost elementa kao argument
// let a = [-6, 8, 11, 6, 0];
// ispisKonzola(-6);
// ispisKonzola(8);
// ispisKonzola(11);
// ispisKonzola(6);
// ispisKonzola(0);

b.forEach(ispisKonzola);
// let b = ["pera", "Laza", "mika"];

a.forEach(function (e) {
  console.log(e);
});

a.forEach((e) => {
  let div = document.getElementById("container");
  div.innerHTML += e + " ";
});

a.forEach((e, i) => {
  console.log(`element ${e} u nizu ima index ${i}`);
});
