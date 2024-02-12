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
  naziv: "QA",
  grad: "Novi Sad",
  polaznici: [polaznik7, polaznik6, polaznik3, polaznik2, polaznik4],
};
let kursevi = [kurs1, kurs2, kurs3, kurs4];

//l Funkciji se prosleđuje niz kurseva i string koji predstavlja grad, a vraća broj kurseva koji se održavaju u tom gradu.

let funkcijaL = (niz, grad) => {
  let brK = 0;
  niz.forEach((kurs) => {
    if (kurs.grad.toLowerCase() == grad.toLowerCase()) {
      brK++;
    }
  });
  return brK;
};
console.log(funkcijaL(kursevi, "Nis"));

// m Funkciji se prosleđuje niz kurseva i string koji predstavlja naziv, a vraća broj kurseva koji sadrže dati naziv.
let funkcijaM = (niz, naziv) => {
  let brN = 0;
  niz.forEach((kurs) => {
    if (kurs.naziv == naziv) {
      brN++;
    }
  });
  return brN;
};
console.log(funkcijaM(kursevi, "Osnove programiranja Java"));

//n Funkciji se prosleđuje niz kurseva, a ona ispisuje naziv kursa i grad u kojem se nalazi maksimalan broj polaznika. Ukoliko postoji više takvih kurseva, ispisati bilo koji takav kurs.

let funkcijaN = (niz) => {
  let maksP = 0;
  let grad = "";
  let naziv = "";
  niz.forEach((kurs) => {
    if (kurs.polaznici.length > maksP) {
      maksP = kurs.polaznici.length;
      naziv = kurs.naziv;
      grad = kurs.grad;
    }
  });
  console.log(maksP, grad, naziv);
};
funkcijaN(kursevi);

// o Funkciji se prosleđuje niz kurseva i string koji predstavlja prezime, a ispisuje sve polaznike (ime i prezime polaznika, kao i naziv kursa i grad gde pohađaju kurs) čije ime sadrži dati parametar.

let funkcijaO = (niz, prezime) => {
  niz.forEach((kurs) => {
    kurs.polaznici.forEach((polaznik) => {
      if (polaznik.prezime == prezime) {
        console.log(
          polaznik.ime +
            " " +
            polaznik.prezime +
            " " +
            kurs.grad +
            " " +
            kurs.naziv
        );
      }
    });
  });
};
funkcijaO(kursevi, "Gordic");

//p Funkciji se prosleđuje niz kurseva, a ispisuje naziv kursa i grad gde je ostvarena najbolja prosečna ocena na završnom testu. Ukoliko ima više takvih kurseva, ispisati bilo koji.

let funkcijaP = (niz) => {
  let maksProsek = 0;
  let naziv = "";
  let grad = "";
  niz.forEach((kurs) => {
    let suma = 0;
    kurs.polaznici.forEach((polaznik) => {
      suma += polaznik.ocena;
    });
    if (suma / kurs.polaznici.length > maksProsek) {
      maksProsek = suma / kurs.polaznici.length;
      naziv = kurs.naziv;
      grad = kurs.grad;
    }
  });
  console.log(maksProsek, naziv, grad);
};
funkcijaP(kursevi);

//q Kurs je uspešan ako su svi polaznici položili završni test (svi polaznici ostvarili iznad 65%). Funkciji se prosleđuje niz kurseva, a vraća broj uspešnih kurseva.

let funkcijaQ = (niz) => {
  let brK = 0;
  niz.forEach((kurs) => {
    let br = 0;
    kurs.polaznici.forEach((polaznik) => {
      if (polaznik.ocena > 65) {
        br++;
      }
    });
    if (kurs.polaznici.length == br) {
      brK++;
    }
  });
  console.log(brK);
};
funkcijaQ(kursevi);

//r Grad “kida” ukoliko je svaki kurs koji se održava u tom gradu uspešan. Funkciji se prosleđuje niz kurseva i grad, a vraća da li dati grad kida (funkcija vraća true ili false).

let kida = (niz, grad) => {
  let uspesan = true;
  niz.forEach((kurs) => {
    if (kurs.grad == grad) {
      kurs.polaznici.forEach((polaznik) => {
        if (polaznik.ocena <= 65) {
          uspesan = false;
        }
      });
    }
  });
  console.log(uspesan);
};
kida(kursevi, "Beograd");

//s Polaznici na nekom kursu su “pokidali” na završnom testu ako nijedan polaznik nije osvojio manje od 80% na završnom testu. Funkciji se prosleđuje niz kurseva i naziv nekog kursa, a ona ispituje da li su polaznici pokidali na tom kursu (funkcija vraća true ili false).
let poKidali = (niz, naziv) => {
  let uspesan = true;
  niz.forEach((kurs) => {
    if (kurs.naziv == naziv) {
      kurs.polaznici.forEach((polaznik) => {
        if (polaznik.ocena <= 80) {
          uspesan = false;
        }
      });
    }
  });
  console.log(uspesan);
};
poKidali(kursevi, "PHP");
