// Test primeri
let a = [6, 8, 9, 3, 1, -10, -5];
let b = [9, 1, 6, 8, 9, 3, 1, 9, 1];
let c = [3, 5, 2, 1, 6, 2, 6];
// 2 Odrediti zbir elemenata celobrojnog niza.

let sumaElemenata = (niz) => {
  let suma = 0;
  niz.forEach((el) => {
    suma += el;
  });
  return suma;
};
console.log(sumaElemenata(a));

// 5 Odrediti maksimalnu vrednost u celobrojnom nizu.
let maxVr = (niz) => {
  let max = niz[0];
  niz.forEach((el) => {
    if (el > max) {
      max = el;
    }
  });
  return max;
};
console.log(maxVr(a));
//3,4,6

//3 Odrediti proizvod elemenata celobrojnog niza.

let proizvodElemenata = (niz) => {
  let proizvod = 1;
  niz.forEach((el) => {
    proizvod *= el;
  });
  return proizvod;
};
console.log(proizvodElemenata(a));

// 4 Odrediti srednju vrednost elemenata celobrojnog niza.
let srednjaVrednostElemenata = (niz) => {
  let suma = 0;
  br = 0;
  niz.forEach((el) => {
    suma += el;
    br++;
  });
  return suma / br;
};
console.log(srednjaVrednostElemenata(a));

// 6 Odrediti minimalnu vrednost u celobrojnom nizu.

let minV = (niz) => {
  let min = niz[0];
  niz.forEach((el) => {
    if (el < min) {
      min = el;
    }
  });
  return min;
};
console.log(minV(a));
// 7.8.9

// 7 Odrediti indeks maksimalnog elementa celobrojnog niza.

let indexMaxVr = (niz) => {
  let max = niz[0];
  let index = 0;
  niz.forEach((el, i) => {
    if (el > max) {
      max = el;
      index = i;
    }
  });
  return index;
};
console.log(indexMaxVr(a));
// console.log(indexMaxVr(b));

// 7a vratiti sve indexe pojavljivanja max vrednosti

let sviIndexiMaxVr = (niz) => {
  let max = maxVr(niz);
  let sviIndexi = [];
  niz.forEach((el, i) => {
    if (el == max) {
      sviIndexi.push(i);
    }
  });
  return sviIndexi;
};
console.log(sviIndexiMaxVr(b));
console.log(sviIndexiMaxVr(c));
console.log(sviIndexiMaxVr(c)[0]); // index prvog pojavljivanja
console.log(sviIndexiMaxVr(c)[sviIndexiMaxVr(c).length - 1]); // index poslednjeg pojavljivanja

//8  Odrediti indeks minimalnog elementa celobrojnog niza.

let indexMinVr = (niz) => {
  let min = niz[0];
  let index = 0;
  niz.forEach((el, i) => {
    if (el < min) {
      min = el;
      index = i;
    }
  });
  return index;
};
console.log(indexMinVr(a));
// console.log(indexMinVr(b));

// 9 Odrediti broj elemenata celobrojnog niza koji su veći od srednje vrednosti.

let brElemenata = (niz) => {
  let br = 0;
  niz.forEach((el) => {
    if (el > srednjaVrednostElemenata(niz)) {
      br++;
    }
  });
  return br;
};
console.log(brElemenata(a));

// 10 Izračunati zbir pozitivnih elemenata celobrojnog niza.
let zbirPozitivnihElemenata = (niz) => {
  suma = 0;
  niz.forEach((el) => {
    if (el > 0) {
      suma += el;
    }
  });
  return suma;
};
console.log(zbirPozitivnihElemenata(a));

//11  Odrediti broj parnih elemenata u celobrojnom nizu

let brParnihElemenata = (niz) => {
  let br = 0;
  niz.forEach((el) => {
    if (el % 2 == 0) {
      br++;
    }
  });
  return br;
};
console.log(brParnihElemenata(a));

// 12 Odrediti broj parnih elemenata sa neparnim indeksom. let a = [6, 8, 9, 3, 1, -10, -5];
let brParnihSaNeparnimI = (niz) => {
  let br = 0;
  niz.forEach((el, i) => {
    if (el % 2 == 0) {
      if (i % 2 != 0) {
        br++;
      }
    }
  });
  return br;
};
console.log(brParnihSaNeparnimI(a));

// 13  Izračunati sumu elemenata niza sa parnim indeksom.
let sumaElSaParnimIndexom = (niz) => {
  let suma = 0;
  niz.forEach((el, i) => {
    if (i % 2 == 0) {
      suma += el;
    }
  });
  return suma;
};
console.log(sumaElSaParnimIndexom(a));

//14  Promeniti znak svakom elementu celobrojnog niza.

let promenaZnaka = (niz) => {
  const newArr = [];

  niz.forEach((el) => {
    newArr.push(el * -1);
  });

  return newArr;
};

const i = promenaZnaka(a);
console.log(i);
// console.log(promenaZnaka(a));

// 15  Promeniti znak svakom neparnom elementu celobrojnog niza sa parnim indeksom.

let promenaZnakaNeparnomEParniI = (niz) => {
  let newArr = [];
  niz.forEach((el, i) => {
    if (el % 2 != 0) {
      if (i % 2 == 0) {
        newArr.push(el * -1);
      }
    }
  });
  return newArr;
};
console.log(promenaZnakaNeparnomEParniI(a));

//16
// 19 Ispisati dužinu svakog elementa u nizu stringova.
let duzinaSvihStringova = (niz) => {
  niz.forEach((el) => {
    console.log(el.length);
  });
};
let imena = ["Stefan", "Vladislav", "Nikola", "Maja"];
duzinaSvihStringova(imena);

//20 Odrediti element u nizu stringova sa najvećom dužinom
let stringMaxDuzina = (niz) => {
  let maxVr = niz[0];
  let duzina = niz[0].length;
  niz.forEach((el) => {
    if (el.length > duzina) {
      maxVr = el;
      duzina = el.length;
    }
  });
  return maxVr;
};
console.log(stringMaxDuzina(imena));

// let imena2 = ["pera", "Marija", "Laza", "Vladislav", "Toni"];
// console.log(stringMaxDuzina(imena2));

// 24 dati su nizovi
let zad24 = (a, b) => {
  let c = [];
  a.forEach((el, i) => {
    // c.push(a[i], b[i]);
    c.push(el, b[i]);
  });
  return c;
};
let n1 = [1, 2, 3, 4];
let n2 = [5, 6, 7, 8];
console.log(zad24(n1, n2));

//zadatak 25

//sa for
let zad25For = (a, b) => {
  let n = a.length; // n = b.length
  let c = [];
  for (let i = 0; i < n; i++) {
    c[i] = a[i] * b[i]; // c.push (a[i] * b [i])
  }
  return c;
};
console.log(zad25For(n1, n2));

// sa forEach

let zad25ForEach = (a, b) => {
  let c = [];
  a.forEach((el, i) => {
    c.push(el * b[i]);
  });
  return c;
};
console.log(zad25ForEach(n1, n2));

//26
//for petlja
let zad26for = (a) => {
  let k = a.length; // paran br
  let n = k / 2;
  let b = [];
  for (let i = 0; i < n; i++) {
    b[i] = (a[i] + a[2 * n - 1 - i]) / 2;
  }
  return b;
};
console.log(zad26for(n1));
console.log(zad26for(n2));

let n3 = [5, 8, 0, 1, 4, 2, 4, 3];
console.log(zad26for(n3));

//forEach petlja

let zad26forEach = (a) => {
  let b = [];
  let k = a.length; // k = 6
  let n = k / 2;
  a.forEach((el, i) => {
    if (i < n) {
      b[i] = (a[i] + a[2 * n - 1 - i]) / 2;
    }
  });
  return b;
};
console.log(zad26forEach(n3));
