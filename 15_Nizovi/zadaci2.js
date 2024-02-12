// Ispisati dužinu svakog elementa u nizu stringova.
let imena = ["Nemanja", "Iva", "Tamara", "Katarina", "Ana", "Sandra", "Comi"];
let duzinaElementa = (niz) => {
  for (let i = 0; i < niz.length; i++) {
    let s = niz[i];
    console.log(s.length);
  }
};
duzinaElementa(imena);

//20 Odrediti element u nizu stringova sa najvećom dužinom.

let najvecaDuzinaElementa = (niz) => {
  let maxString = niz[0]; //string sa max duzinom
  let maxDuzina = maxString.length;
  for (let i = 1; i < niz.length; i++) {
    let s = niz[i];
    if (s.length > maxDuzina) {
      maxString = s;
      maxDuzina = s.length;
    }
  }
  return maxString;
};
console.log(najvecaDuzinaElementa(imena));

//21 Odrediti broj elemenata u nizu stringova čija je dužina veća od prosečne dužine svih stringova u nizu.

let brE = (niz) => {
  let brElemenataNajduzih = 0;
  let suma = 0;

  for (let i = 0; i < niz.length; i++) {
    suma += niz[i].length;
  }
  let prosecnaDuzina = suma / niz.length;
  for (let i = 0; i < niz.length; i++) {
    if (niz[i].length > prosecnaDuzina) {
      brElemenataNajduzih++;
    }
  }
  return brElemenataNajduzih;
};
console.log(brE(imena));

// Zadatak 22
// Odrediti broj elemenata u nizu stringova koji sadrže slovo 'a’.
// 1. nacin
let brElKojiSadrzeA = (niz) => {
  let brojac = 0;
  for (let i = 0; i < niz.length; i++) {
    // prolazim kroz sve elemente niza
    for (let j = 0; j < niz[i].length; j++) {
      // prolazim kroz sve karaktere svakog elementa niza
      if (niz[i][j] == "a") {
        brojac++;
        break; // ovo govori: kada se prvi put stekne uslov true izadji iz petlje ne zanima me dalje(neke rijeci sadrze vise 'a') pa zato ide break.
      }
    }
  }
  return brojac;
};
console.log(brElKojiSadrzeA(imena));
// 2. nacin
let brElKojiSadrzeA2 = (niz) => {
  let brojac = 0;
  for (let i = 0; i < niz.length; i++) {
    if (niz[i].includes("a")) {
      brojac++;
    }
  }
  return brojac;
};
console.log(brElKojiSadrzeA2(imena));

// 23 Odrediti broj elemenata u nizu stringova koji počinju na slovo 'a' ili 'A’.
// Zadatak 23
// Odrediti broj elemenata u nizu stringova koji počinju na slovo 'a' ili 'A’.
// 1. nacin
let brElKojiPocinjuSaA = (niz) => {
  let brojac = 0;
  for (let i = 0; i < niz.length; i++) {
    if (niz[i][0] == "a" || niz[i][0] == "A") {
      brojac++;
    }
  }
  return brojac;
};
console.log(brElKojiPocinjuSaA(imena));

// 2. nacin

let brElKojiPocinjuSaA1 = (niz) => {
  let brojac = 0;
  for (let i = 0; i < niz.length; i++) {
    if (niz[i].startsWith("a") || niz[i].startsWith("A")) {
      brojac++;
    }
  }
  return brojac;
};
console.log(brElKojiPocinjuSaA1(imena));

//24

let zad24a = (a, b) => {
  let n = a.length; //n = b.length
  c = [];
  for (let i = 0; i < n; i++) {
    c.push(a[i], b[i]);
  }
};
// console.log(zad24a());

let zad24b = (a, b) => {
  let n = a.length;
  let c = [];
  for (let i = 0; i < n; i++) {
    c[2 * i] = a[i];
    c;
  }
};
