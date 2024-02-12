//Svim parnim paragrafima na stranici dodati klasu error, a svim neparnim paragrafima dodati klasu success
let paragrafi = document.querySelectorAll("p").forEach((p, i) => {
  if (i % 2 == 0) {
    p.classList.add("error");
  } else {
    p.classList.add("success");
  }
});

//Tekst u paragrafima naizmenično pisati veličinom 15px, veličinom 20px i veličinom od 25px.
// for (let i = 15; i < paragrafi.left; i += 5) {
//   paragrafi.style.fontSize = "i";
// }
//Svim paragrafima čiji tekst sadrži reč error, postaviti klasu na error, svim paragrafima čiji tekst sadrži reč success, postaviti klasu na success. Ostale klase paragrafa ne modifikovati.
//  if(p.textContent.includes(’success’))

// Svim paragrafima koji imaju klasu error skloniti tu klasu, a svim paragrafima koji nemaju klasu error dodati tu klasu.

let paragraf = document.querySelectorAll("p");
paragraf.forEach((p, broj) => {
  if (broj % 2 == 0) {
    p.classList.add("error");
  } else {
    p.classList.add("sucess");
  }
  if (broj % 3 == 0) {
    p.style.fontSize = "15px";
  } else if (broj % 3 == 1) {
    p.style.fontSize = "25px";
  } else {
    p.style.fontSize = "35px";
  }
  p.style.maxWidth = "50%";
  if (p.textContent.includes("sucess")) {
    p.classList.add("sucess");
  } else if (p.textContent.includes("error")) {
    p.classList.add("error");
  }
  p.classList.toggle("error");
});

// dodati novi div tag dokumentu
let noviDiv = document.createElement("div");
noviDiv.innerHTML = "Div kreiran u JS-u";
noviDiv.style.backgroundColor = "green";
document.body.appendChild(noviDiv);

let noviNaslov = document.createElement("h3");
noviNaslov.innerHTML = "Novi naslov";
noviDiv.appendChild(noviNaslov); // dodajemo mu novi naslov novom divu

//Formirati ul listu sa stavkama čiji je sadržaj proizvoljan tekst, i dodati je div elementu.
let lista = document.createElement("ul");
noviDiv.append(lista);

let li1 = document.createElement("li");
li1.innerHTML = "Prva stavka liste";
let li2 = document.createElement("li");
li2.innerHTML = "Druga stavka liste";
let li3 = document.createElement("li");
li3.innerHTML = "Treca stavka liste";

lista.append(li1, li2, li3);

// Iz ul liste izbaciti prvu stavku.
// lista.removeChild(li1);
// lista.removeChild(lista.childNodes[0]);
lista.removeChild(lista.firstChild);

//U ul listi zameniti drugu stavku liste.

let li4 = document.createElement("li");
li4.innerHTML = "Cetvrta stavka liste, zamenska za li3";

lista.replaceChild(li4, li3);

// Dodati još jednu stavku ul listi, pri čemu je sadržaj stavke slika.

let li5 = document.createElement("li");
lista.appendChild(li5);
let slika = document.createElement("img");
slika.src = "slika.jpg";
slika.alt = "neka slika";
li5.appendChild(slika);
