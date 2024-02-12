let d = new Date();
let minuti = d.getMinutes();
console.log("Trenutno je : ", minuti);
let sati = d.getHours();
console.log(`Trenutno je: ${sati}`);

//* 8)  Radno vreme jedne programerske firme je od 9h do 17h.
// Preuzeti vreme sa računara i ispitati da li u to vreme firma radi ili ne radi.
// 09: firma otvorena    17:00 firma ne radi*/

let data = new Date();
let vreme = data.getHours();
let dan = data.getDay();

if (vreme > 17 || vreme < 9 || dan == 0 || dan == 6) {
  console.log("Firma ne radi");
} else {
  console.log("firma radi");
}

/* 1) Za unetu zapreminu proizvoda, u paragrafu zelenom bojom ispisati “Pack up”, ukoliko je proizvod zapremine manji ili jednake 100ml. 
U suprotnom u paragrafu crvenom bojom ispisati “Throw away”. */
let zapremina = 200;
if (zapremina <= 100) {
  document.write(`<p style="color: red;">Baci me</p>`);
} else {
  document.write(`<p style="color:green;">Ponesi me</p>`);
}

// 2 Učitati dva različita cela broja i ispitati da li je veći od njih paran, a manji od njih deljiv sa 3.
let br1 = 8;
let br2 = 11;
let rez = br1 > br2 ? br1 : br2;
console.log(rez);
if (rez % 2 == 0) {
  console.log(`Veci broj je ${rez} i paran je`);
} else {
  console.log(`Veci broj je ${rez} i  ne paran je`);
}
if (rez % 3 == 0) {
  console.log(`Manji broj je  deljiv je sa 3`);
} else {
  console.log(`Manji broj nije deljiv je sa 3`);
}

//Zadatak 14  Napraviti program koji za uneti pol i broj godina korisnika ispisuje da li je korisnik muškarac ili žena i da li je punoletan

let pol = "m";
let godina = 20;
if (pol == "z" && godina >= 18) {
  console.log("pol je zenski i punoletna je");
} else {
  console.log("pol je zenski i maloletan je je");
}
if (pol == "m" && godina >= 18) {
  console.log("Pol je muski i punoletan je");
} else {
  console.log("Pol je muski i maloletan je");
}
//2 Ispitati da li je trenutna godina prestupna. (godinu preuzeti iz vremena na Vašem računaru).Godina je prestupna ako je deljiva sa 4 i nije deljiva sa 100 ili ako je deljiva sa 400.

let godinaT = data.getFullYear();
if (godinaT % 4 == 0 && (godinaT % 100 != 0 || godinaT % 400 == 0)) {
  console.log("godina je prestupna");
} else {
  console.log("godina nije prestupna");
}

// Kreirati n paragrafa sa proizvoljnim tekstom i naizmenično ih obojiti u tri različite boje

let nParagraf = 9;
let i = 1;
while (i <= nParagraf) {
  if (i % 3 == 1) {
    document.write(`<p style="color:red;">Ovde ide text+ ${i}</p>`);
  } else if (i % 3 == 2) {
    document.write(`<p style="color:blue;">Ovde ide text+ ${i}</p>`);
  } else {
    document.write(`<p style="color:pink;">Ovde ide text+ ${i}</p>`);
  }
  i++;
}

//// 5 zadatak Kreirati n proizvoljnih slika i staviti im naizmenično dva različita okvira

n = 3;
i = 1;
while (i <= n) {
  let slika = document.createElement("img");
  slika.src =
    "https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
  if (i % 2 == 0) {
    slika.style.border = "5px solid red";
  } else {
    slika.style.border = "5px solid green";
  }
  document.body.appendChild(slika);
  i++;
}
//  Odrediti proizvod brojeva od n do m
n = 8;
let m = 13;
let proizvod = 1;
i = n;
while (i <= m) {
  proizvod *= i;
  i++;
}
console.log(`Proizvod brojebva od ${n} do ${m} je ${proizvod}`);

// 10  Odrediti sumu kvadrata parnih i sumu kubova neparnih brojeva od n do m

n = 5;
m = 9;
let sumaP = 0;
let sumaN = 0;
i = n;
while (i <= m) {
  if (i % 2 == 0) {
    sumaP = sumaP + i ** 2;
  } else {
    sumaN = sumaN + i ** 3;
  }
  i++;
}
console.log(
  `Suma kvadrata parnih je ${sumaP}, a suma kubova neparnih je ${sumaN}`
);

//Odrediti sa koliko brojeva je deljiv uneti broj k
i = 1;
let k = 36;
br = 0;
while (i <= k) {
  if (k % i == 0) {
    br++;
  }
  i++;
}
console.log(`Uneti br ${k} je deljiv sa ${br} brojeva`);

//5 Odrediti sumu brojeva od 1 do n
n = 20;
let suma = 0;
for (let i = 1; i <= n; i++) {
  suma += i;
}
console.log(`Suma brojeva od 1 do ${n} je ${suma}`);

// //4 Ispisati dvostruku vrednost brojeva od 5 do 15
let dvostrukaVrednost = 0;
for (let x = 5, y = 20; x <= y; x++) {
  dvostrukaVrednost = x * 2;
  console.log(dvostrukaVrednost);
}
// // 8 Odrediti sumu kvadrata brojeva od n do m

n = 8;
m = 12;
suma = 0;
for (i = n; i <= m; i++) {
  suma += i ** 2;
}
console.log(`suma kvadrata brojeva od ${n} do ${m} je ${suma}`);
// //9  Preuzeti proizoljne tri slike sa istom ekstenzijom i imenovati ih 1, 2 i 3.
// //For petljom u HTML-u ispisati svaku od sličica uz pomoć brojača (iteratora).
for (i = 1; i <= 3; i++) {
  document.write(`<img src ="slike/${i}.jpg">`);
}
//10 Odrediti proizvod svih brojeva deljivih sa 11 u intervalu od 20 do 100.
n = 20;
m = 100;
proizvod = 1;
for (i = n; i <= m; i++) {
  if (i % 11 == 0) {
    proizvod *= i;
  }
}
console.log(`Proizvod je ${proizvod}`);

//11 Prebrojati koliko ima brojeva deljivih sa 13 u intervalu od 5 do 150.
n = 5;
m = 150;
br = 0;
for (i = n; i <= m; i++) {
  if (i % 13 == 0) {
    br++;
  }
}
console.log(`Ima ih deljivih sa trines ${br}`);

//16 Odrediti sumu brojeva od n do m koji nisu deljivi brojem a
suma = 0;
n = 3;
m = 9;
a = 4;
for (i = n; i <= m; i++) {
  if (i % a != 0) {
    suma += i;
  }
}
console.log(
  `Suma brojeva od ${n} do ${m} koji nisu deljivi brojem ${a} je ${suma}`
);

//13 Prebrojati koliko brojeva od n do m je pozitivno, a koliko njih je negativno.
n = -5;
m = 7;
let brP = 0;
let brN = 0;
for (i = n; i <= m; i++) {
  if (i > 0) {
    brP++;
  } else if (i < 0) {
    brN++;
  }
}
console.log(
  `Broj pozitivnih brojeva je ${brP}, broj negativnih brojeva je ${brN}`
);
//14 Prebrojati koliko je brojeva od 5 do 50 koji su deljivi sa 3 ili sa 5. *

n = 5;
m = 50;
br = 0;
for (i = n; i <= m; i++) {
  if (i % 3 == 0 || i % 5 == 0) {
    br++;
  }
}
console.log(`Takvih brojeva je ${br}`);
//15 Prebrojati i izračunati sumu brojeva od n do m kojima je poslednja cifra 4.

n = 5;
m = 50;
br = 0;
suma = 0;
for (i = n; i <= m; i++) {
  if (i % 10 == 4) {
    suma += i;
    br++;
  }
}
console.log(`Sima tih brojeva je ${suma} i ima ih ${br}`);
//18  Odrediti sa koliko brojeva je deljiv uneti broj k

k = 30;
br = 0;
for (i = 1; i <= k; i++) {
  if (k % i == 0) {
    br++;
  }
}
console.log(`Deljiv je sa ukupno ${br}`);

// 20. ZADATAK
// Napraviti tabelu sa 6 redova.
// Svaki red tabele treba da ima po dve ćelije (dve kolone).
// Svakom parnom redu dodati klasu „obojen“.
// Korišćenjem CSS-a, klasi obojen postaviti proizvoljnu boju pozadine.
let divTabela = document.getElementById("tabela");
let tabela = "<table>";
for (i = 1; i <= 6; i++) {
  let obojen = "roze";
  if (i % 2 == 0) {
    obojen = "belo";
  }
  tabela += `<tr class="${obojen}"><td> neki text</td><td> neki prvi text</td></tr>`;
}
tabela += `</table>`;
divTabela.innerHTML = tabela;
