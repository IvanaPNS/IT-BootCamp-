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
