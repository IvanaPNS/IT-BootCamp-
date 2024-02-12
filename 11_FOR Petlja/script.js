// 1 Ispisati brojeve od 1 do 20

//pomocu while petlje

let i = 1;
while (i <= 20) {
  console.log(`Broj je${i}`);
  i++;
}

//pomocu for
//umesto j++ moze da se koristi j+=1, j+=2,j+=3... ili j = j+1
for (let j = 1; j <= 20; j++) {
  console.log(`Ovo je broj${j}`);
}

//2 zadatak  Ispisati brojeve od 20 do 1
//Umesto k-- mozete koristiti k-=1 ili k=k-1

for (let k = 20; k >= 1; k--) {
  console.log(`Ovo je k - ${k}`);
}

//3zadatak  Ispisati parne brojeve od 1 do 20

//5 Odrediti sumu brojeva od 1 do n
let suma = 0;
let n = 5;
for (let p = 1; p <= n; p++) {
  suma += p; // suma =suma+p
}
console.log(`Suma brojeva od 1 do ${n} je ${suma}`);

//1  Ispisati brojeve od 1 do 20

for (let i = 1; i <= 20; i++) {
  console.log(`Broj je ${i}`);
}

//2   Ispisati brojeve od 20 do 1

for (let i = 20; i >= 1; i--) {
  console.log(`Broj je ${i}`);
}

//3 Ispisati parne brojeve od 1 do 20

for (let i = 1; i <= 20; i++) {
  if (i % 2 == 0) {
    console.log(`Parni brojevi su ${i}`);
  }
}

// //4 Ispisati dvostruku vrednost brojeva od 5 do 15

let dvostruka_vrednost = 0;
for (let x = 5, y = 15; x <= y; x++) {
  dvostruka_vrednost = x * 2;
  console.log(`Dvostruka vrednost brojeva je ${dvostruka_vrednost}`);
}

// //5  Odrediti sumu brojeva od 1 do n

n = 5;
suma = 0;
for (i = 1; i <= n; i++) {
  suma = suma + i;
}
console.log(`Suma brojeva od 1 do ${n} je ${suma}`);

// //6  Odrediti sumu brojeva od n do m *
let m = 10;
n = 5;
suma = 0;
for (i = n; i <= m; i++) {
  suma = suma + i;
}
console.log(`Suma brojeva od ${n} do ${m} je ${suma}`);

// //7 Odrediti proizvod brojeva od n do m

m = 4;
n = 2;
let proizvod = 1;
for (i = n; i <= m; i++) {
  proizvod = proizvod * i;
}
console.log(`Proizvod brojeva od ${n} do ${m} je ${proizvod}`);

// // 8 Odrediti sumu kvadrata brojeva od n do m
m = 4;
n = 2;
let suma_kvadrata = 0;
for (i = n; i <= m; i++) {
  suma_kvadrata = suma_kvadrata + i ** 2;
}
console.log(`Suma kvadrata brojeva od ${n} do ${m} je ${suma_kvadrata}`);

// //9  Preuzeti proizoljne tri slike sa istom ekstenzijom i imenovati ih 1, 2 i 3.
// //For petljom u HTML-u ispisati svaku od sličica uz pomoć brojača (iteratora).

// //3   Ispisati parne brojeve od 1 do 20

for (i = 1; i <= 20; i++) {
  if (i % 2 == 0) {
    console.log(`${i} je parni broj`);
  }
}
// // drugi način
for (i = 2; i <= 20; i += 2) {
  console.log(i);
}

// //4  Ispisati dvostruku vrednost brojeva od 5 do 15

for (i = 5; i <= 15; i++) {
  console.log(`${i * 2} je dvostruka vrednost broja ${i}`);
}
// //6

// //* Zadatak 6.  Odrediti sumu brojeva od n do m
suma = 0;
let o = 1;
let p = 5;
for (i = p; i >= o; i--) {
  suma += p;
}
console.log(`Suma brojeva od ${o} do ${p} je ${suma}`);
// //* Zadatak 7.  Odrediti proizvod brojeva od n do m
proizvod = 1;
let j = 5;
let k = 13;
for (j; j <= k; j++) {
  proizvod *= j;
}
console.log(`Proizvod brojeva od j do k je ${proizvod}`);

// //8 Odrediti sumu kvadrata brojeva od n do m
suma_kvadrata = 0;
n = 4;
m = 6;
for (i = n; i <= m; i++) {
  suma_kvadrata = suma_kvadrata + i ** 2; // suma_kvadrata += i*i
}
console.log(`Suma kvadrata brojeva od ${n} do ${m} je ${suma_kvadrata}`);

// //9  Preuzeti proizoljne tri slike sa istom ekstenzijom i imenovati ih 1, 2 i 3.
// //For petljom u HTML-u ispisati svaku od sličica uz pomoć brojača (iteratora).

for (i = 1; i <= 3; i++) {
  document.write(`<img src=" slike/${i}.jpg">`);
}

//12 Ispisati aritmetičku sredinu brojeva od n do m.

n = 3;
m = 6;
suma = 0;
br = 0;
for (i = n; i <= m; i++) {
  //suma =suma+i
  suma += i;
  br++; //br = br + 1    ili br+=1
}
let arsr = suma / br;

console.table(`Aritmeticka sredina brojeva od${n} do ${m} je ${arsr}`);

//10 Odrediti proizvod svih brojeva deljivih sa 11 u intervalu od 20 do 100. *

n = 20;
m = 100;
i = n;
proizvod = 1;
for (i = n; i <= m; i++) {
  if (i % 11 == 0) {
    proizvod = proizvod * i;
  }
}
console.log(`Proizvod brojeva deljivih sa 11 je ${proizvod}`);

//11 Prebrojati koliko ima brojeva deljivih sa 13 u intervalu od 5 do 150.

n = 5;
m = 150;
i = n;
br = 0;
for (i = n; i <= m; i++) {
  if (i % 13 == 0) {
    br++;
  }
}
console.log(`Brojeva deljivih sa 13 i intervalu od 5 do 150 je ${br}`);

//16 Odrediti sumu brojeva od n do m koji nisu deljivi brojem a

n = 3;
m = 9;
suma = 0;
a = 4;
for (i = n; i <= m; i++) {
  if (i % a != 0) {
    suma += i;
  }
}
console.log(
  `Suma brojeva od ${n} do ${m} koji nisu deljivi brojem ${a} je ${suma}`
);
// i=3, suma =3
//i =4,suma  =3
// i=5, suma = 8
//i = 6, suma = 14
//i = 7, suma =21
//i = 8, suma = 21
// i = 9, suma =30
//i = 10

// 13,14,15,17

//13 Prebrojati koliko brojeva od n do m je pozitivno, a koliko njih je negativno.

n = 1;
m = 15;
brP = 0;
brN = 0;
for (i = n; i <= m; i++) {
  if (i > 0) {
    brP++;
  } else if (i < 0) {
    brN++;
  }
}
console.log(`Pozitivno brojeva od ${n} do ${m}
   je ${brP} i negativno ih je ${brN}`);

//14 Prebrojati koliko je brojeva od 5 do 50 koji su deljivi sa 3 ili sa 5. *
n = 5;
m = 50;
br = 0;
for (i = n; i <= m; i++) {
  if (i % 3 == 0 || i % 5 == 0) {
    br++;
  }
}
console.log(`Brojeva od 5 do 50 koji su deljivi sa 3 ili sa 5 je: ${br}`);

//15 Prebrojati i izračunati sumu brojeva od n do m kojima je poslednja cifra 4.

n = 5;
m = 50;
br = 0;
suma = 0;
for (i = n; i <= m; i++) {
  if (i % 10 === 4) {
    suma = suma + i;
    br = br + 1;
  }
}
console.log(`Suma je ${suma} a prebrojano je ${br}`);
//17  Odrediti proizvod brojeva od n do m koji su deljivi brojem a

n = 5;
m = 10;
proizvod = 1;
a = 2;
for (i = n; i <= m; i++) {
  if (i % a == 0) {
    proizvod = proizvod * i;
  }
}
console.log(
  `Proizvod brojeva od ${n} do ${m} koji su deljivi brojem ${a} je ${proizvod}`
);

//drugi nacin

//17 - drugi nacin-  Odrediti proizvod brojeva od n do m koji su deljivi brojem a *

n = 3;
m = 9;
a = 4;
prod = 1;
let n1 = n;
while (n1 % a != 0) {
  n1++;
}
for (let i = n1; i <= m; i += a) {
  prod *= i;
}
console.log(
  `Proizvod brojeva od ${n} do ${m} koji su deljivi brojem ${a} je ${prod}`
);

//18  Odrediti sa koliko brojeva je deljiv uneti broj k
// prvi nacin

k = 30;
let broj_brojeva_deljiv = 0;
for (i = 1; i <= k; i++) {
  if (k % i == 0) {
    broj_brojeva_deljiv++;
  }
}
console.log(`br ${k} je deljiv sa ${broj_brojeva_deljiv} brojeva`);

//drugi nacin

k = 3;
if (k == 1) {
  broj_brojeva_deljiv = 1;
} else {
  broj_brojeva_deljiv = 2;
  for (i = 2; i <= k / 2; i++) {
    if (k % i == 0) {
      broj_brojeva_deljiv++;
    }
  }
}
console.log(`br ${k} je deljiv sa ${broj_brojeva_deljiv} brojeva`);

//19  Odrediti da li je dati prirodan broj n prost. Broj je prost ako je deljiv samo sa jedan i sa samim sobom.

n = 1;
br = 0;
for (let i = 1; i <= n; i++) {
  if (n % i == 0) {
    br++;
  }
}
console.log(br);
if (br > 2) {
  console.log(`Broj ${n} je složen broj`);
} else {
  console.log(`Broj ${n} je prost broj`);
}
// 1 nije prost broj
// Drugi način
let prost = true;
k = 13;
for (i = 2; i <= Math.sqrt(k); i++) {
  if (k % i == 0) {
    prost = false;
    break;
  }
}
if (prost) {
  console.log(`Broj ${k} je prost.`);
} else {
  console.log(`Broj ${k} je složen.`);
}

// 20. ZADATAK
// Napraviti tabelu sa 6 redova.
// Svaki red tabele treba da ima po dve ćelije (dve kolone).
// Svakom parnom redu dodati klasu „obojen“.
// Korišćenjem CSS-a, klasi obojen postaviti proizvoljnu boju pozadine.
let divTabela = document.getElementById(`tabela`);
let tabela = `<table>`;
for (i = 1; i <= 6; i++) {
  let obojen = "belo";
  if (i % 2 == 0) {
    obojen = "roze";
  }

  tabela += `<tr class="${obojen}">
        <td>Tekst</td>
        <td>Tekst</td>
    </tr>`;
}
tabela += `</table>`;

divTabela.innerHTML = tabela;
