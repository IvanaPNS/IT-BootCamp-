// Zadatak 1 (20 poena)
// Napraviti funkciju kojoj se prosleđuju dva parametra tezina (težina u
// kilogramima) i visina (visina u centimetrima). Funkcija na osnovu
// prosleđenih parametara (težine i visine) izračunava i vraća indeks
// telesne mase (BMI).
// BMI računati koristeći sledeću formulu:

// Za zadatu visinu i težinu osobe, odrediti BMI pozivom prethodne funkcije
// i na osnovu te vrednosti u konzoli napisati jednu od sledeće četiri
// kategorije:
// ➢ Pothranjenost (BMI manji ili jednak 18.5)
// ➢ Normalna težina (BMI između 18.5 i 24.9, ne uključujući ove
// vrednosti)
// ➢ Povišena težina (BMI između 24.9 i 30, uključujući ove vrednosti)
// ➢ Gojaznost (BMI strogo veći od 30)
// Na primer, ukoliko osoba ima 100 kg i visoka je 182 cm, njen BMI koji
// funkcija vraća je 30.2, a u konzoli je potrebno ispisati „Gojaznost“.
// Pretpostaviti da će unos uvek biti uredan, te nema potrebe proveravati
// da li su prosleđeni brojevi negativni.

// Komentar: Težina osobe u ovom (i sledećim zadacima) i visina osobe u
// ovom zadatku, u opštem slučaju, ne moraju biti celi brojevi.

function bmiFukcija(tezina, visina) {
  let bmi = tezina / visina ** 2;
  if (bmi <= 18.5) {
    console.log("Pothranjenost");
  } else if (bmi > 18.5 && bmi < 24.9) {
    console.log("Normalna težina");
  } else if (bmi >= 24.9 && bmi <= 30) {
    console.log("Povišena težina");
  } else if (bmi > 30) {
    console.log("Gojaznost");
  }
}
bmiFukcija(100, 1.82);

// Zadatak 2 (20 poena)
// Napisati funkciju koja će pomoći nutricionistima u estimaciji rezultata
// svojih klijenata. Funkciji se prosleđuju dva parametra težina (težina
// osobe u kilogramima) i željena težina (težina koju osoba želi da
// postigne, takođe u kilogramima). Funkcije treba da vrati za koliko nedelja
// će osoba dostići željenu težinu primenom sledeće formule:
// ➢ Ukoliko osoba želi da se ugoji, nutricionista računa da će se osoba
// svake naredne nedelje ugojiti po 1% u odnosu na težinu koju ima
// prethodne nedelje. Rezultat je ostvaren kada osoba prevaziđe
// željenu težinu.
// Na primer, ukoliko je osoba teška 70kg i željena težina joj je 78kg,
// funkcija treba da vrati 11.
// ➢ Ukoliko osoba želi da smrša, nutricionista računa da će osoba
// svake naredne nedelje mršaviti za 2% u odnosu na težinu koju ima
// prethodne nedelje. Rezultat je ostvaren kada osoba padne ispod
// željene težine.
// Na primer, ukoliko je osoba teška 70kg i željena težina joj je 63kg,
// funkcija treba da vrati 4.
// Pozvati funkciju i rezultat funkcije ispisati u konzoli.
function nutricionista(tezinaTrenutna, tezinaZeljena) {
  let brNedelja = 0;
  let zeljena = 1;
  for (let i = tezinaTrenutna; i < tezinaZeljena; i++) {
    if (tezinaTrenutna < tezinaZeljena) {
      zeljena += tezinaTrenutna * 1.1;
      brNedelja++;
    }
    return brNedelja;
  }
  for (let i = tezinaTrenutna; i < tezinaZeljena; i++) {
    if (tezinaTrenutna > tezinaZeljena) {
      zeljena = zeljena - tezinaZeljena * 2.2;
      brNedelja++;
    }
  }
  return brNedelja;
}
console.log(nutricionista(70, 63));

// Zadatak 3 (20 poena)
// Dat je niz pozitivnih brojeva koji predstavljaju telesne težine neke osobe
// u poslednjih godinu dana. Da bi nutricionista izračunao prosečnu težinu
// te osobe u poslednjih godinu dana, on ne uračunava jednu minimalnu
// težinu osobe i jednu maksimalnu težinu osobe u tom periodu. Napisati
// funkciju kojoj se prosleđuje niz težina neke osobe, a koja vraća kolika je
// prosečna težina osobe, vodeći se pravilom nutricioniste koje je
// prethodno navedeno. Pozvati funkciju i rezultat funkcije ispisati u konzoli.
// Na primer, ukoliko je dat niz težina [120, 118, 115, 116, 110, 112, 110,
// 113], nutricionista će odbaciti vrednost 120 i jedno pojavljivanje vrednosti
// 110, stoga će prosečna težina biti: 114 (i opštem slučaju ne mora biti ceo
// broj).
let tezina = [100, 105, 95, 88, 96];
let minVrednostNiza = (niz) => {
  let min = niz[0];
  for (i = 1; i < niz.length; i++) {
    if (niz[i] < min) {
      min = niz[i];
    }
  }
  return min;
};
let maxVrednostNiza = (niz) => {
  let max = niz[0];
  for (let i = 1; i < niz.length; i++) {
    if (niz[i] > max) {
      max = niz[i];
    }
  }
  return max;
};

let prosecnaTezina = (niz) => {
  let suma = 0;
  for (i = 0; i < niz.length; i++) {
    suma = suma + niz[i];
  }
  let srednjaVrednost =
    (suma - maxVrednostNiza(tezina) - minVrednostNiza(tezina)) / niz.length - 2;
  return srednjaVrednost;
};
console.log(prosecnaTezina(tezina));
// Zadatak 4 (20 poena)
// Dat je niz pozitivnih brojeva koji će predstavljati telesne težine svih
// klijenata nutricioniste. Nutricionista želi da se uveri da su svi klijenti
// napravili približno isti napredak (odnosno, da slučajno nije favorizovao
// neke svoje klijente). Da bi to uradio, primenjuje sledeći postupak: Najpre
// računa prosečnu težinu svih svojih klinenata (s1). Potom, uzima težine
// svakog drugog klijenta (počevši od prvog klijenta), i računa njihovu
// prosečnu težinu (s2). Ako se vrednost s2 razlikuje za više od 10% od
// vrednosti s1, tada nutricionista zaključuje da nisu svi klijenti približno
// jednako napredovali. U suprotnom, zaključuje da su svi klijenti približno
// jednako napredovali.
// Napisati funkciju kojoj se prosleđuje niz težina, a koja vraća true ili false,
// u zavisnosti od toga da li su svi klijenti približno jednako napredovali.
// Pozvati funkciju i rezultat funkcije ispisati u konzoli.

let srVrednost = (niz) => {
  let suma = 0;

  for (let i = 0; i < niz.length; i++) {
    suma = suma + niz[i];
  }
  let s1 = suma / niz.length;
  return s1;
};
let srednjaVrednost2 = (niz) => {
  for (let i = 0; i < niz.length; i = i + 2) {
    let suma = 0;
    suma += niz[i];
  }
  let s2 = suma / niz.length;
  //   return s2;
  if ((s2 / s1) * 100 > 30) {
    console.log("Svi klijenti nisu priblizno jednako napredovali");
  } else {
    console.log("Svi klijenti su priblizno jednako napredovali");
  }
};
console.log(srVrednost(tezina));

// Zadatak 5 (20 poena)
// Dat je niz pozitivnih brojeva koji će predstavljati telesne težine svih
// klijenata nutricioniste. Napisati funkciju kojoj se prosleđuje niz težina, a
// koja vraća broj osoba kojima ne treba nijedna nedelja da dostignu
// prosečnu težinu svih klijenata nutricioniste (poželjno je pozvati funkciju iz
// zadatka 2).
// Pozvati funkciju. Ukoliko je broj ovakvih osoba veći od trećine broja svih
// klijenata, onda na ekranu u paragrafu sa tekstom zelene boje ispisati
// poruku “Svi klijenti su približno iste težine”. U suprotnom, na ekranu u
// paragrafu sa tekstom crvene boje ispisati poruku “Nisu svi klijenti
// približno iste težine”.
let srednjaVrednost = (niz) => {
  suma = 0;

  for (let i = 0; i < niz.length; i++) {
    suma = suma + niz[i]; //suma+=niz[i]
  }
  let srednjaV = suma / niz.length;
  return srednjaV;
};
// let brojO = (niz) => {
//   for (let i = 0; i < niz.length; i++) {
//     let br = 0;
//     if (brNedelja(tezina) == 0 || brNedelja(tezina) == 1) {
//       br++;
//     }
//   }
// };
// console.log(brojO(tezina));
