// Zadatak 1.
// Objekat Student sadrži njegovo ime (string), prezime (string), godinu studija (ceo broj između 1 i 5), kao i niz ocena do sada položenih ispita (niz celih brojeva, gde je svaki od brojeva u intervalu od 6 do 10).
// Kreirati niz od barem 4 studenta tj. barem 4 objekta.
// Napisati sledeće arrow funkcije:
// Funkciji se prosleđuje niz studenata i string koji sadrži jedan karakter, a štampa imena i prezimena svih studenata čije prezime počinje na zadato slovo.
// Funkciji se prosleđuje niz studenata i dva stringa, a štampa imena i prezimena svih studenata čije ime sadrži prvi string, a prezime sadrži drugi string.
// Funkciji se prosleđuje niz studenata i ceo broj između 1 i 5 koji predstavlja godinu studija, a vraća broj studenata koji se nalaze na prosleđenoj godini studija.
// Funkciji se prosleđuje niz studenata, a ona ispisuje ime i prezime studenta sa maksimalnim prosekom. Ukoliko ima više takvih studenata, ispisati ime i prezime bilo kog takvog studenta.
// Funkciji se prosleđuje jedan broj u intervalu od 1 do 5 i niz studenata, a ona ispisuje ime i prezime studenta sa maksimalnim prosekom, koji je na prosleđenoj godini studija. Ukoliko ima više takvih studenata, ispisati ime i prezime svih takvih studenata.
// Student je prosečan ako nema nijednu šesticu i nijednu desetku. Funkciji se prosleđuje niz studenata, a ona ispisuje sve prosečne studente.
// Student je “ekstra” ako je polagao ispite samo sa devetkama i desetkama, i pri tome je broj desetki barem duplo veći od broja devetki. Funkciji se prosleđuje niz studenata, a ona ispisuje sve ekstra studente.
// Student “kida” ako je polagao ispite samo samo sa devetkama i desetkama, a broj devetki je manji od godine studije na kojoj se student nalazi. Funkciji se prosleđuje niz studenata, a ona ispisuje sve studente koji kidaju.
// Student “razbija” ako je sve ispite položio sa ocenom deset. Pri tome, broj desetki ne sme biti manji od broja 5 * (godina_studija - 1). (Dakle, ne može student na trećoj godini da razbija ako je položio jedan ispit, kao što nijedan student prve godine još ne može da razbija, jer još nije položio sve ispite iz tekuće godine). Funkciji se prosleđuje niz studenata, a ona ispisuje sve studente koji razbijaju.
// Student je “aljkav” ako nijedan ispit nije položio sa ocenom većom od 7. Funkciji se prosleđuje niz studenata, a ona prebrojava sve aljkave studente.
// Student se “bruka” ako nije student prve godine, a broj položenih ispita je manji od broja 3 * (godina_studija - 1), i pri tome nijedna ocena nije veća od 7. Funkciji se prosleđuje niz studenata, a ona prebrojava sve studente koji se brukaju.

let student = {
  ime: "Ivana",
  prezime: "Petrovic",
  godinaStudija: 3,
  ocene: [7, 6, 9, 8, 10, 7, 8, 6, 9, 10, 7],
  ////// a
  // const x = this.ocene.includes(6 || 10);
  // console.log(x);
  prosecanStudent: function () {
    let prosecanStudent;

    this.ocene.forEach((el) => {
      prosecanStudent = el != 6 && el != 10 ? true : false;
    });
    console.log(prosecanStudent);
    return prosecanStudent;
  },
  ///b
  extra: function () {
    let br9 = 0;
    let br10 = 0;
    for (let i = 0; i < this.ocene.length; i++) {
      if (this.ocene[i] === 9) {
        br9++;
      } else if (this.ocene[i] === 10) {
        br10++;
      } else {
        return false;
      }
    }

    return br10 >= 2 * br9;
  },

  // ekstra: function() {
  //       let devetke = 0;
  //       let desetke = 0;
  //       for (let i = 0; i < this.ocene.length; i++) {
  //           if (this.ocene[i] < 9) {
  //               return false;
  //           } else if (this.ocene[i] == 9) {
  //               devetke++;
  //           } else {
  //               desetke++;
  //           }
  //       }
  //       return (desetke / devetke >= 2) ? true : false;
  //   }

  // c
  kida: function () {
    let br9 = 0;
    for (let i = 0; i < this.ocene.length; i++) {
      if (this.ocene[i] === 9 || this.ocene[i] === 10) {
        if (this.ocene[i] === 9) {
          br9++;
        }
      } else {
        return false;
      }
    }
    return br9 < this.godinaStudija;
  },

  // kida: function () {
  //   let devetke = 0;
  //   for (let i = 0; i < this.ocene.length; i++) {
  //     if (this.ocene[i] < 9) {
  //       return false;
  //     } else if (this.ocene[i] == 9) {
  //       devetke++;
  //     }
  //   }
  //   return devetke < this.godinaStudija;
  // },

  // d

  razbija: function () {
    let br10 = 0;
    for (let i = 0; i < this.ocene.length; i++) {
      if (this.godinaStudija == 1) {
        return false;
      }
      if (this.ocene[i] == 10) {
        br10++;
      } else {
        return false;
      }
    }
    return br10 >= 5 * (this.godinaStudija - 1);
  },

  //e
  aljkav: function () {
    let rez = false;
    this.ocene.forEach((el) => {
      if (el <= 7) {
        rez = true;
      }
    });
    return rez;
  },
  //f
  bruka: function () {
    if (this.godinaStudija == 1) {
      return false;
    }
    const brOcena = this.ocene.length;
    let daLiJeAljkav = this.aljkav();
    return daLiJeAljkav && brOcena < 3 * (this.godinaStudija - 1);
  },

  // bruka: function(){
  //         for (let i = 0; i < this.ocene.length; i++){
  //             if (this.godinaStudija > 1 && this.ocene.length < 3 * (this.godinaStudija -1) && this.ocene[i] <= 7 ){
  //                 return true;
  //             } else {
  //                 return false;
  //             }
  //         }
  // g moze preko inklud
  kolekcionar: function () {
    let sesticaTu = false;
    let sedmicaTu = false;
    let osmicaTu = false;
    let devetkaTu = false;
    let desetkaTu = false;
    this.ocene.forEach((e) => {
      if (e == 6) {
        sesticaTu = true;
      }
      if (e == 7) {
        sedmicaTu = true;
      }
      if (e == 8) {
        osmicaTu = true;
      }
      if (e == 9) {
        devetkaTu = true;
      }
      if (e == 10) {
        desetkaTu = true;
      }
    });
    let kolekcionarStudent = false;
    if (
      sesticaTu == true &&
      sedmicaTu == true &&
      osmicaTu == true &&
      devetkaTu == true &&
      desetkaTu == true
    ) {
      kolekcionarStudent = true;
    }
    return kolekcionarStudent;
  },

  // drugi nacin

  //     let moguceOcene = [ 6,7,8,9,10];
  //        for(let i=0; i< this.ocene.length; i++) {
  //         if(moguceOcene.includes(this.ocene[i])) {
  //           moguceOcene.splice( moguceOcene.indexOf(this.ocene[i]), 1);
  //         }
  //      };
  //      return moguceOcene.length == 0;
  // },

  // l

  // console.log(student.razbija());
  // console.log(student.kida());
  // console.log(student.extra());
  // console.log(student.prosecanStudent());
  kolekcionar: function () {
    let sestica = 0;
    let sedmica = 0;
    let osmica = 0;
    let devetka = 0;
    let desetka = 0;
    for (let i = 0; i < this.ocene.length; i++) {
      if (this.ocene[i] == 6) {
        sestica++;
      } else if (this.ocene[i] == 7) {
        sedmica++;
      } else if (this.ocene[i] == 8) {
        osmica++;
      } else if (this.ocene[i] == 9) {
        devetka++;
      } else {
        desetka++;
      }
    }
    if (
      sestica > 0 &&
      sedmica > 0 &&
      osmica > 0 &&
      devetka > 0 &&
      desetka > 0
    ) {
      return true;
    } else {
      return false;
    }
  },
  //m Napisati metodu kojoj se prosleđuje broj n, a ona vraća prosečnu ocenu za poslednjih n ispita koje je student položio (podrazumevati da je broj n manji od dužine niza ocena).
  najcescaOcena: function () {
    let maksBrPonavljanja = 0;
    let najcescaOcena;
    for (let i = 0; i < this.ocene.length; i++) {
      let brojPonavljanja = 0;
      let ocena = this.ocene[i];
      this.ocene.forEach((el) => {
        if (el == ocena) {
          brojPonavljanja++;
        }
      });
      if (brojPonavljanja > maksBrPonavljanja) {
        maksBrPonavljanja = brojPonavljanja;
        najcescaOcena = ocena;
      }
    }
    return najcescaOcena;
  },

  //2nacin
  najcescaOcena: function () {
    let brojac = 1;
    let najcescaOcena = this.ocene[0];
    let mapaOcena = {};

    for (let i = 0; i < this.ocene.length; i++) {
      const ocena = this.ocene[i];
      if (mapaOcena[ocena]) {
        // u prethodno kreirani objekat dodajemo ocene studenta koje su sad varijable
        mapaOcena[ocena]++; // ako u ovom objektu vec postoji ova ocena, uvecavamo je za 1
      } else {
        mapaOcena[ocena] = 1; // u suprotnom je kreiramo i dodeljujemo vrednost 1
      }
      if (mapaOcena[ocena] > brojac) {
        // uporedjujemo ocene i trazimo onu koja se najcesce pojavljivala
        najcescaOcena = ocena;
        brojac = mapaOcena[ocena];
      }
    }

    return najcescaOcena; // vracamo ocenu koja se najcesce pojavljivala
  },

  //zadaci od h pa nadalje

  skoroSavrsen: function () {
    let brojDesetki = 0;
    let skoro_savrsen = false;
    this.ocene.forEach((el) => {
      if (el == 10) {
        brojDesetki++;
      }
    });
    if (brojDesetki / this.ocene.length > 0.9 && this.ocene.length > 8) {
      skoro_savrsen = true;
    }
    return skoro_savrsen;
  },
  napreduje: function () {
    let suma1 = 0;
    let suma2 = 0;
    let polovina = Math.floor(this.ocene.length / 2);
    for (let i = 0; i < this.ocene.length; i++) {
      if (i < polovina) {
        suma1 += this.ocene[i];
      } else {
        suma2 += this.ocene[i];
      }
    }
    let prosek1 = suma1 / polovina;
    let prosek2 = suma2 / (this.ocene.length - polovina);
    return prosek1 < prosek2 ? true : false;
  },
  razlikaUzastopne: function () {
    let razlika = Math.abs(this.ocene[0] - this.ocene[1]);
    for (let i = 0; i < this.ocene.length; i++) {
      if (Math.abs(this.ocene[i] - this.ocene[i + 1]) > razlika) {
        razlika = Math.abs(this.ocene[i] - this.ocene[i + 1]);
      }
    }
    return razlika;
  },
  najvecaRazlika: function () {
    let min = this.ocene[0];
    let max = this.ocene[0];
    this.ocene.forEach((el) => {
      if (el < min) {
        min = el;
      }
      if (el > max) {
        max = el;
      }
    });
    return max - min;
  },
  najcescaOcena: function () {
    let maksBrPonavljanja = 0;
    let najcescaOcena;
    for (let i = 0; i < this.ocene.length; i++) {
      let brojPonavljanja = 0;
      let ocena = this.ocene[i];
      this.ocene.forEach((el) => {
        if (el == ocena) {
          brojPonavljanja++;
        }
      });
      if (brojPonavljanja > maksBrPonavljanja) {
        maksBrPonavljanja = brojPonavljanja;
        najcescaOcena = ocena;
      }
    }
    return najcescaOcena;
  },
  prosecnaOcena: function (n) {
    let suma = 0;
    for (let i = this.ocene.length - n; i < this.ocene.length; i++) {
      suma += this.ocene[i];
    }
    return suma / n;
  },
  nepredvidiv: function () {
    let brPonavljanja = 0;
    for (let i = 0; i < this.ocene.length; i++) {
      if (Math.abs(this.ocene[i] - this.ocene[i + 1]) > 2) {
        brPonavljanja++;
      }
    }
    return brPonavljanja > 5 ? true : false;
  },
  veomaNepredvidiv: function () {
    let vNepredvidiv = true;
    for (let i = 0; i < this.ocene.length; i++) {
      if (Math.abs(this.ocene[i] - this.ocene[i + 1]) <= 2) {
        vNepredvidiv = false;
      }
    }
    return vNepredvidiv;
  },
  cudak: function () {
    let cudak = true;
    this.ocene.forEach((el) => {
      if (el != 6 && el != 10) {
        cudak = false;
      }
    });
    return cudak;
  },
};
console.log(student.bruka());
console.log(student.prosecanStudent());

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Zadatak 2.
// Objekat Polaznik sadrži ime (string), prezime (string), kao i ocena (ceo broj između 0 i 100, što zapravo predstavlja broj bodova na završnom testu).
// Objekat Kurs (naravno, neki iz ITBootcamp-a) sadrži naziv (string), grad u kojem se održava (string), kao i niz polaznici (elementi niza su objekti tipa Polaznik).
// Kreirati niz od barem 4 kursa. Svaki kurs može imati proizvoljan broj polaznika, i staviti barem tri polaznika za svaki kurs. Voditi se sledećim pravilima prilikom kreiranja svakog objekta:
// Naziv kursa može biti “Razvoj veb stranica: JS”, “Razvoj veb stranica: PHP”, “Testiranje softvera: QA”, “Osnove programiranja: Java”.
// Grad može biti “Beograd”, “Niš”, “Novi Sad” ili “Kosovska Mitrovica”.
// Imena polaznika za svaki kurs su proizvoljni, kao i ocene, dokle god je svaka ocena ceo broj između 0 i 100.
// Napisati sledeće arrow funkcije:
// Funkciji se prosleđuje niz kurseva i string koji predstavlja grad, a vraća broj kurseva koji se održavaju u tom gradu.
// Funkciji se prosleđuje niz kurseva i string koji predstavlja naziv, a vraća broj kurseva koji sadrže dati naziv.
// Funkciji se prosleđuje niz kurseva, a ona ispisuje naziv kursa i grad u kojem se nalazi maksimalan broj polaznika. Ukoliko postoji više takvih kurseva, ispisati bilo koji takav kurs.
// Funkciji se prosleđuje niz kurseva i string koji predstavlja prezime, a ispisuje sve polaznike (ime i prezime polaznika, kao i naziv kursa i grad gde pohađaju kurs) čije ime sadrži dati parametar.
// Funkciji se prosleđuje niz kurseva, a ispisuje naziv kursa i grad gde je ostvarena najbolja prosečna ocena na završnom testu. Ukoliko ima više takvih kurseva, ispisati bilo koji.
// Kurs je uspešan ako su svi polaznici položili završni test (svi polaznici ostvarili iznad 65%). Funkciji se prosleđuje niz kurseva, a vraća broj uspešnih kurseva.
// Grad “kida” ukoliko je svaki kurs koji se održava u tom gradu uspešan. Funkciji se prosleđuje niz kurseva i grad, a vraća da li dati grad kida (funkcija vraća true ili false).
// Polaznici na nekom kursu su “pokidali” na završnom testu ako nijedan polaznik nije osvojio manje od 80% na završnom testu. Funkciji se prosleđuje niz kurseva i naziv nekog kursa, a ona ispituje da li su polaznici pokidali na tom kursu (funkcija vraća true ili false).

let polaznik1 = {
  ime: "Uros",
  prezime: "Zdravkovic",
  ocena: 100,
};
let polaznik2 = {
  ime: "Stefan",
  prezime: "Gordic",
  ocena: 77,
};
let polaznik3 = {
  ime: "Milos",
  prezime: "Slavenski",
  ocena: 100,
};
let polaznik4 = {
  ime: "Milivoje",
  prezime: "Jovanic",
  ocena: 52,
};
let polaznik5 = {
  ime: "Nevena",
  prezime: "Zlatovic",
  ocena: 100,
};
let polaznik6 = {
  ime: "Stefana",
  prezime: "Simovic",
  ocena: 24,
};
let polaznik7 = {
  ime: "Jelena",
  prezime: "Gordic",
  ocena: 83,
};
let kurs1 = {
  naziv: "Razvoj web stranica",
  grad: "Nis",
  polaznici: [polaznik2, polaznik4, polaznik3],
};
let kurs2 = {
  naziv: "PHP",
  grad: "Beograd",
  polaznici: [polaznik1, polaznik5, polaznik3],
};
let kurs3 = {
  naziv: "Osnove programiranja Java",
  grad: "Kosovska Mitrovic",
  polaznici: [polaznik6, polaznik1, polaznik4, polaznik5],
};
let kurs4 = {
  naziv: "QA - automation tester",
  grad: "Novi Sad",
  polaznici: [polaznik7, polaznik6, polaznik3, polaznik2, polaznik4],
};
let kursevi = [kurs1, kurs2, kurs3, kurs4];
// l) Funkciji se prosleđuje niz kurseva i string koji predstavlja grad, a vraća broj kurseva koji se održavaju u tom gradu.
let brojKursevaUGradu = (niz, grad) => {
  let brojac = 0;
  niz.forEach((el) => {
    if (el.grad.toLowerCase() == grad.toLowerCase()) {
      brojac++;
    }
  });
  return brojac;
};
console.log(brojKursevaUGradu(kursevi, "Beograd"));
//  m) Funkciji se prosleđuje niz kurseva i string koji predstavlja naziv, a vraća broj kurseva koji sadrže dati naziv.
let naziv = (niz, string) => {
  let brojac = 0;
  niz.forEach((el) => {
    if (el.naziv.includes(string)) {
      brojac++;
    }
  });
  console.log(`Broj kurseva koji sadrze ovaj string je: ${brojac}`);
};
naziv(kursevi, "QA");
/* n) Funkciji se prosleđuje niz kurseva, a ona ispisuje naziv kursa i grad u kojem se nalazi maksimalan broj polaznika. Ukoliko postoji više takvih kurseva, ispisati bilo koji takav kurs. */
let maksPolaznika = (niz) => {
  let maks = 0;
  let kurs = "";
  let grad = "";
  niz.forEach((el) => {
    if (el.polaznici.length > maks) {
      maks = el.polaznici.length;
      kurs = el.naziv;
      grad = el.grad;
    }
  });
  console.log(maks, kurs, grad);
};
maksPolaznika(kursevi);
/* o) Funkciji se prosleđuje niz kurseva i string koji predstavlja prezime, a ispisuje sve polaznike (ime i prezime polaznika, kao i naziv kursa i grad gde pohađaju kurs) čije ime sadrži dati parametar. */
let ispisiSve = (niz, prezime) => {
  niz.forEach((el) => {
    el.polaznici.forEach((polaznik) => {
      if (polaznik.prezime == prezime) {
        console.log(
          `Ime i prezime: ${polaznik.ime} ${polaznik.prezime} Naziv: ${el.naziv} Grad: ${el.grad} `
        );
      }
    });
  });
};
ispisiSve(kursevi, "Zlatovic");
/* p)Funkciji se prosleđuje niz kurseva, a ispisuje naziv kursa i grad gde je ostvarena najbolja prosečna ocena na završnom testu. Ukoliko ima više takvih kurseva, ispisati bilo koji. */
let najboljaProsecna = (niz) => {
  let maks = 0;
  let grad = "";
  let naziv = "";
  for (i = 0; i < niz.length; i++) {
    let suma = 0;
    for (j = 0; j < niz[i].polaznici.length; j++) {
      suma += niz[i].polaznici[j].ocena;
      let prosecna = suma / niz[i].polaznici.length;
      if (prosecna > maks) {
        maks = prosecna;
        grad = niz[i].grad;
        naziv = niz[i].naziv;
      }
    }
  }

  // let prosecna = suma / niz[i].polaznici.length;     ///jelena comentar
  // if (prosecna > maks) {
  //   maks = prosecna;
  //   grad = niz[i].grad;
  //   naziv = niz[i].naziv;
};
console.log(`Grad gde se nalazi kurs: ${grad}, naziv kursa je: ${naziv}`);

najboljaProsecna(kursevi);
/* q) Kurs je uspešan ako su svi polaznici položili završni test (svi polaznici ostvarili iznad 65%). Funkciji se prosleđuje niz kurseva, a vraća broj uspešnih kurseva. */
let uspesanKurs = (niz) => {
  let brojac2 = 0;
  niz.forEach((kurs) => {
    let brojac = 0;
    kurs.polaznici.forEach((polaznik) => {
      if (polaznik.ocena > 65) {
        brojac++;
      }
    });
    if (brojac == kurs.polaznici.length) {
      brojac2++;
    }
  });
  return brojac2;
};
console.log(uspesanKurs(kursevi));
/* Grad “kida” ukoliko je svaki kurs koji se održava u tom gradu uspešan. Funkciji se prosleđuje niz kurseva i grad, a vraća da li dati grad kida (funkcija vraća true ili false).
 */
let kida = (niz, grad) => {
  let uspesan = true;
  niz.forEach((k) => {
    if (k.grad == grad) {
      k.polaznici.forEach((p) => {
        if (p.ocena <= 65) {
          uspesan = false;
        }
      });
    }
  });
  return uspesan;
};
/* Polaznici na nekom kursu su “pokidali” na završnom testu ako nijedan polaznik nije osvojio manje od 80% na završnom testu. Funkciji se prosleđuje niz kurseva i naziv nekog kursa, a ona ispituje da li su polaznici pokidali na tom kursu (funkcija vraća true ili false). */
let pokidali = (niz, grad) => {
  let uspesan = true;
  niz.forEach((k) => {
    if (k.grad == grad) {
      k.polaznici.forEach((p) => {
        if (p.ocena < 80) {
          uspesan = false;
        }
      });
    }
  });
  return uspesan;
};

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
// zadatak 4
// Dat je niz u kojem su smešteni odgovarajući letovi koji polaze sa nekog aerodroma u toku jednog dana. Svaki element tog niza odgovara jednom letu, pri čemu se za svaki let pamti destinacija (string, grad u koji avion sleće), država u kojoj se taj grad nalazi (takođe string), kao i vreme poletanja aviona sa aerodroma (string u formatu “hh:mm”), vreme sletanja aviona na destinaciju (string u formatu “hh:mm”). U ovom zadatku, može se desiti da sa aerodroma poleće više letova ka istoj destinaciji.
// Kreirati niz letova, pri čemu je svaki element tog niza jedan objekat.
// Napisati funkciju brojLetovaZaZemlju kojoj se prosleđuju niz letova, kao i zemlja, a funkcija vraća broj letova do date zemlje.
// Napisati funkciju visePrePodne kojoj se prosleđuje niz letova, a određuje da li je bilo više letova pre podne ili posle podne. Ukoliko je bilo više letova pre podne, vratiti true, a u suportnom, vratiti false.
// Napisati funkciju ispisLetovaDoSada kojoj se prosleđuje niz letova, kao i zemlja, a koja ispisuje sve letove koji su poleteli do trenutnog vremena (vreme preuzeti sa računara).
// Neke zemlje su označene kao crvene, jer je u njima nepovoljna epidemiološka situacija. Napisati funkciju rizicniLetovi kojoj se prosleđuju niz letova, kao i niz zemalja, a koja ispisuje u paragrafima čiji je tekst obojen crvenom bojom. U svakom paragrafu ispisati informacije o onim letovima koji kao destinaciju imaju zemlju iz crvene zone.
// Neka destinacija je tražena ukoliko postoji više letova u toku dana za tu destinaciju. Napisati funkciju trazeneDestinacije kojoj se prosleđuje niz letova, a koja ispisuje sve tražene destinacije (ukoliko postoje).
// Napisati funkciju prosecanBrojLetovaZaZemlju kojoj se prosleđuje niz letova, a koja vraća prosečan broj letova ka svekoj od zemalja koje se pojavljuju u prosleđenom nizu.

let let1 = {
  destinacija: "Barselona",
  drzava: "Spanija",
  vremePoletenja: "09:25",
  vremeSletanja: "12:45",
};
let let2 = {
  destinacija: "Minhen",
  drzava: "Nemacka",
  vremePoletenja: "11:15",
  vremeSletanja: "14:45",
};
let let3 = {
  destinacija: "Tokio",
  drzava: "Japan",
  vremePoletenja: "06:25",
  vremeSletanja: "19:45",
};
let let4 = {
  destinacija: "New York",
  drzava: "Amerika",
  vremePoletenja: "12:40",
  vremeSletanja: "22:45",
};
let let5 = {
  destinacija: "Denver",
  drzava: "Amerika",
  vremePoletenja: "09:40",
  vremeSletanja: "21:45",
};
let letovi = [let1, let2, let3, let4, let5];
// a)Napisati funkciju brojLetovaZaZemlju kojoj se prosleđuju niz letova, kao i zemlja, a funkcija vraća broj letova do date zemlje.
function brojLetovaZaZemlju(niz, zemlja) {
  let brojacLetova = 0;
  niz.forEach((el) => {
    if (el.drzava == zemlja) {
      brojacLetova++;
    }
  });
  return brojacLetova;
}
console.log(brojLetovaZaZemlju(letovi, "Amerika"));
/* b) Napisati funkciju visePrePodne kojoj se prosleđuje niz letova, a određuje da li je bilo više letova pre podne ili posle podne. Ukoliko je bilo više letova pre podne, vratiti true, a u suportnom, vratiti false. */
function visePrePodne(niz) {
  let prePodne = 0;
  niz.forEach((el) => {
    let sati = Number(el.vremePoletenja.split(":")[0]);
    if (sati < 12) {
      prePodne++;
    }
  });
  return prePodne > niz.length - prePodne;
}
console.log(visePrePodne(letovi));
//c) Napisati funkciju ispisLetovaDoSada kojoj se prosleđuje niz letova, kao i zemlja, a koja ispisuje sve letove koji su poleteli do trenutnog vremena (vreme preuzeti sa računara).
let datum = new Date();
let sati = datum.getHours();
let minuti = datum.getMinutes();
function ispisLetovaDoSada(niz, zemlja) {
  niz.forEach((el) => {
    let satiLeta = Number(el.vremePoletenja.split(":")[0]);
    let minutiLeta = Number(el.vremePoletenja.split(":")[1]);
    if (el.drzava == zemlja) {
      if (satiLeta < sati) {
        console.log(el);
      } else if (satiLeta == sati && minutiLeta < minuti) {
        console.log(el);
      }
    }
  });
}
ispisLetovaDoSada(letovi, "Amerika");
//d) /* Neke zemlje su označene kao crvene, jer je u njima nepovoljna epidemiološka situacija. Napisati funkciju rizicniLetovi kojoj se prosleđuju niz letova, kao i niz zemalja, a koja ispisuje u paragrafima čiji je tekst obojen crvenom bojom. U svakom paragrafu ispisati informacije o onim letovima koji kao destinaciju imaju zemlju iz crvene zone.*/
let zemlje = ["Amerika", "Spanija"];
function rizicniLetovi(niz, niz2) {
  let p = document.createElement("p");
  niz.forEach((el) => {
    niz2.forEach((el2) => {
      if (el.drzava == el2) {
        p.innerHTML += `${el.destinacija} ${el.vremePoletenja} <br>`;
        p.style.color = "red";
      }
    });
  });
  document.body.appendChild(p);
}
rizicniLetovi(letovi, zemlje);
/*e) Neka destinacija je tražena ukoliko postoji više letova u toku dana za tu destinaciju. Napisati funkciju trazeneDestinacije kojoj se prosleđuje niz letova, a koja ispisuje sve tražene destinacije (ukoliko postoje). */
let trazeneDestinacije = (niz) => {
  for (let i = 0; i < niz.length; i++) {
    let br = 0;
    let zemlja = niz[i];
    for (let j = 0; j < niz.length; j++) {
      if (zemlja.drzava == niz[j].drzava) {
        br++;
      }
    }
    if (br > 1) {
      console.log(zemlja);
    }
  }
  // let trazeneDestinacije = (niz) => {
  //   let destinacije = [];
  //   for (let i = 0; i < niz.length; i++) {
  //     let br = 0;
  //     let zemlja = niz[i];
  //     if (destinacije.includes(zemlja.drzava)) {
  //       continue;
  //     }
  //     for (let j = 0; j < niz.length; j++) {
  //       if (zemlja.drzava == niz[j].drzava) {
  //         br++;
  //       }
  //     }
  //     if (br > 1) {
  //       console.log(zemlja.destinacija);
  //       destinacije.push(zemlja.drzava);
  //     }
  //   }
  // };
  // trazeneDestinacije(letovi);
};
trazeneDestinacije(letovi);

/*f) Napisati funkciju prosecanBrojLetovaZaZemlju kojoj se prosleđuje niz letova, a koja vraća prosečan broj letova ka svekoj od zemalja koje se pojavljuju u prosleđenom nizu. */
let prosecanBrojLetovaZaZemlju = (niz) => {
  for (let i = 0; i < niz.length; i++) {
    let br = 0;
    let zemlja = niz[i];
    for (let j = 0; j < niz.length; j++) {
      if (zemlja.drzava == niz[j].drzava) {
        br++;
      }
    }
    console.log(
      `Prosecan broj letova za ${zemlja.drzava} je ${br / niz.length}`
    );
  }
};
prosecanBrojLetovaZaZemlju(letovi);

// let prosecanBrojLetovaZaZemlju = (niz) => {
//   let destinacije = [];
//   for (let i = 0; i < niz.length; i++) {
//     let br = 0;
//     let zemlja = niz[i];
//     if (destinacije.includes(zemlja.drzava)) {
//       continue;
//     }
//     for (let j = 0; j < niz.length; j++) {
//       if (zemlja.drzava == niz[j].drzava) {
//         br++;
//       }
//     }
//     console.log(
//       `Prosecan broj letova za ${zemlja.drzava} je ${br / niz.length}`
//     );
//     destinacije.push(zemlja.drzava);
//   }
// };
// prosecanBrojLetovaZaZemlju(letovi);
//////////////////////////////////////////////////////////////////////////////
// zadatak 5
// Zadatak 5.
// U toku jednog dana vršenja su merenja vremenskih prilika. Konkretno, jedan dan se formira kao asocijativni niz koji od ključeva i vrednosti sadrži:
// Datum (string u formatu YYYY/MM/DD),
// Kiša (true/false),
// Sunce (true/false),
// Oblačno (true/false),
// Vrednosti temperature (Niz temperatura tog dana).

// Napisati funkcije:
// prosecnaTemp kojoj se prosleđuje dan, a koja određuje i vraća prosečnu temperaturu izmerenu tog dana.
// brojNatprosecnoMerenja kojoj se prosleđuje dan, a koja prebrojava i vraća koliko merenja je bilo sa natprosečnom temperaturom.
// Napisati funkciju brojMaxMerenja kojoj se prosleđuje dan, a koja prebrojava i vraća koliko merenja je bilo sa maksimalnom temperaturom.
// Napisati funkciju brojMerenjaIzmedju kojoj se prosleđuje dan, kao i dva parametra koji predstavljaju dve temperature. Potrebno je da metoda vrati broj merenja u toku dana čija je vrednost između ove dve zadate temperature (ne uključujući te dve vrednosti).
// Napisati funkciju natprosecnoTopao kojoj se prosleđuje dan, a koja vraća true ukoliko je u većini dana temperatura bila iznad proseka. U suprotnom vraća false.
// Za dan se smatra da je leden ukoliko nijedna temperatura izmerena tog dana nije iznosila iznad 0 stepeni. Napisati funkciju leden kojoj se prosleđuje dan, a koja vraća true ukoliko je dan bio leden, u suprotnom vraća false.
// Za dan se smatra da je tropski ukoliko nijedna temperatura izmerena tog dana nije iznosila ispod 24 stepena. Napisati funkciju tropski($dan) kojoj se prosleđuje dan, a koja vraća true ukoliko je dan bio tropski, u suprotnom vraća false.
// Dan je nepovoljan ako je razlika između neka dva uzastopna merenja veća od 8 stepeni. Napisati funkciju nepovoljan($dan) kojoj se prosleđuje dan, a koja vraća true ukoliko je dan bio nepovoljan, u suprotnom vraća false.
// Za dan se kaže da je neuobičajen ako je bilo kiše i ispod -5 stepeni, ili bilo oblačno i iznad 25 stepeni, ili je bilo i kišovito i oblačno i sunčano. Napisati funkciju neuobicajen($dan) kojoj se prosleđuje dan, a koja vraća true ukoliko je dan bio neuobičajen, u suprotnom vraća false.

// Zadatak 5
let dan1 = {
  datum: "2023/12/22",
  kisa: true,
  sunce: false,
  oblacno: true,
  temperature: [-3, -4, -6, -7, -6, -4, -10, 0, 0, 0, 0, 0, 0],
  prosek: function () {
    let suma = 0;
    let br = 0;
    this.temperature.forEach((t) => {
      suma = suma + t;
      br++;
    });
    return suma / br;
  },
};
console.log(dan1.prosek());
let dan2 = {
  datum: "2023/12/24",
  kisa: false,
  sunce: true,
  oblacno: false,
  temperature: [33, 34, 26, 37, 39, 35, 32, 39],
  prosek: function () {
    let suma = 0;
    let br = 0;
    this.temperature.forEach((t) => {
      suma = suma + t;
      br++;
    });
    return suma / br;
  },
};
console.log(dan2.prosek());
let dan3 = {
  datum: "2023/12/25",
  kisa: false,
  sunce: true,
  oblacno: true,
  temperature: [3, 4, 6, 6, 7, 5, 4, 3, 7, 9, 11, 8, 3, 11],
  prosek: function () {
    let suma = 0;
    let br = 0;
    this.temperature.forEach((t) => {
      suma = suma + t;
      br++;
    });
    return suma / br;
  },
};
console.log(dan3.prosek());
let dani = [dan1, dan2, dan3];

// A
/* Napisati funkcije: prosecnaTemp kojoj se prosleđuje dan, a koja određuje i vraća prosečnu temperaturu izmerenu tog dana. */
let prosecnaTemp = (niz) => {
  niz.forEach((e) => {
    let sumaTemp = 0;
    let brojMerenja = 0;
    e.temperature.forEach((t) => {
      sumaTemp = sumaTemp + t;
      brojMerenja++;
    });
    let prosekTemp = sumaTemp / brojMerenja;
    console.log(prosekTemp);
  });
};
prosecnaTemp(dani);

// B
/* brojNatprosecnoMerenja kojoj se prosleđuje dan, a koja prebrojava i vraća koliko merenja je bilo sa natprosečnom temperaturom. */
let brojNatprosecnihMerenja = (niz) => {
  niz.forEach((e) => {
    let broj = 0;
    e.temperature.forEach((t) => {
      if (t > e.prosek()) {
        broj++;
      }
    });
    console.log(broj);
  });
};
brojNatprosecnihMerenja(dani);

// C
/* Napisati funkciju brojMaxMerenja kojoj se prosleđuje dan, a koja prebrojava i vraća koliko merenja je bilo sa maksimalnom temperaturom. */
let brojMaxMerenja = (niz) => {
  niz.forEach((dan) => {
    let max = 0;
    let br = 0;
    dan.temperature.forEach((t) => {
      if (t > max) {
        max = t;
      }
    });
    console.log(max);
    dan.temperature.forEach((t) => {
      if (max == t) {
        br++;
      }
    });
    console.log(br);
  });
};
brojMaxMerenja(dani);

// D
/* Napisati funkciju brojMerenjaIzmedju kojoj se prosleđuje dan, kao i dva parametra koji predstavljaju dve temperature. Potrebno je da metoda vrati broj merenja u toku dana čija je vrednost između ove dve zadate temperature (ne uključujući te dve vrednosti). */
let brojMerenjaIzmedju = (niz, t1, t2) => {
  if (t1 > t2) {
    let c = t1;
    t1 = t2;
    t2 = c;
  }
  niz.forEach((dan) => {
    let brojMerenja = 0;
    dan.temperature.forEach((t) => {
      if (t1 < t && t < t2) {
        brojMerenja++;
      }
    });
    console.log(brojMerenja);
  });
};
brojMerenjaIzmedju(dani, -4, 7);

// E
/* Napisati funkciju natprosecnoTopao kojoj se prosleđuje dan, a koja vraća true ukoliko je u većini dana temperatura bila iznad proseka. U suprotnom vraća false.  */
let natprosecnoTopao = (niz) => {
  niz.forEach((dan) => {
    let natTopao = false;
    let brojTemp = 0;
    dan.temperature.forEach((t) => {
      if (t > dan.prosek()) {
        brojTemp++;
      }
    });
    console.log(brojTemp);
    if (brojTemp > dan.temperature.length / 2) {
      natTopao = true;
    }
    console.log(natTopao);
  });
};
natprosecnoTopao(dani);

// F
/* Za dan se smatra da je leden ukoliko nijedna temperatura izmerena tog dana nije iznosila iznad 0 stepeni. Napisati funkciju leden kojoj se prosleđuje dan, a koja vraća true ukoliko je dan bio leden, u suprotnom vraća false. */
let ledenDan = (niz) => {
  niz.forEach((dan) => {
    let leden = true;
    dan.temperature.forEach((t) => {
      if (t > 0) {
        leden = false;
      }
    });
    console.log(leden);
  });
};
ledenDan(dani);

// H
/*
Dan je nepovoljan ako je razlika između neka dva uzastopna merenja veća od 8 stepeni. Napisati funkciju nepovoljan($dan) kojoj se prosleđuje dan, a koja vraća true ukoliko je dan bio nepovoljan, u suprotnom vraća false.
*/
let nepovoljanDan = (niz) => {
  niz.forEach((dan) => {
    let nepovoljan = false;
    for (let i = 0; i < dan.temperature.length - 1; i++) {
      if (Math.abs(dan.temperature[i] - dan.temperature[i + 1]) > 8) {
        nepovoljan = true;
      }
    }
    console.log(nepovoljan);
  });
};
nepovoljanDan(dani);

// G
/* Za dan se smatra da je tropski ukoliko nijedna temperatura izmerena tog dana nije iznosila ispod 24 stepena. Napisati funkciju tropski($dan) kojoj se prosleđuje dan, a koja vraća true ukoliko je dan bio tropski, u suprotnom vraća false. */
let tropskiDan = (niz) => {
  niz.forEach((dan) => {
    let tropski = true;
    dan.temperature.forEach((t) => {
      if (t < 24) {
        tropski = false;
      }
    });
    console.log(tropski);
  });
};
tropskiDan(dani);

// https://us05web.zoom.us/j/84073532394?pwd=90gb2glg0bVDHy0nzBk7oh60c7xqhc.1

// I
/* Za dan se kaže da je neuobičajen ako je bilo kiše i ispod -5 stepeni, ili bilo oblačno i iznad 25 stepeni, ili je bilo i kišovito i oblačno i sunčano. Napisati funkciju neuobicajen($dan) kojoj se prosleđuje dan, a koja vraća true ukoliko je dan bio neuobičajen, u suprotnom vraća false. */
let neuobicajenDan = (niz) => {
  niz.forEach((dan) => {
    let neuobicajen = false;
    dan.temperature.forEach((t) => {
      if (
        (t < -5 && dan.kisa == true) ||
        (t > 25 && dan.oblacno == true) ||
        (dan.kisa == true && dan.oblacno == true && dan.sunce == true)
      ) {
        neuobicajen = true;
      }
    });
    console.log(neuobicajen);
  });
};
neuobicajenDan(dani);

//////// zadatak 6
// Zadatak 6.
// Dat je niz u kojem su smešteni podaci o blogovima nekog korisnika. Svaki element tog niza odgovara jednom blogu, pri čemu se za svaki blog pamti naslov (string), broj lajkova (ceo broj), kao i broj dislajkova (ceo broj).
// Kreirati niz blogova, pri čemu je svaki element tog niza jedan objekat tj. po jedan blog.
// Napisati funkciju:
// Kojoj se prosleđuje niz blogova, a ona vraća ukupan broj lajkova.
// Kojoj se prosleđuje niz blogova, a ona vraća prosečan broj lajkova.
// Kojoj se prosleđuje niz blogova, a ona ispisuje sve one naslove blogova koji imaju više lajkova nego dislajkova.
// Kojoj se prosleđuje niz blogova, a ona ispisuje sve one naslove blogova koji imaju najmanje duplo više lajkova nego dislajkova.
// Kojoj se prosleđuje niz blogova, a ona ispisuje sve one naslove blogova koji se završavaju uzvičnikom.
// Kojoj se prosleđuje niz blogova, kao i $granica, a ona vraća broj blogova čiji je broj lajkova veći od granice.
// Kojoj se prosleđuje niz blogova, kao i neka reč, a ona vraća prosečan broj lajkova za one blogove koji u naslovu sadrže prosleđenu reč.
// Kojoj se prosleđuje niz blogova, a ona ispisuje blogove koji imaju iznadprosečan broj lakova.
// Kojoj se prosleđuje niz blogova, a ona ispisuje blogove koji imaju ispodprosečan broj dislakova.
// ZADATAK 6
let blog1 = {
  title: "IF naredba grananja!",
  likes: 50,
  dislikes: 21,
};
let blog2 = {
  title: "While petlja",
  likes: 25,
  dislikes: 36,
};
let blog3 = {
  title: "for petlja",
  likes: 100,
  dislikes: 12,
};
let blogovi = [blog1, blog2, blog3];
// A
/* Kojoj se prosleđuje niz blogova, a ona vraća ukupan broj lajkova. */
let brojLajkova = (niz) => {
  let suma = 0;
  niz.forEach((b) => {
    suma = suma + b.likes;
  });
  return suma;
};
console.log(brojLajkova(blogovi));
// B
/* Kojoj se prosleđuje niz blogova, a ona vraća prosečan broj lajkova. */
let prosecanBroj = (niz) => {
  return brojLajkova(niz) / niz.length;
};
console.log(prosecanBroj(blogovi));
// C
/* Kojoj se prosleđuje niz blogova, a ona ispisuje sve one naslove blogova koji imaju više lajkova nego dislajkova. */
let viseLajk = (niz) => {
  niz.forEach((b) => {
    if (b.likes > b.dislikes) {
      console.log(b.title);
    }
  });
};
viseLajk(blogovi);
// D
/* Kojoj se prosleđuje niz blogova, a ona ispisuje sve one naslove blogova koji imaju najmanje duplo više lajkova nego dislajkova. */
let viseLajk2 = (niz) => {
  niz.forEach((b) => {
    if (b.likes >= b.dislikes * 2) {
      console.log(b.title);
    }
  });
};
viseLajk2(blogovi);
// E
/* Kojoj se prosleđuje niz blogova, a ona ispisuje sve one naslove blogova koji se završavaju uzvičnikom. */
let naslovUzvicnik = (niz) => {
  niz.forEach((b) => {
    if (b.title[b.title.length - 1] == "!") {
      console.log(b.title);
    }
  });
};
naslovUzvicnik(blogovi);
// F
/* Kojoj se prosleđuje niz blogova, kao i $granica, a ona vraća broj blogova čiji je broj lajkova veći od granice. */
let granica = (niz, g) => {
  let br = 0;
  niz.forEach((b) => {
    if (b.likes > g) {
      br++;
    }
  });
  return br;
};
console.log(granica(blogovi, 49));
// G
/* Kojoj se prosleđuje niz blogova, kao i neka reč, a ona vraća prosečan broj lajkova za one blogove koji u naslovu sadrže prosleđenu reč. */
let recProsek = (niz, rec) => {
  let suma = 0;
  let br = 0;
  niz.forEach((b) => {
    if (b.title.includes(rec)) {
      suma = suma + b.likes;
      br++;
    }
  });
  return suma / br;
};
console.log(recProsek(blogovi, "petlja"));
// H
/* Kojoj se prosleđuje niz blogova, a ona ispisuje blogove koji imaju iznadprosečan broj lakova. */
let iznadLajk = (niz) => {
  niz.forEach((b) => {
    if (b.likes > prosecanBroj(niz)) {
      console.log(b.title);
    }
  });
};
iznadLajk(blogovi);
