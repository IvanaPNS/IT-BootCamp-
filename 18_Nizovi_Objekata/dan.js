let dan1 = {
  datum: "2023/12/22",
  kisa: true,
  sunce: false,
  oblacno: true,
  temperature: [-3, -4, -6, -7, -6, -4, -10],
};
let dan2 = {
  datum: "2023/12/24",
  kisa: false,
  sunce: true,
  oblacno: false,
  temperature: [3, 4, 6, 7, 9, 8, 5, 3],
};
let dan3 = {
  datum: "2023/12/25",
  kisa: false,
  sunce: true,
  oblacno: true,
  temperature: [3, 4, 6, 6, 7, 5, 4, 3],
};
// 1 zadatak
let dani = [dan1, dan2, dan3];
// 2 Napraviti arrow funksiju koja ispisuje datum u kome je najviše puta izmerena temperatura. Ukoliko ima više takvih datuma:

// let datumNajviseIzmerenihTemp = (dan) => {
let maxBrMerenja = dani[0].temperature.length;
let indeksPrvog = 0;
let indeksPoslednjeg = 0;
dani.forEach((dan, indeks) => {
  if (maxBrMerenja < dan.temperature.length) {
    maxBrMerenja = dan.temperature.length;
    indeksPrvog = indeks;
  }

  if (maxBrMerenja <= dan.temperature.length) {
    maxBrMerenja = dan.temperature.length;
    indeksPoslednjeg = indeks;
  }
});
// a) Ispisati svaki takav datum
dani.forEach((dan) => {
  if (dan.temperature.length == maxBrMerenja) {
    console.log(dan.datum);
  }
});

// b) Ispisati prvi od njih
//I nacin
console.log(dani[indeksPrvog].datum);
// II nacin
for (let i = 0; i < dani.length; i++) {
  if (maxBrMerenja == dani[i].temperature.length) {
    console.log(dani[i].datum);
    break;
  }
}

// c) Ispisati poslednji od njih
// I nacin
console.log(dani[indeksPoslednjeg].datum);
// II nacin
for (let i = dani.length - 1; i > 0; i--) {
  if (maxBrMerenja == dani[i].temperature.length) {
    console.log(dani[i].datum);
    break;
  }
}
// 3. ZADATAK
// Napraviti arrow funksiju koja prebrojava i ispisuje koliko je bilo kišnih dana, koliko je bilo sunčanih dana i koliko je bilo oblačnih dana
let prebrojavaDaneKsO = (niz) => {
  let brK = 0;
  let brS = 0;
  let brO = 0;
  niz.forEach((dan) => {
    if (dan.kisa) {
      brK++;
    }
    if (dan.sunce) {
      brS++;
    }
    if (dan.oblacno) {
      brO++;
    }
  });
  console.log(
    `Kisnih dana je bilo: ${brK}, suncanih: ${brS}, i oblacnih: ${brO}`
  );
};

prebrojavaDaneKsO(dani);

// 4. ZADATAK
// Napraviti arrow funkciju koja računa i vraća koliko je bilo dana sa natprosečnom temperaturom
let brNatprosecnihDana = (niz) => {
  let zbirTemp = 0;
  let brTemp = 0;
  let brDana = 0;
  niz.forEach((dan) => {
    dan.temperature.forEach((t) => {
      zbirTemp += t;
      brTemp++;
    });
  });
  let prosekUkupno = zbirTemp / brTemp;
  console.log(prosekUkupno);
  niz.forEach((dan) => {
    let zbirLok = 0;
    let brLok = 0;
    dan.temperature.forEach((t) => {
      zbirLok += t;
      brLok++;
    });
    let prosLok = zbirLok / brLok;
    console.log(prosLok);
    if (prosLok > prosekUkupno) {
      brDana++;
    }
  });
  return brDana;
};
console.log(
  `Broj dana sa natprosecnom temperaturom: ${brNatprosecnihDana(dani)}`
);
