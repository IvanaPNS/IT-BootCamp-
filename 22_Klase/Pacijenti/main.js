import Pacijent from "./pacijent.js";

let pacijent1 = new Pacijent("Marko", 190, 100);
let pacijent2 = new Pacijent("Milos", 185, 120);
let pacijent3 = new Pacijent("Katarina", 167, 55);

let pacijenti = [pacijent1, pacijent2, pacijent3];

pacijenti.forEach((pacijent) => {
  pacijent.stampaj();
});
pacijenti.forEach((pacijent) => {
  console.log(pacijent.bmi());
});
pacijenti.forEach((pacijent) => {
  console.log(pacijent.kritican());
});

// pacijent1.stampaj();
// pacijent1.bmi();
// pacijent1.kritican();
// console.log(pacijent1.kritican());
// console.log(pacijent1.bmi());

//ispisati podatke sa pacijentom sa najmanjom tezinom
let pacijentSaNajmanjomTezinom = (niz) => {
  let minTezinaPacijent = niz[0]; // cuva ceo objekat
  let minTezina = minTezinaPacijent.tezina; // cuva samo tezinu
  niz.forEach((p) => {
    if (p.tezina < minTezina) {
      minTezina = p.tezina;
      minTezinaPacijent = p;
    }
  });
  return minTezinaPacijent;
};
pacijentSaNajmanjomTezinom(pacijenti).stampaj();
// let rez = pacijentSaNajmanjomTezinom(pacijenti);
// rez.stampaj();
//ili krace

//Ispisati podatke o pacijentu sa najvećim bmi vrednošću.
let pacijentSaNajvecimBMIvrednoscu = (niz) => {
  let minBMIPacijent = niz[0];
  let minBMI = minBMIPacijent.bmi();
  niz.forEach((e) => {
    if (e.bmi() > minBMI) {
      minBMI = e.bmi();
      minBMIPacijent = e;
    }
  });
  return minBMIPacijent;
};
pacijentSaNajvecimBMIvrednoscu(pacijenti).stampaj();

//Ispisati sve pacijente čije ime sadrži slovo A.
let pacijentSaA = (niz) => {
  let pacijentiA = [];
  niz.forEach((pacijent) => {
    if (pacijent.ime.includes("a") || pacijent.ime.includes("A")) {
      pacijentiA.push(pacijent);
      // console.log(pacijent);
    }
  });
  return pacijentiA;
};
pacijentSaA(pacijenti).forEach((p) => {
  p.stampaj();
});

// Napraviti funkciju srednjaVisina kojoj se prosleđuje niz pacijanata a koja određuje i vraća srednju visinu pacijenata.

let srednjaVisina = (niz) => {
  let sumaVisina = 0;
  niz.forEach((pacijent) => {
    sumaVisina += pacijent.visina;
  });
  return sumaVisina / niz.length;
};
console.log(`Srednja visina pacijenata je : ${srednjaVisina(pacijenti)}`);
