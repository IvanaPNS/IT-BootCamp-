let mojaFunkcija = (callback) => {
  callback();
};
mojaFunkcija(() => {
  console.log("CallBack funkcija okidanje");
});

/////////////////
let sabiranje = (funkcija) => {
  funkcija(4, 5);
};
// 1. nacin
sabiranje((a, b) => {
  console.log(a + b);
});

//2. nacin
function stampajSumu(x, y) {
  console.log(x + y);
}
sabiranje(stampajSumu); //pozivam stampaj sumu funkciju bez zagrada

/////////////////////////////////////////

let oduzimanje = (funkcija) => {
  let razlika = funkcija(100, 30);
  console.log(razlika);
};
oduzimanje((a, b) => {
  return a - b;
});

let racunaj = (funkcija) => {
  let razlika = funkcija(100, 30);
  console.log(razlika);
};
racunaj((a, b) => {
  return a - b;
});
racunaj((a, b) => {
  return a * b;
});

function mojForEach(niz, br, callback) {
  for (let i = 0; i < niz.length; i++) {
    // console.log(niz[i]);s
    callback(niz[i], br);
  }
}
let niz1 = [1, 2, 3, 4, 5, 6, 7];
mojForEach(niz1, 5, (el, br) => {
  console.log(el * br);
});

////
// let puta2 = (el) => {
//   console.log(el * 2);
// };
// mojForEach(niz1, puta2);
let putaBr = (el, br) => {
  console.log(el * br);
};
mojForEach(niz1, 8, putaBr);
