let let1 = {
  destinacija: "London",
  brojPutnika: 40,
  brojMesta: 100,
};
let let2 = {
  destinacija: "Moskva",
  brojPutnika: 83,
  brojMesta: 120,
};
let let3 = {
  destinacija: "Barselona",
  brojPutnika: 60,
  brojMesta: 90,
};
let let4 = {
  destinacija: "Amsterdam",
  brojPutnika: 72,
  brojMesta: 75,
};
let let5 = {
  destinacija: "Rim",
  brojPutnika: 96,
  brojMesta: 100,
};
let letovi = [let1, let2, let3, let4, let5];
let maxBrojPutnika = (niz) => {
  let max = niz[0].brojPutnika;
  niz.forEach((l) => {
    if (l.brojPutnika > max) {
      max = l.brojPutnika;
    }
  });
  return max;
};
console.log(maxBrojPutnika(letovi));
let brojMax = (niz) => {
  let br = 0;
  niz.forEach((l) => {
    if (l.brojPutnika == l.brojMesta) {
      br++;
    }
  });
  return br;
};
console.log(brojMax(letovi));
let prosek = (niz) => {
  let suma = 0;
  niz.forEach((l) => {
    suma += l.brojPutnika;
  });
  return suma / niz.length;
};
console.log(prosek(letovi));
let isplativ = (niz) => {
  let isplativ = true;
  niz.forEach((l) => {
    if (l.brojPutnika <= l.brojMesta / 2) {
      isplativ = false;
    }
  });
  return isplativ;
};
console.log(isplativ(letovi));
let iznadGranice = (niz, granica) => {
  let br = 0;
  niz.forEach((l) => {
    if (l.brojPutnika > granica) {
      br++;
    }
  });
  return br > niz.length / 2 ? true : false;
};
console.log(iznadGranice(letovi, 60));
let dobreDestinacije = (niz) => {
  niz.forEach((l) => {
    if (l.brojPutnika > prosek(niz)) {
      console.log(l.destinacija);
    }
  });
};
dobreDestinacije(letovi);
let ukupanBrojPutnikaDestinacije = (naziv, niz) => {
  niz.forEach((l) => {
    if (naziv == l.destinacija) {
      console.log(l.brojPutnika);
    }
  });
};
ukupanBrojPutnikaDestinacije("Moskva", letovi);
let slabaProdaja = (niz) => {
  let najvecaRazlika = 0;
  let letNajRazlika = niz[0];
  niz.forEach((l) => {
    if (l.brojMesta - l.brojPutnika > najvecaRazlika) {
      najvecaRazlika = l.brojMesta - l.brojPutnika;
      letNajRazlika = l;
    }
  });
  return letNajRazlika.destinacija;
};
console.log(slabaProdaja(letovi));
