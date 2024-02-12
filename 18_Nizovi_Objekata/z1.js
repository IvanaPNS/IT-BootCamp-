let student1 = {
  ime: "Tamara",
  prezime: "Vilotijevic",
  godStudija: 4,
  ocene: [10, 10, 10, 10, 10, 10, 10],
  prosekOcena: function () {
    let suma = 0;
    this.ocene.forEach((el) => {
      suma += el;
    });
    return suma / this.ocene.length;
  },
};
let student2 = {
  ime: "Petar",
  prezime: "Vilotijevic",
  godStudija: 4,
  ocene: [7, 6, 6, 7, 6, 6, 7],
  prosekOcena: function () {
    let suma = 0;
    this.ocene.forEach((el) => {
      suma += el;
    });
    return suma / this.ocene.length;
  },
};
let student3 = {
  ime: "Vanja",
  prezime: "Krstic",
  godStudija: 3,
  ocene: [7, 8, 9, 7, 7],
  prosekOcena: function () {
    let suma = 0;
    this.ocene.forEach((el) => {
      suma += el;
    });
    return suma / this.ocene.length;
  },
};
let student4 = {
  ime: "Nina",
  prezime: "Vlaovic",
  godStudija: 2,
  ocene: [10, 10, 10, 9, 10],
  prosekOcena: function () {
    let suma = 0;
    this.ocene.forEach((el) => {
      suma += el;
    });
    return suma / this.ocene.length;
  },
};
let studenti = [student1, student2, student3, student4];

//a Funkciji se prosleđuje niz studenata i string koji sadrži jedan karakter, a štampa imena i prezimena svih studenata čije prezime počinje na zadato slovo.

let funkcijaA = (niz, karakter) => {
  niz.forEach((e) => {
    if (e.prezime[0] == karakter) {
      console.log(e.ime + " " + e.prezime);
    }
  });
};
funkcijaA(studenti, "V");

//b Funkciji se prosleđuje niz studenata i dva stringa, a štampa imena i prezimena svih studenata čije ime sadrži prvi string, a prezime sadrži drugi string.
let funkcijaB = (niz, string1, string2) => {
  niz.forEach((student) => {
    if (student.ime.includes(string1) && student.prezime.includes(string2)) {
      console.log(student.ime + " " + student.prezime);
    }
  });
};
funkcijaB(studenti, "na", "ic");

//c Funkciji se prosleđuje niz studenata i ceo broj između 1 i 5 koji predstavlja godinu studija, a vraća broj studenata koji se nalaze na prosleđenoj godini studija.

let funkcijaC = (niz, br) => {
  let brojac = 0;
  niz.forEach((student) => {
    if (student.godStudija == br) {
      brojac++;
    }
  });
  console.log(`Broj studenata na ${br}. godini studija je ${brojac}`);
};
funkcijaC(studenti, 2);

//d Funkciji se prosleđuje niz studenata, a ona ispisuje ime i prezime studenta sa maksimalnim prosekom. Ukoliko ima više takvih studenata, ispisati ime i prezime bilo kog takvog studenta.
let izracunajProsek = (nizOcena) => {
  let suma = 0;
  nizOcena.forEach((ocena) => {
    suma += ocena;
  });
  return suma / nizOcena.length;
};
// let funkcijaD = (niz) => {
//   let studentObj = [];
//   let maxProsek = 7;
//   niz.forEach((student) => {
//     let prosecnaOcena = izracunajProsek(student.ocene);
//     if (prosecnaOcena > maxProsek) {
//       studentObj.push({
//         ime: student.ime,
//         prezime: student.prezime,
//         prosek: prosecnaOcena,
//       });
//     }
//   });
//   return studentObj;
// };
// let y = funkcijaD(studenti);
// console.log(y);

let funkcijaD = (niz) => {
  let maxProsek = 0;
  let najboljiStudent;
  niz.forEach((student) => {
    let suma = 0;
    student.ocene.forEach((ocena) => {
      suma += ocena;
    });
    // console.log(suma);
    let prosekStudenta = suma / student.ocene.length;
    // console.log((suma = suma / student.ocene.length));
    if (prosekStudenta > maxProsek) {
      maxProsek = prosekStudenta;
      najboljiStudent = {
        ime: student.ime,
        maxProsek: maxProsek,
      };
    }
  });
  return maxProsek; //najboljiStudent
};
console.log(funkcijaD(studenti));
// let x = funkcijaD(studenti);

// console.log(x.ime, x.maxProsek);

// e Funkciji se prosleđuje jedan broj u intervalu od 1 do 5 i niz studenata, a ona ispisuje ime i prezime studenta sa maksimalnim prosekom, koji je na prosleđenoj godini studija. Ukoliko ima više takvih studenata, ispisati ime i prezime svih takvih studenata.
let funkcijaE = (niz, br) => {
  niz.forEach((student) => {
    if (
      student.godStudija == br &&
      funkcijaD(niz) == izracunajProsek(student.ocene)
    ) {
      console.log(
        `Student sa maksimalnim prosekom koji je na prosledjenoj godini je ${student.ime} ${student.prezime}`
      );
    }
  });
};
funkcijaE(studenti, 4);

// f Student je prosečan ako nema nijednu šesticu i nijednu desetku. Funkciji se prosleđuje niz studenata, a ona ispisuje sve prosečne studente.

let funkcijaF = (niz) => {
  niz.forEach((student) => {
    let prosecan = true;
    student.ocene.forEach((ocena) => {
      if (ocena == 6 || ocena == 10) {
        prosecan = false;
      }
    });
    if (prosecan) {
      console.log(`prosecan studet je ${student.ime} ${student.prezime}`);
    }
  });
};
funkcijaF(studenti);

//g Student je “ekstra” ako je polagao ispite samo sa devetkama i desetkama, i pri tome je broj desetki barem duplo veći od broja devetki. Funkciji se prosleđuje niz studenata, a ona ispisuje sve ekstra studente.

let extra = (niz) => {
  niz.forEach((student) => {
    let ekstra = true;
    let br9 = 0;
    let br10 = 0;
    student.ocene.forEach((ocena) => {
      if (ocena != 9 && ocena !== 10) {
        ekstra = false;
      }
      if (ocena == 9) {
        br9++;
      } else if (ocena == 10) {
        br10++;
      }
    });

    if (ekstra) {
      if (br10 >= 2 * br9) {
        console.log(student.ime);
      }
    }
  });
};
extra(studenti);

// h Student “kida” ako je polagao ispite samo samo sa devetkama i desetkama, a broj devetki je manji od godine studije na kojoj se student nalazi. Funkciji se prosleđuje niz studenata, a ona ispisuje sve studente koji kidaju.
let kida = (niz) => {
  niz.forEach((student) => {
    let kidaStudent = true;
    let br9 = 0;
    student.ocene.forEach((ocena) => {
      if (ocena != 9 && ocena !== 10) {
        kidaStudent = false;
      }
      if (ocena == 9) {
        br9++;
      }
    });

    if (kidaStudent) {
      if (br9 < student.godStudija) {
        console.log(student.ime + " " + student.prezime);
      }
    }
  });
};
kida(studenti);

// i Student “razbija” ako je sve ispite položio sa ocenom deset. Pri tome, broj desetki ne sme biti manji od broja 5 * (godina_studija - 1). (Dakle, ne može student na trećoj godini da razbija ako je položio jedan ispit, kao što nijedan student prve godine još ne može da razbija, jer još nije položio sve ispite iz tekuće godine). Funkciji se prosleđuje niz studenata, a ona ispisuje sve studente koji razbijaju.

let razbija = (niz) => {
  niz.forEach((student) => {
    let razbijaStudent = true;

    let br10 = 0;
    student.ocene.forEach((ocena) => {
      if (ocena == 10) {
        br10++;
      } else {
        razbijaStudent = false;
      }
    });

    if (razbijaStudent) {
      if (br10 > 5 * (student.godStudija - 1) && student.godStudija > 1) {
        console.log(student.ime + " " + student.prezime);
      }
    }
  });
};
razbija(studenti);

//j Student je “aljkav” ako nijedan ispit nije položio sa ocenom većom od 7. Funkciji se prosleđuje niz studenata, a ona prebrojava sve aljkave studente.

let aljkav = (niz) => {
  let brAljkavaca = 0;
  niz.forEach((student) => {
    let aljkavac = true;
    student.ocene.forEach((ocena) => {
      if (ocena > 7) {
        aljkavac = false;
      }
    });
    if (aljkavac) {
      brAljkavaca++;
    }
  });
  console.log(brAljkavaca);
};
aljkav(studenti);

// k Student se “bruka” ako nije student prve godine, a broj položenih ispita je manji od broja 3 * (godina_studija - 1), i pri tome nijedna ocena nije veća od 7. Funkciji se prosleđuje niz studenata, a ona prebrojava sve studente koji se brukaju.
let bruka = (niz) => {
  niz.forEach((student) => {
    student.ocene.forEach((ocena) => {
      if (
        student.godStudija != 1 &&
        student.ocene.length < 3 * (student.godStudija - 1) &&
        ocena < 7
      ) {
        console.log(
          `Studenti koji se brukaju su ${student.ime}${student.prezime}`
        );
      }
    });
  });
};
bruka(studenti);
