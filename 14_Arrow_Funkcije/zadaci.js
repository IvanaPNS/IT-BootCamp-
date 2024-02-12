// 3
// varijanta 1 - preko klasicnih funkcija

function neparan(n) {
  let x; // x - vazi u bloku u kom je definisan
  if (n % 2 == 1) {
    x = true;
  } else {
    x = false;
  }
  return x;
}

function neparan2(n) {
  if (n % 2 == 1) {
    var x = true;
  } else {
    var x = false; // var  x je dostupan unutar fukcije u kojoj je definisan
  }
  var x; // tacno ali besmisleno
  return x;
}

let p = 5;
console.log(neparan(p));
console.log(neparan2(p));

// var m = 9;

let neparan3 = (n) => {
  let x = false;
  if (n % 2 == 1) {
    x = true;
  }
  return x;
};

let neparan4 = (n) => {
  return n % 2 == 1 ? true : false; // ?: ternarni operator
};
console.log(neparan4(6));

let neparan5 = (n) => {
  return n % 2 == 1;
};
console.log(neparan5(8));

let neparan6 = (n) => n % 2 == 1;
console.log(neparan6(7));

let uvecajZaDva = (n) => (n += 2);
console.log(uvecajZaDva(9));

let radniDan = () => {
  let dan = new Date();
  let day = dan.getDay();
  if (day == 0 || day == 6) {
    return "Vikend je";
  } else {
    return "Radni dan";
  }
};
console.log(radniDan());
// alert(radniDan());
document.body.innerHTML += radniDan();

// 1 Napisati funkciju maks2 koja vraća veći od dva prosleđena realna broja. Zatim napisati funkciju maks4 koja vraća najveći od četiri prosleđena realna broja. U oba slučaja, brojevi su međusobno različiti.

let maks2 = (n, m) => (n > m ? n : m);

console.log(maks2(5, 7));

let maks4 = (a, b, c, d) => maks2(maks2(a, b), maks2(c, d));
// let m1 = maks2(a, b)
// let m2 = maks2(c,d)
// let m3 = maks2 (m1, m2)
// return m3

console.log(maks4(1, 8, 5, 9));

// 2 Napisati funkciju koja vraća sliku za prosledjenu adresu slike.
//Rezultat poziva iskoristiti da sliku prikažete u browseru.

let prikaziSliku = (putanja) => `<img src=" ${putanja}">`;
let div = document.getElementById("div");
div.innerHTML += prikaziSliku("computer.jpg");
// document.body.innerHTML += prikaziSliku("computer.jpg");

// Drugi zadatak izmenite na sledeći način:
// Funkcija se ne menja. Samo u html fajlu, unutar body taga, dodajte div sa pozadinskom plavom bojom, i neka sadrži neki tekst. Onda u javascriptu pozovite ovu funkciju, i njen rezultat dodatje u div tag (znači da u div tagu ostane tekst, samo da se doda sličica posle teksta).
let slikaOkvir = (adresa, boja) =>
  `<img src="${adresa}" style="border: 3px solid ${boja}">`;

let slika = document.getElementById("slika");
slika.innerHTML = slikaOkvir(
  "https://www.breatheazy.co.uk/wp-content/uploads/2023/09/Untitled-design-35-1080x675.png",
  "pink"
);
