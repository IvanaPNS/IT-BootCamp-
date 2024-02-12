console.log(document); // document je objekat, sam po sebi(koren DOM stabla)
console.log(document.body); // body svojstvo document objekta je objekat

let e1 = document.getElementById("p2");
console.log(e1); // objekat iz DOM stabla

let el2 = document.getElementsByClassName("par");
console.log(el2); // HTML kolekcija objekata iz DOM stabla

// Pristup elementima HTML kolekcije
for (let i = 0; i < el2.length; i++) {
  console.log(el2[i]);
}

// HTML kolekcije ne poseduju forEach petlju
// ** ovo ne moze
// el2.forEach((element) => {
//   console.log(el);
// });
// **

let niz = Array.from(el2);
niz.forEach((el) => {
  console.log(el);
});

let el3 = document.getElementsByTagName("img"); // vraca HTML kolekciju
console.log(el3);

let el4 = document.getElementsByName("p");
console.log(el4); // Vraca NodeList
el4.forEach((el) => {
  console.log(el);
});
console.log(el4[0]);

// Array (forEach), HTMLCollection, NodeList (forEach)

let t1 = document.querySelector("#p2");
console.log(t1);

let t2 = document.querySelector(".par"); // Vraca objekat iz DOM stabla
console.log(t2);

let t3 = document.querySelectorAll(".par"); //Vraca NoodListu
console.log(t3);

t3.forEach((el) => {
  console.log(el);
});
let t4 = document.querySelectorAll("div p.par, div a.par");
console.log(t4);
////
let t5 = document.getElementsByClassName("par");
for (let i = 0; i < t5.length; i++) {
  console.log(t5[0]);
}
///
let d1 = document.querySelector("div.error");
console.log(d1);
////
let tab1 = document.querySelector("table tr:last-child");
console.log(tab1);
///
let link = document.querySelectorAll("a");
link.forEach((link1) => {
  link1.style.color = "red";
  link1.style.fontSize = "18px";
  link1.style.textDecoration = "none";
  //   link1.setAttribute(
  //     "style",
  //     "color: red; font-size:35 px, text-decoration: none;"
  //   );
});
console.log(link);
///
let img1 = document.getElementsByTagName("img");
console.log(img1);

let link1 = document.querySelector("a");
link1.innerHTML =
  "<span style ='font-weight: bold'>Novi text</span> prvog linka";
// link1.href = "https://www.google.com";
link1.setAttribute("href", "http://www.google.com");
// link1.target = "_blank";
link1.setAttribute("target", "_blank");
link1.id = "pera";

// link1.style.color = "red";
// link1.style.fontSize = "18px";
// link1.style.textDecoration = "none";

let paragrafi = document.querySelectorAll("p");
paragrafi.forEach((el) => {
  el.innerHTML += " Vazno!!!";
});
// par.innerHTML = "VAZNO";

/////
// let d3 = document.getElementsByClassName("error");
// // console.log(d3);
// for (let i = 0; i < d3.length; i++) {
//   let naslov = document.createElement("h1");
//   naslov.innerHTML = "Greska";
//   d3[i].appendChild(naslov);
// }

// d3.forEach((d) => {
//   d.innerHTML += `<h1>Greska</h1>`;
//   d.style.color = "red";
// });

// d3.setAttribute("h1", "Greska");
///
// let n = document.querySelectorAll("p")
// for()
//
for (let i = 0; i < paragrafi.length; i++) {
  paragrafi[i].innerHTML += `${i ** 2}`;
}
//
let slike = document.getElementsByTagName("img");
for (let i = 0; i < slike.length; i++) {
  slike[i].setAttribute("alt", "alternativni text");
}

// slike.alt="neki text"
//
// for (let i = 0; i < paragrafi.length; i++) {
// paragrafi.forEach((el) => {

// })
//7.
//Selektovati sve paragrafe i u svakom od njih pridodati tekst VAZNO!
let sviparagrafi = document.querySelectorAll("p");
sviparagrafi.forEach((par) => {
  par.innerHTML += `VAZNO!!!`;
});
//8.
/*Svim divovima na stranici sa klasom "error", dodati po jedan naslov najvece velicine
sa tekstom GRESKA */
let divE = document.querySelectorAll("div.error"); //Nodlista i moze preko forEach petlje
divE.forEach((div) => {
  div.innerHTML += `<h1>GRESKA!</h1>`;
  div.style.color = "red";
});
// 9.
/* Neka je n broj paragrafa u datm dokumentu. U svakom i-tom paragrafu dodati broj i
na kvadrat, za svako i = 1, 2, ...n. */
let paragrafN = document.querySelectorAll("p");
paragrafN.forEach((e, index) => {
  let kv = (index + 1) * (index + 1);
  e.innerHTML += `${index + 1}<sup>2</sup> = ${kv}`;
});
//10.
/*Svim slikama dodati alternativni tekst*/
let sveSlike = document.querySelectorAll("img");
sveSlike.forEach((sl) => {
  //sl.setAttribute("alt" , "TEKST")
  sl.alt = "Neki TEKST";
});
//11.
/* Svim paragrafima posaviti atribut style tako da bude obojen ljubicastom bojom*/
let ljubicasti = document.querySelectorAll("p");
ljubicasti.forEach((p) => {
  p.style.color = "purple";
});
//12
for (let i = 0; i < paragrafi.length; i++) {
  if (i % 2 === 1) {
    paragrafi[i].style.backgroundColor = "green";
  } else {
    paragrafi[i].style.backgroundColor = "red";
  }
}

// Svim linkovima na stranici postaviti padding na 5px, font size na 18px i text-decoration na none.
// Parnim linkovima staviti zelenu pozadinsku boju i ljubicastu boju teksta, a neparnim linkovima plavu pozadinsku boju i belu boju teksta.
let linkovi = document.querySelectorAll("a");
linkovi.forEach((l, i) => {
  l.style.padding = "5px";
  l.style.fontSize = "18px";
  l.style.textDecoration = "none";
  if (i % 2 == 0) {
    l.style.backgroundColor = "green";
    l.style.color = "purple";
  } else {
    l.style.backgroundColor = "blue";
    l.style.color = "white";
  }
});

// SEDMA VEZBA
document.querySelectorAll(`a`).forEach((a) => {
  a.style.padding = `5px`;
  a.style.fontSize = `18px`;
  a.style.textDecoration = `none`;
});
document.querySelectorAll(`a:nth-child(even)`).forEach((a) => {
  a.style.backgroundColor = `green`;
  a.style.color = `red`;
});
document.querySelectorAll(`a:nth-child(odd)`).forEach((a) => {
  a.style.backgroundColor = `blue`;
  a.style.color = `white`;
});
// OSMA VEZBA
document.querySelectorAll(`img`).forEach((img) => {
  if (img.src.endsWith(`.jpg`)) {
    img.style.border = `2px solid blue`;
  }
});
// OSMA drugi nacin
document.querySelectorAll(`img[src$=".jpg"]`).forEach((img) => {
  img.style.border = `22px solid green`;
});
// DEVETA VEZBA
document.querySelectorAll(`a`).forEach((a) => {
  if (a.target == `_blank`) {
    a.target = `_top`;
  } else {
    a.target = `_blank`;
  }
});

let div = e1.parentNode;
console.log(div);
console.log(div.childNodes);
console.log(div.childNodes[1]);

div.childNodes.forEach((el) => {
  let tip = el.nodeName;
  if (tip != "#text") {
    // if (tip =="P" || tip == "A")
    console.log(el);
  }
});
