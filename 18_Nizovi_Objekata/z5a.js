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
      suma += t;
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
    return suma / this.temperature.length;
  },
};
console.log(dan3.prosek());
let dani = [dan1, dan2, dan3];

//a prosecnaTemp kojoj se prosleđuje dan, a koja određuje i vraća prosečnu temperaturu izmerenu tog dana.
let prosekT = (dan) => {
  let suma = 0;
  dan.temperature.forEach((t) => {
    suma += t;
  });

  return suma / dan.temperature.length;
};
console.log(prosekT(dan1));

//aa prosecnaTemp kojoj se prosleđuje niz dan, a koja određuje i vraća prosečnu temperaturu izmerenu tog dana.
let prosekTT = (niz) => {
  niz.forEach((dan) => {
    let suma = 0;
    dan.temperature.forEach((t) => {
      suma += t;
    });
    console.log(suma / dan.temperature.length);
  });
};
prosekTT(dani);

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

// b brojNatprosecnoMerenja kojoj se prosleđuje dan, a koja prebrojava i vraća koliko merenja je bilo sa natprosečnom temperaturom.

let brojNatprosecnoMerenja = (dan) => {
  let br = 0;
  let prosekF = prosekT(dan);
  dan.temperature.forEach((t) => {
    if (t > prosekF) {
      br++;
    }
  });
  return br;
};
console.log(brojNatprosecnoMerenja(dan2));

// ba brojNatprosecnoMerenja kojoj se prosleđuje niz dan-a, a koja prebrojava i vraća koliko merenja je bilo sa natprosečnom temperaturom.

let brojNatprosecnoMerenjA = (niz) => {
  niz.forEach((dan) => {
    let br = 0;
    dan.temperature.forEach((t) => {
      if (t > prosekT(dan)) {
        br++;
      }
    });
    console.log(br);
  });
};
brojNatprosecnoMerenjA(dani);

// c Napisati funkciju brojMaxMerenja kojoj se prosleđuje dan, a koja prebrojava i vraća koliko merenja je bilo sa maksimalnom temperaturom.

let brojMaxMerenja = (niz) => {
  niz.forEach((dan) => {
    let br = 0;
    let maxT = 0;
    dan.temperature.forEach((t) => {
      if (t > maxT) {
        maxT = t;
      }
    });
    console.log(maxT);
    dan.temperature.forEach((temp) => {
      if (temp == maxT) {
        br++;
      }
    });
    console.log(br);
  });
};
brojMaxMerenja(dani);

//d Napisati funkciju brojMerenjaIzmedju kojoj se prosleđuje dan, kao i dva parametra koji predstavljaju dve temperature. Potrebno je da metoda vrati broj merenja u toku dana čija je vrednost između ove dve zadate temperature (ne uključujući te dve vrednosti).

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

// e Napisati funkciju natprosecnoTopao kojoj se prosleđuje dan, a koja vraća true ukoliko je u većini dana temperatura bila iznad proseka. U suprotnom vraća false.
let natprosecnoTopao = (niz) => {
  niz.forEach((dan) => {
    // let natprosecno = false;
    let brT = 0;
    dan.temperature.forEach((t) => {
      if (t > prosekT(dan)) {
        brT++;
      }
    });
    console.log(brT);
    console.log(brT > dan.temperature.length / 2);
  });
};
natprosecnoTopao(dani);

// let natprosecnoTopao = (niz) => {
//   niz.forEach((dan) => {
//     let natTopao = false;
//     let brojTemp = 0;
//     dan.temperature.forEach((t) => {
//       if (t > dan.prosek()) {
//         brojTemp++;
//       }
//     });
//     console.log(brojTemp);
//     if (brojTemp > dan.temperature.length / 2) {
//       natTopao = true;
//     }
//     console.log(natTopao);
//   });
// };
// natprosecnoTopao(dani);
