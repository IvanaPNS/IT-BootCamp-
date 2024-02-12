// DOM  Simulacija kalkulatora:
// Napraviti dva input polja za unos dva broja.
// Napraviti 4 radio button polja koja predstavljaju 4 aritmetičke operacije (sabiranje, oduzimanje, množenje i deljenje).
// Napraviti paragraf u kome će se ispisivati rezultat računanja u formatu
// operand1 operacija operand2 = rezultat

let inputNumber1 = document.getElementById("br1");
let inputNumber2 = document.getElementById("br2");
let btnRacunaj = document.getElementById("racunaj");
let btnResetuj = document.getElementById("resetuj");
let pRezultat = document.getElementById("rezultat");

btnRacunaj.addEventListener("click", (e) => {
  e.preventDefault();
  let br1 = Number(inputNumber1.value);
  let br2 = Number(inputNumber2.value);
  let inputOperacija = document.querySelector(
    "input[name='operacija']:checked"
  );
  let rez = 0;
  let operacija = inputOperacija.value;
  let o = "";

  if (operacija == "sabiranje") {
    rez = br1 + br2;
    o = "+";
  } else if (operacija == "oduzimanje") {
    rez = br1 - br2;
    o = "-";
  } else if (operacija == "mnozenje") {
    rez = br1 * br2;
    o = "*";
  } else {
    o = "/";
    if (br2 === 0) {
      alert("Nije dozvoljeno deliti nulom");
      return;
    } else {
      rez = br1 / br2;
    }
  }

  pRezultat.innerHTML = `${br1} ${o} ${br2} = ${rez}`;
});

btnResetuj.addEventListener("click", () => {
  pRezultat.innerHTML = "";
});
