//1 zadatak

function bmi(tezina, visina) {
  let formula = tezina / visina ** 2;
  console.log(formula);
  return formula;
}
const rezultat = bmi(100, 1.82);
if (rezultat <= 18.5) {
  console.log("Pothranjen");
} else if (rezultat > 18.5 && rezultat < 24.9) {
  console.log("normalna tezina");
} else if (rezultat >= 24.9 && rezultat <= 30) {
  console.log("povisena tezina");
} else if (rezultat > 30) {
  console.log("Gojaznost");
}

//2 zadatak
function nutri(tezinaT, tezinaZ) {
  let brU = 0;
  let brS = 0;
  if (tezinaT < tezinaZ) {
    while (tezinaT < tezinaZ) {
      tezinaT = tezinaT * 1.1;
      brU++;
    }
    return brU;
  } else {
    while (tezinaT > tezinaZ) {
      tezinaT = tezinaT - tezinaT * 0.02;
      brS++;
    }
    return brS;
  }
}
console.log(nutri(70, 80));
