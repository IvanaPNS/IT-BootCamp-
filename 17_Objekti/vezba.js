let pitanja = [
  {
    tekst: "Koji uredjaj ima prikljucak za slusalice?",
    odgovori: ["Stampac", "Skener", "Zvucna kartica", "Video kartica"],
    indexT: 2,
  },
  {
    tekst: "Izbaci uljeza",
    odgovori: ["JPG", "PNG", "JPEG", "MP4"],
    indexT: 3,
  },
  {
    tekst: "Linux je:",
    odgovori: [
      "Operativni sistem",
      "Komponenta ", //Window operativnih sistema
      "Komponenta Microsoft Office",
      "Masinski programski jezik",
    ],
    indexT: 0,
  },
  {
    tekst: "Izbaci uljeza?",
    odgovori: ["If", "While", "for", "forEach"],
    indexT: 0,
  },
  {
    tekst: "Sta znaci skracenica PC?",
    odgovori: [
      "Personalni racunar",
      "Mainframe racunar za jednog korisnika",
      "Racunar",
      "Mikroracunar",
    ],
    indexT: 0,
  },
  {
    tekst: "Koliko bita sadrzi 1 bajt?",
    odgovori: ["1", "8", "16 ", "32"],
    indexT: 1,
  },
  {
    tekst: "Funkcija Word Office?",
    odgovori: [
      "Kalkulacije",
      "Obrada slika",
      "Obrada zvuka",
      "Obrada videa",
      "Rad sa tekstom",
    ],
    indexT: 4,
  },
  {
    tekst: "Cemu sluzi CSS?",
    odgovori: [
      "Generisanje HTML stranica",
      "Izgled HTML dokumenta",
      "Konekcija sa serverom",
      "Obrada videa",
    ],
    indexT: 1,
  },
  {
    tekst: "Sta je HTML?",
    odgovori: [
      "HyperText Markup Language",
      "Organizacija podataka",
      "Kolekcija objekata",
      "Softver za obradu teksta",
      "Softver za obradu slika",
    ],
    indexT: 0,
  },
  {
    tekst: "Koji je najbolji klub svih vremena?",
    odgovori: ["Zvezda", "Radnicki", "Partizan", "Real Madrid"],
    indexT: 2,
  },
];

function generisiPitanje(pitanje, brPitanja) {
  let box = document.createElement("div");
  let h3 = document.createElement("h3");
  h3.innerHTML = `${brPitanja} ${pitanje.tekst}`;
  box.classList.add("form");
  let form = document.getElementById("form");
  box.appendChild(h3);
  form.appendChild(box);

  pitanje.odgovori.forEach((odgovor, index) => {
    let div = document.createElement("div");
    let label = document.createElement("label");
    let input = document.createElement("input");
    let id = Math.random() * 100;
    input.setAttribute("type", "radio");
    input.setAttribute("id", id);
    input.setAttribute("name", `${brPitanja}odgovor`);
    label.setAttribute("for", id);
    label.innerHTML = odgovor;
    div.appendChild(input);
    div.appendChild(label);
    box.appendChild(div);
    if (index == 0) {
      input.checked = true;
    }
    if (index == pitanje.indexT) {
      input.setAttribute("value", true);
    }
  });
}

let paragraf = document.createElement("p");
let prikaziResenje = document.getElementById("resenje");
let btnPosaljiOdgovore = document.getElementById("posaljiOdgovore");

// let btnNovaPitanja = document.getElementById("novaPitanja");
// btnNovaPitanja.addEventListener("click", (e) => {
//   shuffleArray(pitanja);
// });

function shuffleArray(array) {
  let currentIndex = array.length;
  let temporaryValue, randomIndex;
  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
}
let rendomPitanja = shuffleArray(pitanja);
const brPitanja = 5;
for (let i = 0; i < brPitanja; i++) {
  generisiPitanje(rendomPitanja[i], i + 1);
}

btnPosaljiOdgovore.addEventListener("click", (e) => {
  e.preventDefault();
  for (let index = 0; index < brPitanja; index++) {
    let radioBtn = document.getElementsByName(`${index + 1}odgovor`);
    radioBtn.forEach((el, i) => {
      if (el.checked) {
        if (el.value == "true") {
          paragraf.innerHTML += `<br><span style="color: green;">Tacno ste odgovorili na ${
            index + 1
          } . pitanje</span>`;
          prikaziResenje.appendChild(paragraf);
        } else {
          paragraf.innerHTML += ` <br> <span style="color: red;">Ne tacno ste odgovorili na ${
            index + 1
          }. pitanje</span> `;
          prikaziResenje.appendChild(paragraf);
        }
      } else {
        el.disabled = true;
      }
    });
  }
});
