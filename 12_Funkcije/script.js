console.log("Funkcije");
////////////////////////////////////
// funkcija za ispis u konzoli
/////////////////////////////////
function zdravo() {
  console.log("Hello world");
}
zdravo(); // poziv funkcije
zdravo();

////////////////////////////////////////////////////////

// zunkcija za ispis prosledjenog texta u konzoli (prosledjuje se 1 parametar)
/////////////////////////////////////////////
function ispisiTekst(tekst) {
  console.log(tekst);
}
ispisiTekst("Ovo je neki text"); // poziv kada prosledjujemo neku vrednost
ispisiTekst("Ovo je neki drugi tekst");
let t = "Moj tekst";
ispisiTekst(t);

//////////////////////////////////////////////////////////
// funkcija kojoj se prosledjuju vise parametra
/////////////////////////////////////////////////////////.

function imePrezime(ime, prezime, godine) {
  console.log(`Ulogovana osoba je ${ime} ${prezime}.Osoba ima ${godine}god`);
}
imePrezime("Jelena", "Matejic", 29);
let imeOsobe = "Stefan";
let prezimeOsobe = "Stanimirovic";
let godineOsobe = 34;
imePrezime(imeOsobe, "Stanimirovic", godineOsobe);
imePrezime(30, "Milica", 1993); // pogresno - voditi racuna o redosledu argumenata

//////////////////////////////////////////////////////////
// funkcija kojoj vrsi sabiranje dva broja
/////////////////////////////////////////////////////////.

function zbir(br1, br2) {
  let rezultat = br1 + br2;
  console.log(`${br1} + ${br2} = ${rezultat}`);
}

zbir(16, 21);
let b1 = -10;
let b2 = 20;
zbir(b1, b2);
zbir(5 + 4, 50);
zbir(" Java", "Script"); // vodimo racuna sta prosledjujemo

//////////////////////////////////////////////////////////
// funkcija koja vraca vrednost
/////////////////////////////////////////////////////////.

function razlika(umanjenik, umanjilac) {
  let razlikaRezultat = umanjenik - umanjilac;
  return razlikaRezultat;
}
console.log(`Razlika je: ${razlika(60, 45)}`);
let r = razlika(100, 4);
console.log(`Funkcija vraca ${r}`);

let r1 = razlika(6, 3); // r1 = 3
let r2 = razlika(17, 7); // r2 = 10
let r3 = razlika(r1, r2); //r3 = -7
console.log(`Promenljiva r3 iznosi ${r3}`);
let r4 = razlika(razlika(40, 60), razlika(10, 4)); // razlika(-20, 6) = -26
console.log(`Promenljiva r4 iznosi ${r4}`);

//////////////////////////////////////////////////////////
// funkcija sa vise return-a
/////////////////////////////////////////////////////////.
function temperaturaVode(temp) {
  if (temp <= 0) {
    return "Voda se ledi";
  } else if (temp >= 100) {
    return "Voda isparava";
  } else {
    return "Voda je u tecnom agregatnom stanju";
  }
}
console.log(temperaturaVode(-5));
// temperaturaVode(-5);
let rezTempVode = temperaturaVode(114);
console.log(rezTempVode);

// drugi nacin

function temperaturaVode(temp) {
  let tekstZaIspis = "";
  if (temp <= 0) {
    tekstZaIspis = "Voda se ledi";
  } else if (temp >= 100) {
    tekstZaIspis = "Voda isparava";
  } else {
    tekstZaIspis = "Voda je u tecnom agregatnom stanju";
  }
  return tekstZaIspis;
}
console.log(temperaturaVode(50));

// 3 nacin
function temperaturaVode(temp) {
  let tekstZaIspis = "Voda je u tecnom agregatnom stanju";
  if (temp <= 0) {
    tekstZaIspis = "Voda se ledi";
  } else if (temp >= 100) {
    tekstZaIspis = "Voda isparava";
  }

  return tekstZaIspis;
}
console.log(temperaturaVode(-50));
let pTempVode = document.getElementById("tempVode");
pTempVode.innerHTML = temperaturaVode(100);

// 3 zadatak  Napisati funkciju neparan koja za uneti ceo broj n vraća tekst “Broj je neparan” ukoliko je u pitanju neparan broj ili vraća tekst “Broj je paran” ukoliko broj n nije neparan.

function neparan(n) {
  if (n % 2 == 0) {
    return "Broj je paran";
  } else {
    return "Broj je neparan";
  }
}
console.log(neparan(8));

// 4 zadatak
// Napisati funkciju maks2 koja vraća veći od dva prosleđena realna broja. Zatim napisati funkciju maks4 koja vraća najveći od četiri prosleđena realna broja.

function maks2(br1, br2) {
  if (br1 > br2) {
    return br1;
  } else {
    return br2;
  }
}
function maks4(a, b, c, d) {
  let veciPrvaDva = maks2(a, b);
  let veciDrugaDva = maks2(c, d);
  return maks2(veciPrvaDva, veciDrugaDva);
}
console.log(maks4(12, 20, 35, 7));

// drugi nacin

function maks4Function2(a, b, c, d) {
  return maks2(maks2(a, b), maks2(c, d));
}
console.log(maks4Function2(20, 11, 16, 18));

// 5 Napisati funkciju koja prikazuje sliku za prosledjenu adresu slike., tj putanju slike

function prikaziSliku(adresa) {
  document.write(`<img src="${adresa}">`);
}
prikaziSliku("computer.jpg");
prikaziSliku("laptop.jpg");

// 5 a kompleksniji  Napisati funkciju koja prikazuje sliku za prosledjenu adresu slike i prosledjen ID elementa, u kome ta slika treba da se prikaze

function prikaziSlikuUElementu(putanja, id) {
  let element = document.getElementById(id);
  element.innerHTML = `<img src="${putanja}">`;
}
prikaziSlikuUElementu("laptop.jpg", "slika1");

// 6 Napisati funkciju koja za unetu boju na engleskom jeziku boji tekst paragrafa u tu boju.

function oboji(boja) {
  document.write(
    `<p style="color: ${boja} ;">Ovako bojimo tekst preko funkcije </p>`
  );
}
oboji("blue");

// 7 Napisati program koji sadrži funkciju sedmiDan koja za uneti broj n u konzoli ispisuje n-ti dan u nedelji (npr. za 0 ispisuje “Nedelja”, za 1 se ispisuje „Ponedeljak“, za 2 se ispisuje „Utorak“, ... ,  a za 7 opet “Nedelja”).
// Pitanje: Kako bismo realizovali ovaj zadatak da se tražio n-ti mesec u godini?

function sedmiDan(n) {
  if (n % 7 == 0) {
    console.log(`Nedelja`);
  } else if (n % 7 == 1) {
    console.log(`Ponedeljak`);
  } else if (n % 7 == 2) {
    console.log(`Utorak`);
  } else if (n % 7 == 3) {
    console.log(`Sreda`);
  } else if (n % 7 == 4) {
    console.log(`Cetvrtak`);
  } else if (n % 7 == 5) {
    console.log(`Petak`);
  } else if (n % 7 == 6) {
    console.log(`Subota`);
  }
}
sedmiDan(6);

function dvanestiMesec(n) {
  if (n % 12 == 0) {
    console.log(`Decembar`);
  } else if (n % 12 == 1) {
    console.log(`Januar`);
  } else if (n % 12 == 2) {
    console.log(`Februar`);
  } else if (n % 12 == 3) {
    console.log(`Mart`);
  } else if (n % 12 == 4) {
    console.log(`April`);
  } else if (n % 12 == 5) {
    console.log(`Maj`);
  } else if (n % 12 == 6) {
    console.log(`Jun`);
  } else if (n % 12 == 7) {
    console.log(`Jul`);
  } else if (n % 12 == 8) {
    console.log(`Avgust`);
  } else if (n % 12 == 9) {
    console.log(`Septembar`);
  } else if (n % 12 == 10) {
    console.log(`Oktobar`);
  } else if (n % 12 == 11) {
    console.log(`Novembar`);
  }
}
dvanestiMesec(11);

//8 Napisati funkciju deljivSaTri koja se koristi u ispisivanju brojeva koji su deljivi sa tri u intervalu od n do m.
// Prebrojati koliko ima ovakvih brojeva od n do m.
function deljivSaTri(n, m) {
  let br = 0;
  for (let i = n; i <= m; i++) {
    if (i % 3 == 0) {
      console.log(`${i} je deljiv sa tri`);
      br++;
    }
  }
  console.log(`Ima ih ${br}`);
}
deljivSaTri(3, 15);

// 9  Napisati funkciju sumiraj koja određuje sumu i vraca sumu brojeva od n do m.
// Brojeve n i m proslediti kao parametre funkciji.
function sumiraj(n, m) {
  let suma = 0;
  for (i = n; i <= m; i++) {
    suma = suma + i;
  }
  return suma;
}

sumiraj(1, 4);
let rez = sumiraj(1, 4);
console.log(rez);

//10  Napisati funkciju množi koja određuje proizvod brojeva od n do m.
// Brojeve n i m proslediti kao parametre funkciji.

function mnozi(n, m) {
  let proizvod = 1;
  for (i = n; i <= m; i++) {
    proizvod = proizvod * i;
  }
  return proizvod;
}
console.log(mnozi(2, 6));

//11 Napraviti funkciju aritmeticka koja vraća aritmetičku sredinu brojeva od n do m.
// Brojeve n i m proslediti kao parametre funkciji.

function aritmeticka(n, m) {
  suma = 0;
  br = 0;
  for (i = n; i <= m; i++) {
    suma = suma + i;
    br++;
  }
  let arsr = suma / br;
  return arsr;
}
console.log(aritmeticka(2, 6));

//12 Napisati funkciju aritmetickaTri koja vraća aritmetičku sredinu brojeva kojima je poslednja cifra 3 u intervalu od n do m. Brojeve n i m proslediti kao parametre funkciji.
function aritmeticka3(n, m) {
  suma = 0;
  br = 0;
  for (i = n; i <= m; i++) {
    if (i % 10 === 3) {
      suma = suma + i;
      br++;
    }
  }
  let arsr = suma / br;
  return arsr;
}
aritmeticka3(5, 30);
let x = aritmeticka3(5, 30);
console.log(x);

//13 Napisati funkciju velicinaFonta kojoj se prosleđuje ceo broj a ona ispisuje tekst koji ima prosleđenu veličinu fonta.
function velicinaFonta(n) {
  document.write(
    `<p style="font-size: ${n}px ;">Tekstu definisana velicina preko funkcije </p>`
  );
}
velicinaFonta("50");

//14   Napisati funkciju recenica5 koja pet puta ispisuje istu rečenicu, a veličina fonta rečenice treba da bude jednaka vrednosti iteratora.

function recenica5() {
  for (let i = 15; i <= 20; i++) {
    document.write(
      `<p style="font-size: ${
        i * 2
      }px ;">Tekst velicine ${i}px, preko funkcije </p>`
    );
  }
}
recenica5();

// drugi nacin
function recenica5() {
  for (i = 1; i <= 5; i++) {
    document.write(`<h${i}>Neki tekst</h${i}>`);
  }
}
recenica5();

// 15 Dobili ste plaćenu programersku praksu u trajanju od n meseci. Prvog meseca, plata će biti a dinara, a ako budete vredno radili svakog narednog meseca ćete dobiti povišicu od d dinara. Brojeve n, a i d određujete sami.
//a) Napišite funkciju poslednjaPlata kojoj se prosleđuju brojevi n, a i d. Funkcija treba da vrati kolika će vam plata biti poslednjeg meseca prakse, ukoliko svakog meseca budete dobijali povišicu.
// Testirati zadatak (pozvati funkciju i ispisati vrednost koju ona vraća).
// b) Napišite funkciju ukupnaPlata kojoj se prosleđuju brojevi n, a i d. Funkcija treba da vrati vrednost koliko ćete ukupno navca zaraditi na praksi, ukoliko svakog meseca budete dobijali povišicu.
// Testirati zadatak (pozvati funkciju i ispisati vrednost koju ona vraća).

//a)
function poslednjaPlata(n, a, d) {
  // let n = 3; // meseci
  // let a = 50000; //plata 1. mesec
  // let d = 5000; //povisica
  let plata = a;
  let prvaPovisica = plata + d;
  let povisica = prvaPovisica * n - d;
  return povisica;
}
console.log(
  `Poslednja plata zaposlenog je ${poslednjaPlata(3, 50000, 5000)} dinara`
);

// drugi nacin
function poslednjaPlata(n, a, d) {
  let zadnjaPlata = a + (n - 1) * d;
  return zadnjaPlata;
}
console.log(`Poslednja plata zaposlenog je ${poslednjaPlata(4, 5, 1)} dinara`);

//b)
function ukupnaPlata(n, a, d) {
  let suma = 0;
  for (let i = 0; i < n; i++) {
    suma = suma + a + d * i;
  }
  return suma;
}
console.log(`Ukupna plata zaposlenog je ${ukupnaPlata(5, 10, 2)} dinara`);

// 15 zadtak drugi nacin

function poslednjaPlata(n, a, d) {
  return a + (n - 1) * d;
}
console.log(poslednjaPlata(6, 1000, 100));
function ukupnaPlata(n, a, d) {
  return ((a + poslednjaPlata(n, a, d)) / 2) * n;
}
console.log(ukupnaPlata(3, 1000, 100));

//15 zadatak treci nacin

function poslednjaPlata(n, a, d) {
  let plata = a;
  let povisica = 0;
  for (let i = 1; i <= n; i++) {
    povisica = povisica + d;
  }
  return plata + povisica;
}
console.log(poslednjaPlata(10, 1000, 50));
// Zadatak 15 pod B
function ukupnaPlata(n, a, d) {
  let plata = 0;
  let povisica = 0;
  for (let i = 1; i <= n; i++) {
    povisica = povisica + d;
    plata = plata + a + povisica;
  }
  return plata;
}
console.log(ukupnaPlata(10, 1000, 50));

// 16

// Na igrama bez granica, ekipi je postavljen zadatak da za što kraće vreme pređe stazu na kojoj se nalazi pokretni most. Takmičaru ove ekipe od polazne tačke do mosta treba t sekundi. Tačno p sekundi od kada takmičar može da krene sa polazne tačke (tj. od početka merenja) most počinje da se podiže. Ukoliko takmičar pre podizanja mosta kroči na most, zadržaće ga svojom težinom i most se neće podići tj. takmičar će moći nesmetano da pređe most. Od trenutka podizanja pa do spuštanja mosta protiče n sekundi i prelaz preko mosta za to vreme nije moguć. Nakon toga most ostaje spušten. Takmičari za čekanje kod mosta dobijaju negativne poene, pa je tim rešio da napravi program koji će im tačno odrediti u kojoj sekundi treba da pođu sa startne pozicije kako ne bi dobijali negativne poene. Pomozite timu da napravi funkciju na osnovu prosleđenih vrednosti t, p i n. Funkcija vraća koliko sekundi nakon početka merenja vremena treba da pođe, kako bi prošli poligon bez zaustavljanja.
// npr: t=15, p=20, n=25, čekanje je 0s
// npr: t=15, p=10, n=12, čekanje je 7s

function igraBezGranica(t, p, n) {
  if (t < p || t > p + n) {
    console.log(`Cekanje je 0s`);
  } else {
    let cekanje = p + n - t;
    console.log(`Takmicaru je potrebno da saceka ${cekanje}s`);
  }
}
igraBezGranica(15, 20, 25);
igraBezGranica(15, 10, 12);
