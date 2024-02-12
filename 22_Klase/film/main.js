import Film from "./film.js";
let film1 = new Film(
  "Cuvari formule",
  "Dragan Bjelogrlic",
  2023,
  [9, 10, 8, 8, 6, 10, 10, 9]
);
let film2 = new Film(
  "Klopka",
  "Srdjan Golubovic",
  2007,
  [9, 9, 9, 8, 7, 10, 10, 8, 6]
);
let film3 = new Film(
  "Maratonci trce pocasni krug",
  "Slobodan Sijan",
  1982,
  [8, 9.1, -8, 18, 9]
);

let filmovi = [film1, film2, film3];

film1.stampaj();
filmovi[2].stampaj();

console.log("Ispis for petljom");
for (let i = 0; i < filmovi.length; i++) {
  filmovi[i].stampaj();
}

filmovi.forEach((film) => {
  film.stampaj();
});

console.log(film3);

console.log(`Prosecna ocena filma ${film1.naslov} je : ${film1.prosecna()}`);

// Napraviti funkciju vekFilmova kojoj se prosleđuje niz filmova i ceo broj (vek), a funkcija ispisuje samo one filmove koji su stvoreni u prosleđenom veku

//1801-1900 -19.vek
//1901 - 2000 -20.vek
//2001-...-21. vek

let vekFilmova = (niz, vek) => {
  niz.forEach((film) => {
    //1801/100 = 18.01 = Math.cell 19
    //1850/100 = 18.5 = Math.cell 19
    //1900 /100 = 19 = Math.cell = 19
    let vekFilma = Math.ceil(film.godinaIzdavanja / 100);
    if (vekFilma == vek) {
      film.stampaj();
    }
  });
};
vekFilmova(filmovi, 20);

//Napraviti funkciju prosecnaOcena kojoj se prosleđuje niz filmova, a koja određuje i vraća  prosečnu ocenu svih filmova.

let prosecnaOcena = (niz) => {
  let suma = 0;
  let br = 0;
  niz.forEach((film) => {
    film.ocene.forEach((ocena) => {
      suma += ocena;
      br++;
    });
  });
  return suma / br;
};
console.log(`Prosecna ocena svih filmova je : ${prosecnaOcena(filmovi)}`);

// let prosecnaOcena = (niz) => {
//   let suma = 0;
//   let br = 0;
//   niz.forEach((film) => {
//     film.ocene.forEach((ocena) => {
//       suma += ocena;
//     });
//     br += film.ocene.length;
//   });
//   return suma / br;
// };
// console.log(`Prosecna ocena svih filmova je : ${prosecnaOcena(filmovi)}`);

// Napisati funkciju najcescaOcena kojoj se prosleđuje niz filmova, a ona vraća ocenu koju su filmovi najčešće dobijali (u opticaju su ocene 5, 6, 7, 8, 9 i 10).
let najcescaOcena = (niz) => {
  let br5 = 0;
  let br6 = 0;
  let br7 = 0;
  let br8 = 0;
  let br9 = 0;
  let br10 = 0;
  niz.forEach((el) => {
    el.ocene.forEach((o) => {
      switch (o) {
        case 5:
          br5++;
          break;
        case 6:
          br6++;
          break;
        case 7:
          br7++;
          break;
        case 8:
          br8++;
          break;
        case 9:
          br9++;
          break;
        case 10:
          br10++;
          break;
      }
    });
  });
  let nizOcena = [br5, br6, br7, br8, br9, br10];
  let maxElement = nizOcena[0];
  let maxIndex = 0;
  for (let i = 0; i < nizOcena.length; i++) {
    if (maxElement <= nizOcena[i]) {
      maxElement = nizOcena[i];
      maxIndex = i;
    }
  }
  console.log(nizOcena);
  return maxIndex + 5;
};
console.log(filmovi);
console.log(
  `Ocena koja se najvise puta ponavljala je: ${najcescaOcena(filmovi)}`
);

//drugi nacin

let najcescaOcena1 = (nizFilmova) => {
  let superNizOcene = [];
  nizFilmova.forEach((film) => {
    film.ocene.forEach((ocena) => {
      superNizOcene.push(ocena);
    });
  });

  let najOcena = null;
  let najOcenaBr = 0;
  [5, 6, 7, 8, 9, 10].forEach((ocena) => {
    let br = 0;
    superNizOcene.forEach((o) => {
      if (ocena == o) {
        br++;
      }
    });
    if (br > najOcenaBr) {
      najOcenaBr = br;
      najOcena = ocena;
    }
  });

  return najOcena;
};

console.log(`Najčešća ocena je: ${najcescaOcena1(filmovi)}`);

//treci nacin

let najcescaOcena2 = (niz) => {
  let el1;
  let brojac = 1;
  let max = 0;
  let velikiNiz = [];
  niz.forEach((el) => {
    el.ocene.forEach((ocena) => {
      velikiNiz.push(ocena);
    });
  });
  velikiNiz.sort(function (a, b) {
    return a - b;
  });
  for (let i = 1; i < velikiNiz.length; i++) {
    if (velikiNiz[i] == velikiNiz[i - 1]) {
      brojac++;
    } else {
      brojac = 1;
    }
    if (brojac > max) {
      max = brojac;
      el1 = velikiNiz[i];
    }
  }
  return el1;
};
console.log(`Najčešća ocena je: ${najcescaOcena2(filmovi)}`);

// Napraviti funkciju iznadOcene kojoj se prosleđuje ocena i niz filmova, a ona vraća niz onih filmova koji su bolje ocenjeni (veća im je prosečna ocena) od prosleđene ocene.
let iznadOcene = (niz, nekaOcena) => {
  let iznadOceneFilmovi = [];
  niz.forEach((f) => {
    if (f.prosecna() > nekaOcena) {
      iznadOceneFilmovi.push(f);
    }
  });
  return iznadOceneFilmovi;
};
console.log(iznadOcene(filmovi, 8));

// Napisati funkciju iznadOceneNoviji kojoj se prosleđuje ocena i niz filmova  a koja treba da na ekranu da ispiše sve podatke o najnovijem filmu koji zadovoljava prosleđenu ocenu.
// 1. nacin
let iznadOceneNoviji1 = (niz, nekaOcena) => {
  let iznadOCeneNiz = iznadOcene(niz, nekaOcena);
  let mladjiFilm = iznadOCeneNiz[0];
  niz.forEach((film) => {
    if (film.godinaIzdanja > mladjiFilm.godinaIzdanja) {
      mladjiFilm = film;
    }
  });
  return mladjiFilm;
};
let ocenaZaProsledjivanje = 8;
console.log(iznadOceneNoviji1(filmovi, ocenaZaProsledjivanje)); //proveriti

// 2. nacin
let iznadOceneNoviji = (niz, nekaOcena) => {
  let iznadOceneFilmovi = [];
  let mladjiFilm = niz[0];
  niz.forEach((f) => {
    if (f.prosecna() > nekaOcena) {
      iznadOceneFilmovi.push(f);
    }
  });
  iznadOceneFilmovi.forEach((el) => {
    if (el.godinaIzdanja > mladjiFilm.godinaIzdanja) {
      mladjiFilm = el;
    }
  });
  return mladjiFilm;
};
console.log(iznadOceneNoviji(filmovi, 8));

// mladjiFilm = iznadOceneFilmovi[0];
//Napraviti funkciju najboljeOcenjeni kojoj se prosleđuje niz filmova, a ona vraća najbolje ocenjeni film (film koji ima najveću prosečnu ocenu).

let najboljeOcenjeniFilm = (niz) => {
  let najboljeOcenjeni = niz[0]; //objekat film
  let najboljaOcena = najboljeOcenjeni.prosecna(); // ovo je vrednost prosecne ocene
  niz.forEach((film) => {
    if (film.prosecna() > najboljaOcena) {
      najboljaOcena = film.prosecna();
      najboljeOcenjeni = film;
    }
  });
  return najboljeOcenjeni;
};
console.log(
  `Najbolje ocenjen je film: ${najboljeOcenjeniFilm(filmovi).naslov}`
);

// Napraviti funkciju najmanjaOcenaNajboljeg kojoj se prosleđuje niz filmova a ona određuje najbolji film i ispisuje njegovu najslabiju ocenu.
let najmanjaOcenaNajboljeg = (niz) => {
  let najboljiFilm = najboljeOcenjeniFilm(niz);
  let najmanjaOcena = najboljiFilm.ocene[0]; //pretpostavka
  najboljiFilm.ocene.forEach((ocena) => {
    if (ocena < najmanjaOcena) {
      najmanjaOcena = ocena;
    }
  });
  return najmanjaOcena;
};
console.log(
  `Najmanja ocena najbolje ocenjenog filma je: ${najmanjaOcenaNajboljeg(
    filmovi
  )}`
);

// Napraviti funkciju osrednjiFilm kojoj se prosleđuje niz filmova a ona vraća film koji je najbliži prosečnoj oceni svih filmova.
let osrednjiFilm = (niz) => {
  let nekiFilm = niz[0]; // nekiFilm = film jer se trazi OBJEKAT vraca film
  let prosecnaOcenaSvihFilmova = prosecnaOcena(niz);
  let najmanjaProsecnaOcena = niz[0].prosecna();
  let najmanjaRazlika = Math.abs(
    prosecnaOcenaSvihFilmova - najmanjaProsecnaOcena
  );
  niz.forEach((film) => {
    if (
      Math.abs(prosecnaOcenaSvihFilmova - film.prosecna()) < najmanjaRazlika
    ) {
      nekiFilm = film;
      najmanjaRazlika = Math.abs(prosecnaOcenaSvihFilmova - film.prosecna());
    }
  });
  return nekiFilm;
};
console.log(osrednjiFilm(filmovi));

//Napisati funkciju najmanjaOcena kojoj se prosleđuje niz filmova, a koja vraća koja je najmanja ocena koju je bilo koji film dobio.
// let najmanjaOcena = (niz) => {
//   let najmanjaOcenaA = niz[0].ocena[0];
//   niz.forEach((film) => {
//     film.ocene.forEach((ocena) => {
//       if (ocena < najmanjaOcenaA) {
//         najmanjaOcenaA = ocena;
//         najmanjaOcenaA = film;
//       }
//     });
//   });
//   return najmanjaOcenaA;
// };
// console.log(najmanjaOcena(filmovi));

// 2. način - ne zahteva dodatnu memoriju
let najmanjaOcena2 = (niz) => {
  let minOcena = niz[0].ocene[0];
  niz.forEach((film) => {
    film.ocene.forEach((ocena) => {
      if (ocena < minOcena) {
        minOcena = ocena;
      }
    });
  });
  console.log(minOcena);
};
najmanjaOcena2(filmovi);
