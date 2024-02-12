// 1. Dohvatiti element na koji želimo da postavimo osluškivač
let btnHello = document.getElementById("hello");

// 2. Postavimo osluškivač na element koji smo dohvatili
btnHello.addEventListener("click", () => {
  console.log("Hello!");
});

btnHello.addEventListener("dblclick", () => {
  console.log("Hello hello!!");
});

// 1. ZADATAK
// Napraviti dugme klikom na koje se u konzoli ispisuje vrednost brojača br.
// Brojač na početku ima vrednost 1, a svaki put kada se klikne na dugme povećati vrednost brojača za 1.

// 2 Napraviti paragraf i vrednost prethodne funkcije ispisivati u paragrafu umesto u konzoli.
let btnBroji = document.getElementById("broji");
let pIspisBroja = document.getElementById("ispisBroja");
let br = 1;
btnBroji.addEventListener("click", () => {
  console.log(`Broj je ${br}`);
  pIspisBroja.innerHTML = `Broj je ${br}`; // 2. ZADATAK
  br++;
});

//3.ZADATAK Napraviti dugme + i dugme -.
// Kada se klikne na dugme +, na ekranu prikazati vrednost brojača povećanu za 1.
// Kada se klikne na dugme -, na ekranu prikazati vrednost brojača smanjenu za 1.

// 4  Dopuniti prethodni zadatak uslovima, tako da se na ekranu prikazuju samo pozitivni brojevi. Ukoliko je vrednost manja od nule, na ekranu nastaviti prikazivanje broja 0.

let btnMinus = document.getElementById("minus");
let btnPlus = document.getElementById("plus");
let spanBrojac = document.getElementById("brojac");
let broj = 0;
spanBrojac.innerHTML = broj;
btnMinus.addEventListener("click", () => {
  broj--;
  if (broj < 0) {
    //4. zadatak
    broj = 0;
  }
  spanBrojac.innerHTML = broj;
});
btnPlus.addEventListener("click", () => {
  broj++;
  spanBrojac.innerHTML = broj;
});

// 5. ZADATAK
// Napraviti input polje i dugme.
// U input polje treba da se unese ime neke osobe, a na ekranu u paragrafu da se ispiše Zdravo i ime osobe preuzeto iz input polja.
let btnIspisiTekst = document.getElementById("ispisiTekst");
let pIspisTeksta = document.getElementById("ispisTeksta");
let inputTekst = document.getElementById("tekst");

btnIspisiTekst.addEventListener("click", () => {
  let preuzmiTekst = inputTekst.value;
  pIspisTeksta.innerHTML = `Zdravo ${preuzmiTekst}`;
});

// 6. ZADATAK
// Dopuniti 5. zadatak dodavanjem radio button polja gde korisnik može odabrati svoj pol (muški, ženski ili neopredeljen).
// Nakon duplog klika na dugme, u konzoli ispisati pol koji je osoba odabrala.
let radioMuski = document.getElementById("muski");
let radioZenski = document.getElementById("zenski");
let radioNeopredeljen = document.getElementById("neopredeljen");
btnIspisiTekst.addEventListener("dblclick", () => {
  // 1. NAČIN
  if (radioMuski.checked) {
    console.log("Osoba muškog pola");
  } else if (radioZenski.checked) {
    console.log("Osoba ženskog pola");
  } else {
    console.log("Osoba se nije opredelila");
  }

  // 2. NAČIN
  // Selektuj mi input polje, čiji atribut name ima vrednost 'pol' i pri tome je čekiran
  let checkedPol = document.querySelector("input[name='pol']:checked");
  console.log(`Osoba ${checkedPol.value} pola`);

  // 3. NAČIN
  // Selektuj mi sve radio button po name atributu - getElementByName
  let polRadios = document.getElementsByName("pol");
  polRadios.forEach((radioButton) => {
    if (radioButton.checked) {
      console.log(`Osoba ${radioButton.value} pola`);
    }
  });

  // 4. NAČIN
  // Slektuj mi sve radio button po name atributu - querySelectorAll
  let polRadiosInput = document.querySelectorAll("input[name='pol']");
  polRadiosInput.forEach((rb) => {
    if (rb.checked) {
      console.log(`Osoba ${rb.value} pola`);
    }
  });
});

// 7. ZADATAK Napraviti sledeću formu i rezultat računanja ispisati u paragrafu ispod nje.

let inputKvadrat = document.getElementById("kvadrat");
let inputPolovina = document.getElementById("polovina");
let inputPovrsina = document.getElementById("povrsina");
let btnKvadrat = document.getElementById("btnKvadrat");
let btnPolovina = document.getElementById("btnPolovina");
let btnPovrsina = document.getElementById("btnPovrsina");
let pKvadrat = document.getElementById("ispisKvadrat");
let pPolovina = document.getElementById("ispisPolovina");
let pPovrsina = document.getElementById("ispisPovrsina");
btnKvadrat.addEventListener("click", (e) => {
  let kvadrat = Math.pow(inputKvadrat.value, 2);
  pKvadrat.innerText = kvadrat;
  e.preventDefault();
});
btnPolovina.addEventListener("click", (e) => {
  let polovina = inputPolovina.value / 2;
  pPolovina.innerHTML = polovina;
  e.preventDefault();
});
btnPovrsina.addEventListener("click", (e) => {
  let povrsina = Math.pow(inputPovrsina.value, 2) * Math.PI;
  pPovrsina.innerHTML = povrsina;
  e.preventDefault();
});
