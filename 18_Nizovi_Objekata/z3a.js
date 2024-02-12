let let1 = {
  destinacija: "London",
  brojPutnika: 50,
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

//a maxBrojPutnika kojoj se prosleđuje niz letova, a funkcija vraća maksimalan broj putnika na nekom od letova.

let maxBrojPutnika = (niz) => {
  let max = 0;
  niz.forEach((let) => {
    if (let.brojPutnika > max) {
      max = let.brojPutnika;
    }
  });
  return max;
};
console.log(maxBrojPutnika(letovi));

//b Napisati funkciju brojMax kojoj se prosleđuje niz letova, a funkcija vraća broj letova na kojima je leteo maksimalan broj putnika.

let brojMax = (niz) => {
  let brLetova = 0;
  niz.forEach((let) => {
    if (maxBrojPutnika(letovi) == let.brojPutnika) {
      brLetova++;
    }
  });
  return brLetova;
};
console.log(brojMax(letovi));

//c Napisati funkciju prosek kojoj se prosleđuje niz letova, a funkcija vraća prosečan broj putnika po letu sa niškog aerodroma tog dana.
let prosek = (niz) => {
  suma = 0;
  br = 0;
  niz.forEach((let) => {
    suma += let.brojPutnika;
    br++;
  });
  return suma / br;
};
console.log(prosek(letovi));

//d Dan je bio isplativ za niški aerodrom, ukoliko je više od polovine svakog leta bilo popunjeno (broj putnika na letu bio je veći od polovine mesta na letu).

let isplativ = (niz) => {
  let isplatiV = true;
  niz.forEach((let) => {
    if (let.destinacija == "Rim") {
      if (let.brojPutnika <= let.brojMesta / 2) {
        isplatiV = false;
      }
    }
  });
  return isplatiV;
};
console.log(isplativ(letovi));

//e Dan je bio iznadGranice ukoliko je u većini letova broj putnika bio veći od zadate granice. Napisati funkciju kojoj se prosleđuju niz letova, kao i granica (ceo broj), a funkcija ispituje da li je dan bio isplativ (vraća true ako jeste i false ako nije).

let iznadGranice = (niz, granica) => {
  let br = 0;

  niz.forEach((let) => {
    if (let.brojPutnika > granica) {
      br++;
    }
  });
  return br > niz.length / 2;
};
console.log(iznadGranice(letovi, 80));

//f Napisati funkciju dobreDestinacije kojoj se prosleđuje niz letova, a funkcija ispisuje letove sa natprosečnim brojem putnika.

let dobreDestinacije = (niz) => {
  niz.forEach((let) => {
    if (let.brojPutnika > prosek(letovi)) {
      console.log(let.destinacija);
    }
  });
};
dobreDestinacije(letovi);

//g Napisati funkciju ukupanBrojPutnikaDestinacije kojoj se prosleđuju string koji predstavlja naziv destinacije i niz letova, a funkcija vraća broj putnika koji je danas leteo na tu destinaciju.
let ukupanBrojPutnikaDestinacije = (niz, destinacija) => {
  let suma = 0;
  niz.forEach((let) => {
    if (let.destinacija == destinacija) {
      suma += let.brojPutnika;
    }
  });
  console.log(suma);
};
ukupanBrojPutnikaDestinacije(letovi, "Rim");

// h Napisati funkciju slabaProdaja kojoj se prosleđuje niz letova, a funkcija vraća onaj let koji je imao najveću razliku između broja putnika na letu i broja mesta na letu.

let slabaProdaja = (niz) => {
  let maxRazlika = 0;
  let razlika = 0;
  let destinacija = "";
  niz.forEach((let) => {
    razlika = let.brojMesta - let.brojPutnika;
    if (razlika > maxRazlika) {
      maxRazlika = razlika;
      destinacija = let.destinacija;
    }
  });
  console.log(maxRazlika, destinacija);
};
slabaProdaja(letovi);
