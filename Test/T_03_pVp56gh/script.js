let automobil1 = {
  marka: "Mercedes",
  km: 150.0,
  godiste: 2005,
  vlasnici: ["Pera", "Mika", "Laza"],
};
let automobil2 = {
  marka: "Fiat",
  km: 110.0,
  godiste: 2007,
  vlasnici: ["Pera", "Mika", "Slabvko", "Marko"],
};
let automobil3 = {
  marka: "Reno",
  km: 180.0,
  godiste: 2015,
  vlasnici: ["Iva", "Mika", "Laza"],
};
let automobili = [automobil1, automobil2, automobil3];

//a Napisati funkciju prosecnoGodiste kojoj se prosleđuje niz automobila, a koja
// vraća prosečno godište proizvodnje automobila.
// Ukoliko je prosečno godište automobila realan broj, zaokružiti ga na donji ceo
// deo.
// Pozvati funkciju i rezultat ispisati u konzoli.
let prosecnoGodiste = (niz) => {
  let suma = 0;
  let br = 0;
  niz.forEach((auto) => {
    suma += auto.godiste;
    br++;
  });
  let rez = suma / br;
  console.log(Math.floor(rez));
};
prosecnoGodiste(automobili);

// Napisati funkciju markaNajmanjeKm kojoj se prosleđuje niz automobila kao i
// marka automobila, a koja vraća automobil (objekat) sa zadatom markom, a koji je
// prešao najmanje kilometara.
// Ukoliko nema automobila sa datom markom, kao rezultat vratiti null.
// Ukoliko ima tačno jedan automobil sa datom markom, vratiti taj automobil.
// Ukoliko ima više automobila sa datom markom koji su prešli isti broj kilometara,
// vratiti najskorije proizveden takav automobil. Ukoliko, pak, ima i više takvih
// automobila, vratiti bilo koji od njih.
let markaNajmanjeKm = (niz, marka) => {
  let br = 0;
  let min = 0;
  let rez;
  niz.forEach((auto) => {
    if (auto.marka == marka) {
      if (auto.km < min) {
        min = auto.km;
      }
      if (auto.km == min) {
        br++;
      }
    }
    if (br < 1) {
      rez = null;
    } else if (br == 1) {
      rez = auto;
    } else if (br > 1) {
      rez = auto;
    }
  });
  console.log(rez);
};
markaNajmanjeKm(automobili, "Fiat");

// Napisati funkciju prosekKm10 kojoj se prosleđuje niz automobila, a koja vraća
// prosečnu pređenu kilometražu svih automobila ne starijih od 10 godina.
// Pozvati funkciju i rezultat ispisati u konzoli.

let prosekKm10 = (niz) => {
  let suma = 0;
  let br = 0;
  niz.forEach((auto) => {
    if (auto.godiste > 2014) {
      suma += auto.km;
      br++;
    }
  });
  console.log(suma - br);
};
prosekKm10(automobili);

//  Napisati funkciju rokfeler kojoj se prosleđuje niz automobila kao i ime vlasnika, a
// koja vraća true ukoliko postoji vlasnik sa zadatim imenom koji je u svom
// vlasništvu posedovao više od dva automobila, a u suprotnom vraća false.
// Pozvati funkciju i rezultat ispisati u konzoli.
let rokfeler = (niz, vlasnik) => {
  let brVlasnistva = 0;
  niz.forEach((auto) => {
    let vlasnikV = true;
    auto.vlasnici.forEach((imeVlasnika) => {
      if (imeVlasnika == vlasnik) {
        brVlasnistva++;
        // console.log(brVlasnistva);
      }
    });
    if (brVlasnistva < 2) {
      vlasnikV = false;
    }
    console.log(vlasnikV);
  });
};
rokfeler(automobili, "Iva");

//  Pretpostavimo da su u niz objekata automobili dodavani po redosledu dolaska na
// auto plac. Drugim rečima, na početku niza nalaze se automobili koji su ranije
// došli na plac, dok se na kraju niza nalaze automobili koji su skorije došli na plac.
// Što je veći indeks automobila u nizu, to je skorije došao na plac.
// Podelimo niz automobila na dva dela - jednu polovinu čine automobili koji su od
// ranije na placu, a drugu polovinu čine automobili koji su skorije došli na plac.
// Ukoliko u nizu ima neparan broj elemenata, tada prvi deo ima jedan više
// automobil od drugog dela, u suprotnom prva i druga polovina niza imaju jednak
// broj automobila.
// Napisati funkciju skorije koja vraća true ukoliko je polovina automobila koja je
// skorije došla na plac u proseku mlađa (po godini proizvodnje) od polovine
// automobila koja je ranije došla na plac.
// Pozvati funkciju i rezultat ispisati u konzoli.

let skorije = (niz) => {
  let skorijaVrednost = true;
  niz.forEach((auto) => {
    let niz1 = Math.floor(auto.vlasnici.length / 2);
    let niz2 = auto.vlasnici.length - niz1;
    if (niz2.prosecnoGodiste(niz) > niz1.prosecnoGodiste(niz)) {
      skorijaVrednost = false;
    }
  });
};
skorije(automobili);
