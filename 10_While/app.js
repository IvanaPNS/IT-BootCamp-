// let n = 5;

// while (n >= 0) {
//   console.log("Uslov jos zadovoljava");
//   n--;
// }

// let dostupnihKarata = 15;

// while (dostupnihKarata > 0) {
//   console.log("Ima jos karata");
//   dostupnihKarata--;
// }

// if (!dostupnihKarata) {
//   console.log("Karte su rasprodate");
// }

//1 zadatak
// Ispisati brojeve od 1 do 20:
let x = 1;
let poruka = "";
while (x <= 20) {
  console.log(x);
  poruka = poruka + x + " ";
  x++;
}
console.log(poruka);

//2 zadatak
// Ispisati brojeve od 20 do 1.

let y = 20;
while (y >= 1) {
  console.log(y);
  y--;
}

//3 zadatak
// Ispisati parne brojeve od 1 do 20.

let z = 1;
while (z <= 20) {
  if (z % 2 === 0) {
    console.log(z, "paran je broj");
  }
  z++;
}

// 4 zadatak

let n = 15;
i = 1;
while (i <= n) {
  let paragraph = document.createElement("p");
  paragraph.textContent = "This is paragraph " + i;
  if (i % 3 == 1) {
    paragraph.style.color = "red";
  } else if (i % 3 == 2) {
    paragraph.style.color = "green";
  } else {
    paragraph.style.color = "blue";
  }
  document.body.appendChild(paragraph);
  i++;
}

//4  drugi nacin
// let n = 15;
// let i = 1;
// while (i <= n) {
//   if (i % 3 == 1) {
//     document.body.innerHTML += `<p class='plava'>Paragraf br ${i}</p>`;
//   } else if (i % 3 == 2) {
//     document.body.innerHTML += `<p class='crvena'>Paragraf br ${i}</p>`;
//   } else {
//     document.body.innerHTML += `<p class='zelena'>Paragraf br ${i}</p>`;
//   }

//   i++;
// }

//4 treci nacin
// let n = 15;
// let i = 1;
// while (i <= n) {
//   let klasa; // let - uvek vazi u bloku u kom je definisan
//   if (i % 3 == 1) {
//     klasa = `plava`;
//   } else if (i % 3 == 2) {
//     klasa = `crvena`;
//   } else {
//     klasa = `zelena`;
//   }
//   document.body.innerHTML += `<p class='${klasa}'>Paragraf br ${i}</p>`;
//   i++;
// }

// 5 zadatak Kreirati n proizvoljnih slika i staviti im naizmenično dva različita okvira
n = 1;
while (n <= 2) {
  let slika = document.createElement("img");
  slika.src =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSb_XLan56JGbThPZYuR7n89gYmM7VTS8LEg19_5RJiDw&s";
  if (n % 2 == 0) {
    slika.style.border = "5px solid red";
  } else {
    slika.style.border = "5px solid green";
  }
  document.body.appendChild(slika);
  n++;
}

// 6 zadatak Odrediti sumu brojeva od 1 do 100

// i = 1;
// let suma = 0;
// while (i <= 100) {
//   suma = suma + 1;
//   i++;
//
// }
// console.log();

// 6 a
i = 1;
let suma = 0;
while (i <= 100) {
  suma = suma + i;
  i++;
}
console.log(`Suma brojeba od 1 - 100 je: ${suma}`);

// 7  Odrediti sumu brojeva od 1 do n
n = 15;
i = 1;
suma = 0;
while (i <= n) {
  suma = suma + i;
  i++;
}
console.log(`Suma brojeba od 1 - ${n} je: ${suma}`);

// 8 Odrediti sumu brojeva od n do m

n = 5;
let m = 10;
i = n;
suma = 0;
while (i <= m) {
  suma += i;
  i++;
}
console.log(`Suma brojeba od ${n} - ${m} je: ${suma}`);

// 9
// Odrediti proizvod brojeva od n do m
n = 3;
m = 6;
let proizvod = 1;
i = n;
while (i <= m) {
  proizvod = proizvod * i;
  i++;
}
console.log(`proizvod bojeva od${n} do ${m} = je ${proizvod}`);

// 10  Odrediti sumu kvadrata parnih i sumu kubova neparnih brojeva od n do m

n = 2;
m = 5;
i = n;
let sumaP = 0;
let sumak = 0;
while (i <= m) {
  if (i % 2 == 0) {
    sumaP += i ** 2; //sumaP = sumaP + i **2
  } else {
    sumak += i ** 3;
  }
  i++;
}
console.log(`Suma kvadratnih parnih je ${sumaP} a suma kubova je ${sumak}`);

// zadata11
//Odrediti sa koliko brojeva je deljiv uneti broj k
k = 9;
i = 1;
let brdelioca = 0;
while (i <= k) {
  if (k % i == 0) {
    brdelioca++;
  }
  i++;
}
console.log(`Broj delioca broja ${k} jednak je ${brdelioca}`);

// 12zadatak  Odrediti da li je dati prirodan broj n prost. Broj je prost ako je deljiv samo sa jedan i sa samim sobom.
n = 7;
i = 1;
brdelioca = 0;
while (i <= n) {
  if (n % i == 0) {
    brdelioca++;
  }
  i++;
}
if (brdelioca == 2) {
  console.log(`Br ${n} je prost`);
} else {
  console.log(`Br ${n} je slozen`);
}
