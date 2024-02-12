let datum = new Date();
let dan = datum.getDay();
let sati = datum.getHours();
let min = datum.getMinutes();
let vreme = `${sati} : ${min}`;

let nedelja = [
  "nedelja",
  "ponedeljak",
  "utorak",
  "sreda",
  "cetvrtak",
  "petak",
  "subota",
];

let heder = document.getElementById("heder");

if (dan == 0 || dan == 6) {
  heder.innerHTML = `Odmarate?
ITBootcamp vam nudi mogućnost da stičete nove veštine  ${vreme}`;
} else {
  heder.innerHTML = `Radite?
ITBootcamp vam nudi mogućnost da stičete nove veštine  ${nedelja[dan]}`;
}
