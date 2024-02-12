// Ispisati dužinu svakog elementa u nizu stringova.
let imena = ["Kolfffffe", "Iva", "Taffsa", "fAna", "Gaesdfrisa"];
let duzinaElementa = (niz) => {
  for (let i = 0; i < niz.length; i++) {
    let duzina = niz[i].length;
    console.log(duzina);
  }
};
duzinaElementa(imena);

// Odrediti element u nizu stringova sa najvećom dužinom.

let najvecaDuzinaElementa = (niz) => {
  let max = 0;
  let najduziElement = "";
  for (let i = 0; i < niz.length; i++) {
    if (niz[i].length > max) {
      max = niz[i].length;
      najduziElement = niz[i];
    }
  }
  return najduziElement;
};
console.log(najvecaDuzinaElementa(imena));

//Odrediti broj elemenata u nizu stringova čija je dužina veća od prosečne dužine svih stringova u nizu.

let brE = (niz) => {
  let brElemenataNajduzih = 0;
  let suma = 0;
  let prosecnaDuzina = 0;
  for (let i = 0; i < niz.length; i++) {
    suma += niz[i].length;
  }
  prosecnaDuzina = suma / niz.length;
  for (let i = 0; i < niz.length; i++) {
    if (niz[i].length > prosecnaDuzina) {
      brElemenataNajduzih++;
    }
  }
  return brElemenataNajduzih;
};
console.log(brE(imena));

// Odrediti broj elemenata u nizu stringova koji sadrže slovo 'a’.

// let imena = ["Kolfffffe", "Iva", "Taffsa", "fAna", "Gaesdfrisa"];

// let sadrzeSlovoA = (niz) => {
//   let br = 0;
//   for (let i = 0; i < niz.length; i++) {
//     for (let x = 0; x < niz[i].length; x++) {
//       if (niz[i][x] === "a") {
//         br++;
//         console.log(br);
//       }
//     }
//     //   let elementImaA = niz.length - br;
//     //   console.log(elementImaA, br, niz.length);
//     //   return elementImaA;
//   }
// };
// sadrzeSlovoA(imena);

// 4 zadatak
// Napisati funkciju maks2 koja vraća veći od dva prosleđena realna broja. Zatim napisati funkciju maks4 koja vraća najveći od četiri prosleđena realna broja.

function maks2(br1, br2) {
  if (br1 > br2) {
    return br1;
  } else {
    return br2;
  }
}
function maks4(a, b, d, c) {
  let maxprvaDva = maks2(a, b);
  let maxDrugaDva = maks2(d, c);
  return maks2(maxprvaDva, maxDrugaDva);
}

console.log(maks4(1, 5, 11, 13));

//8 Napisati funkciju deljivSaTri koja se koristi u ispisivanju brojeva koji su deljivi sa tri u intervalu od n do m.
// Prebrojati koliko ima ovakvih brojeva od n do m.
function deljivSaTri(n, m) {
  let br = 0;
  for (i = n; i <= m; i++) {
    if (i % 3 == 0) {
      console.log(`Brojevi deljivi sa tri su ${i}`);
      br++;
    }
  }
  console.log(`ima ih ${br}`);
}
deljivSaTri(15, 30);

//11 Napraviti funkciju aritmeticka koja vraća aritmetičku sredinu brojeva od n do m.
// Brojeve n i m proslediti kao parametre funkciji.
function aritmeticka(n, m) {
  let suma = 0;
  br = 0;
  for (i = n; i <= m; i++) {
    suma += i;
    br++;
  }
  return suma / br;
}
console.log(aritmeticka(3, 6));

//12 Napisati funkciju aritmetickaTri koja vraća aritmetičku sredinu brojeva kojima je poslednja cifra 3 u intervalu od n do m. Brojeve n i m proslediti kao parametre funkciji.
function arutmetickaTri(n, m) {
  let suma = 0;
  let br = 0;
  for (i = n; i <= m; i++) {
    if (i % 10 == 3) {
      suma += i;
      br++;
    }
  }
  let arsr = suma / br;
  return arsr;
}
console.log(arutmetickaTri(3, 20));
//13 Napisati funkciju velicinaFonta kojoj se prosleđuje ceo broj a ona ispisuje tekst koji ima prosleđenu veličinu fonta.
function velicinaFonta(font) {
  document.write(`<p style = "font-size: ${font}px">Ovde ide text</p>`);
}
velicinaFonta("50");

//14   Napisati funkciju recenica5 koja pet puta ispisuje istu rečenicu, a veličina fonta rečenice treba da bude jednaka vrednosti iteratora.
function recenica5() {
  for (i = 15; i <= 20; i++) {
    document.write(`<p style = "font-size: ${i}px">Ovde ide text ${i}</p>`);
  }
}
recenica5();
// 3 Napisati funkciju deljiv kojoj se prosleđuju tri parametra n, m i k. Funkcija na ekranu treba da ispiše broj brojeva od n do m koji su deljivi brojem k. Pozvati funkciju.

function deljiv(n, m, k) {
  let br = 0;
  for (let i = n; i <= m; i++) {
    if (i % k == 0) {
      br++;
    }
  }
  return br;
}
console.log(deljiv(15, 21, 3));

// 2 Napisati funkciju koja vraća sliku za prosledjenu adresu slike.
//Rezultat poziva iskoristiti da sliku prikažete u browseru.
let prikazSlike = (adresa) => `<img src= "${adresa}">`;
document.body.innerHTML += prikazSlike(
  "https://stil.kurir.rs/data/images/2017/11/12/16/132435_shutterstock-259729697_ls.jpg"
);
// ZADATAK 13  Izračunati sumu elemenata niza sa parnim indeksom.
let brojevi1 = [8, 4, 9, 2, 0, 6];
let sumaNiza = (niz) => {
  let suma = 0;
  for (let i = 0; i < niz.length; i += 2) {
    suma += niz[i];
  }
  return suma;
};
console.log(sumaNiza(brojevi1));
