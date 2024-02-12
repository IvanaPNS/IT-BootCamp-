// klasicne (imenovane) funkcije

function sum(a, b) {
  return a + b;
}
let rez = sum(1, 2); //poziv funkcije (po imenu iza koga se navode argumenti)
console.log(rez);

// Anonimne funkcije - funkcije bez imena

let suma = function (a, b) {
  //   console.log(this);
  return a + b;
};

console.log(suma(1, 2)); // poziv anonimne funkcije

// arrow funkcije (= anonimne funcije koje imaju dva specificna svojstva)

// 1) imaju skracen zapis
// 2) znacenje kljucne reci this

let suma2 = (a, b) => {
  //   console.log(this);
  return a + b;
};

console.log(suma2(1, 2)); // poziv arrow f-je isto kao i kod anonimne f-je

let hello = () => {
  console.log("Hello world");
};
hello();
hello();

let echo = (s1, s2) => {
  let result = s1 + ", " + s2;
  console.log(result);
};
echo("Stefan", "Stanimirovic");
echo("Jelena", "Matejic");

let m = 19;
