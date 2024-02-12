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
  naziv: "QA",
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
  for (let i = 0; i < niz.length; i++) {
    let suma = 0;
    for (let j = 0; j < niz[i].polaznici.length; j++) {
      suma += niz[i].polaznici[j].ocena;
      let prosecna = suma / niz[i].polaznici.length;
      if (prosecna > maks) {
        maks = prosecna;
        grad = niz[i].grad;
        naziv = niz[i].naziv;
      }
    }
  }
  console.log(`Grad gde se nalazi kurs: ${grad}, naziv kursa je: ${naziv}`);
};
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
  console.log(brojac2);
};
uspesanKurs(kursevi);
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
  console.log(uspesan);
};
kida(kursevi, "Novi Sad");

/* Polaznici na nekom kursu su “pokidali” na završnom testu ako nijedan polaznik nije osvojio manje od 80% na završnom testu. Funkciji se prosleđuje niz kurseva i naziv nekog kursa, a ona ispituje da li su polaznici pokidali na tom kursu (funkcija vraća true ili false). */
// let pokidali = (niz, grad) => {
//   let uspesan = true;
//   niz.forEach((k) => {
//     if (k.grad == grad) {
//       k.polaznici.forEach((p) => {
//         if (p.ocena < 80) {
//           uspesan = false;
//         }
//       });
//     }
//   });
//   return uspesan;
// };
let pokidali = (niz, kurs) => {
  let zastavica = true;
  niz.forEach((k) => {
    if (k.naziv == kurs) {
      k.polaznici.forEach((p) => {
        if (p.ocena < 80) {
          zastavica = false;
        }
      });
      // for (let i = 0; i < k.polaznici.length; i++) {
      //   if (k.polaznici[i].ocena < 80) {
      //     zastavica = false;
      //     break;
    }
  });
  return zastavica;
};
console.log(pokidali(kursevi, "PHP"));
