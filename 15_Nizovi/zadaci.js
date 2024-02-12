//test primeri
let brojevi1 = [8, 4, 9, 2, 0, 6];
let brojevi2 = [-5, 7, 6, 3];
let brojevi3 = [1, 2, 3, 4, 5, 6];
let brojevi4 = [1, 5, 9, 3];
let brojevi5 = [8, 6, 7, 8, 5];

// 1 Ispisati sve elemente niza od 5 stringova.

let boje = ["Plava", "Bela", "Crna", "Zuta", "Zelena"];
console.log(boje);

//2 Odrediti zbir elemenata celobrojnog niza.
// let brojevi = [7, 8, 22, 12, 5];
// let suma = 0;
// for (let i = 0; i < brojevi.length; i++) {
//   suma = suma + brojevi[i];
// }
// console.log(suma);

let sumaElem = (niz) => {
  suma = 0;
  for (let i = 0; i < niz.length; i++) {
    suma = suma + niz[i]; //suma+=niz[i]
  }
  return suma;
};

console.log(sumaElem(brojevi1));
console.log(sumaElem(brojevi2));
console.log(sumaElem(brojevi3));
console.log(sumaElem([2, 5, 8, 7, 9]));

//3 zadatak odrediti proizvod elemenata celobrojnog niza
let proizvodElem = (niz) => {
  let proizvod = 1;
  for (let i = 0; i < niz.length; i++) {
    proizvod *= niz[i]; //proizvod =proizvod * niz[i]
  }
  return proizvod;
};
console.log(proizvodElem(brojevi1));
console.log(proizvodElem(brojevi2));
console.log(proizvodElem(brojevi3));

//4 Odrediti srednju vrednost elemenata celobrojnog niza
let srednjaVrednost = (niz) => {
  suma = 0;

  for (let i = 0; i < niz.length; i++) {
    suma = suma + niz[i]; //suma+=niz[i]
  }
  let srednjaV = suma / niz.length;
  return srednjaV;
};
console.log(srednjaVrednost(brojevi1));
console.log(srednjaVrednost(brojevi2));
console.log(srednjaVrednost(brojevi3));

let srednjaVrednost2 = (niz) => sumaElem(niz) / niz.length;
console.log(srednjaVrednost(brojevi1));
console.log(srednjaVrednost(brojevi2));
console.log(srednjaVrednost(brojevi3));

// let srVrednost2 = niz.length != 0 ? sumaElem(niz) / niz.length : 0;

//5 Odrediti maksimalnu vrednost u celobrojnom nizu.

let maksimalnaVrednost = (niz) => {
  let maxV = 0;
  for (let i = 0; i < niz.length; i++) {
    if (niz[i] > maxV) {
      maxV = niz[i];
    }
  }
  return maxV;
};
console.log(maksimalnaVrednost(brojevi1));
console.log(maksimalnaVrednost(brojevi2));
console.log(maksimalnaVrednost(brojevi3));

// drugi nacin 5
// 1 proglasiti prvi element niza za maksimalni
// 2 proci kroz ostale elemente niza i utvrditi da li ima veceg elementa od do sada maksimalnog, ako ima azurirati ovu vrednost

let maxNiza = (niz) => {
  let max = niz[0]; //korak 1
  for (let i = 1; i < niz.length; i++) {
    if (niz[i] > max) {
      max = niz[i];
    }
  }
  return max;
};
console.log(maxNiza(brojevi1));
console.log(maxNiza(brojevi2));
console.log(maxNiza(brojevi3));
console.log(maxNiza(brojevi4));

// Test - napisati fukciju srVrednost koja vraca srednju vrednost celobrojnog niza

// 4 a) Zadatak - odrediti srednju vrednost parnih elemenata celobrojnog niza

let srVrednostParnih = (niz) => {
  let suma = 0;
  let br = 0;
  for (let i = 0; i < niz.length; i++) {
    if (niz[i] % 2 == 0) {
      suma = suma + niz[i];
      br++;
    }
  }
  return suma / br;
};

console.log(srVrednostParnih(brojevi1));
console.log(srVrednostParnih(brojevi2));
console.log(srVrednostParnih(brojevi3));

// console.log(srVrednostParnih(brojevi4));

// 7 Odrediti indeks maksimalnog elementa celobrojnog niza.
let inMaxNiza = (niz) => {
  let max = niz[0];
  let index = 0;
  for (let i = 1; i < niz.length; i++) {
    if (niz[i] > max) {
      max = niz[i];
      index = i;
    }
  }
  return index;
};
console.log(inMaxNiza(brojevi1));
console.log(inMaxNiza(brojevi2));
console.log(inMaxNiza(brojevi3));
console.log(inMaxNiza(brojevi4));
console.log(inMaxNiza(brojevi5));

// 6 Odrediti minimalnu vrednost u celobrojnom nizu.
let minVrednostNiza = (niz) => {
  let minV = niz[0];
  for (i = 1; i < niz.length; i++) {
    if (niz[i] < minV) {
      minV = niz[i];
    }
  }
  return minV;
};
console.log(minVrednostNiza(brojevi1));
console.log(minVrednostNiza(brojevi2));

// 8 zadatak Odrediti indeks minimalnog elementa celobrojnog niza.
let inMinNiza = (niz) => {
  let min = niz[0];
  let index = 0;
  for (let i = 1; i < niz.length; i++) {
    if (niz[i] < min) {
      min = niz[i];
      index = i;
    }
  }
  return index;
};
console.log(inMinNiza(brojevi1));
console.log(inMinNiza(brojevi2));

// 9 zadtak Odrediti broj elemenata celobrojnog niza koji su veći od srednje vrednosti.
let brElemenata = (niz) => {
  br = 0;
  for (let i = 0; i < niz.length; i++) {
    if (niz[i] > srednjaVrednost(niz)) {
      br++;
      // br += niz[i] > srednjaVrednost(niz) ? 1 : 0; //umesto if-a
      // niz[i] > srednjaVrednost(niz) ? br++ : 0; //umesto if-a
    }
  }
  return br;
};
console.log(brElemenata(brojevi1));

//10 Izračunati zbir pozitivnih elemenata celobrojnog niza.

let zbirP = (niz) => {
  suma = 0;
  for (let i = 0; i < niz.length; i++) {
    if (niz[i] > 0) {
      suma = suma + niz[i];
    }
    return suma;
  }
};
console.log(zbirP(brojevi1));

//11 Odrediti broj parnih elemenata u celobrojnom nizu.
let brParnih = (niz) => {
  br = 0;
  for (let i = 0; i < niz.length; i++) {
    if (niz[i] % 2 == 0) {
      br++;
    }
  }
  return br;
};
console.log(brParnih(brojevi1));
console.log(brParnih(brojevi2));

// 12  Odrediti broj parnih elemenata sa neparnim indeksom

// ZADATAK 12  Odrediti broj parnih elemenata sa neparnim indeksom.
let brojParElemNeparIndex = (niz) => {
  let br = 0;
  for (i = 0; i < niz.length; i++) {
    if (niz[i] % 2 == 0) {
      if (i % 2 != 0) {
        br++;
      }
    }
  }
  return br;
};
console.log(`ZADATAK 12`);
console.log(brojParElemNeparIndex(brojevi1));
console.log(brojParElemNeparIndex(brojevi2));
console.log(brojParElemNeparIndex(brojevi3));
console.log(brojParElemNeparIndex(brojevi4));
console.log(brojParElemNeparIndex(brojevi5));

// 12. Zadatak  drugi nacin
// Odrediti broj parnih elemenata sa neparnim indeksom.
// let brojParnihSaNeparnimIndexom = (niz) => {
//   let count = 0;
//   for (let i = 1; i < niz.length; i += 2) {
//     // if (niz[i] % 2 == 0) {
//     //   count++
//     // }
//     count += niz[i] % 2 == 0 ? 1 : 0;
//   }
//   return count;
// };
// console.log(
//   "brojParnihSaNeparnimIndexom",
//   brojParnihSaNeparnimIndexom(brojevi4)
// );

// ZADATAK 13  Izračunati sumu elemenata niza sa parnim indeksom.
let sumaElemNizaParniIndex = (niz) => {
  let suma = 0;
  for (i = 0; i < niz.length; i++) {
    if (i % 2 == 0) {
      suma += niz[i];
    }
  }
  return suma;
};
console.log(`ZADATAK 13`);
console.log(sumaElemNizaParniIndex(brojevi1));
console.log(sumaElemNizaParniIndex(brojevi2));
console.log(sumaElemNizaParniIndex(brojevi3));
console.log(sumaElemNizaParniIndex(brojevi4));
console.log(sumaElemNizaParniIndex(brojevi5));

// 13. Zadatak
// Izračunati sumu elemenata niza sa parnim indeksom.
// let sumaElemenataSaParnimIndexom = (niz) => {
//   let sum = 0;
//   for (let i = 0; i < niz.length; i += 2) {
//     sum += niz[i];
//   }
//   return sum;
// };
// console.log(
//   "sumaElemenataSaParnimIndexom",
//   sumaElemenataSaParnimIndexom(brojevi1)
// );

//14  Promeniti znak svakom elementu celobrojnog niza.
let celNiz = (niz) => {
  for (let i = 0; i < niz.length; i++) {
    niz[i] = niz[i] * -1;
  }
  return niz;
};
console.log(celNiz(brojevi1));

//15  Promeniti znak svakom neparnom elementu celobrojnog niza sa parnim indeksom.

let promenitiZnak2 = (niz) => {
  for (let i = 0; i < niz.length; i += 2) {
    if (niz[i] % 2 != 0) {
      niz[i] = niz[i] * -1;
    }
  }
  return niz;
};
console.log(promenitiZnak2(brojevi1));

// element niza ==niz[i]
//index = i
// parni index -  for (let i = 0; i < niz.length; i += 2)
// neparni index   -  for (let i = 1; i < niz.length; i += 2)
// neparni element niza -  niz[i] % 2 != 0
