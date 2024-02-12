// zadatak 4
// Dat je niz u kojem su smešteni odgovarajući letovi koji polaze sa nekog aerodroma u toku jednog dana. Svaki element tog niza odgovara jednom letu, pri čemu se za svaki let pamti destinacija (string, grad u koji avion sleće), država u kojoj se taj grad nalazi (takođe string), kao i vreme poletanja aviona sa aerodroma (string u formatu “hh:mm”), vreme sletanja aviona na destinaciju (string u formatu “hh:mm”). U ovom zadatku, može se desiti da sa aerodroma poleće više letova ka istoj destinaciji.
// Kreirati niz letova, pri čemu je svaki element tog niza jedan objekat.
// Napisati funkciju brojLetovaZaZemlju kojoj se prosleđuju niz letova, kao i zemlja, a funkcija vraća broj letova do date zemlje.
// Napisati funkciju visePrePodne kojoj se prosleđuje niz letova, a određuje da li je bilo više letova pre podne ili posle podne. Ukoliko je bilo više letova pre podne, vratiti true, a u suportnom, vratiti false.
// Napisati funkciju ispisLetovaDoSada kojoj se prosleđuje niz letova, kao i zemlja, a koja ispisuje sve letove koji su poleteli do trenutnog vremena (vreme preuzeti sa računara).
// Neke zemlje su označene kao crvene, jer je u njima nepovoljna epidemiološka situacija. Napisati funkciju rizicniLetovi kojoj se prosleđuju niz letova, kao i niz zemalja, a koja ispisuje u paragrafima čiji je tekst obojen crvenom bojom. U svakom paragrafu ispisati informacije o onim letovima koji kao destinaciju imaju zemlju iz crvene zone.
// Neka destinacija je tražena ukoliko postoji više letova u toku dana za tu destinaciju. Napisati funkciju trazeneDestinacije kojoj se prosleđuje niz letova, a koja ispisuje sve tražene destinacije (ukoliko postoje).
// Napisati funkciju prosecanBrojLetovaZaZemlju kojoj se prosleđuje niz letova, a koja vraća prosečan broj letova ka svekoj od zemalja koje se pojavljuju u prosleđenom nizu.

let let1 = {
  destinacija: "Barselona",
  drzava: "Spanija",
  vremePoletenja: "09:25",
  vremeSletanja: "12:45",
};
let let2 = {
  destinacija: "Minhen",
  drzava: "Nemacka",
  vremePoletenja: "11:15",
  vremeSletanja: "14:45",
};
let let3 = {
  destinacija: "Tokio",
  drzava: "Japan",
  vremePoletenja: "06:25",
  vremeSletanja: "19:45",
};
let let4 = {
  destinacija: "New York",
  drzava: "Amerika",
  vremePoletenja: "12:40",
  vremeSletanja: "22:45",
};
let let5 = {
  destinacija: "Denver",
  drzava: "Amerika",
  vremePoletenja: "09:40",
  vremeSletanja: "21:45",
};
let letovi = [let1, let2, let3, let4, let5];
// a)Napisati funkciju brojLetovaZaZemlju kojoj se prosleđuju niz letova, kao i zemlja, a funkcija vraća broj letova do date zemlje.
function brojLetovaZaZemlju(niz, zemlja) {
  let brojacLetova = 0;
  niz.forEach((el) => {
    if (el.drzava == zemlja) {
      brojacLetova++;
    }
  });
  return brojacLetova;
}
console.log(brojLetovaZaZemlju(letovi, "Amerika"));
/* b) Napisati funkciju visePrePodne kojoj se prosleđuje niz letova, a određuje da li je bilo više letova pre podne ili posle podne. Ukoliko je bilo više letova pre podne, vratiti true, a u suportnom, vratiti false. */
function visePrePodne(niz) {
  let prePodne = 0;
  niz.forEach((el) => {
    let sati = Number(el.vremePoletenja.split(":")[0]);
    console.log(sati);
    if (sati < 12) {
      prePodne++;
    }
  });
  return prePodne > niz.length - prePodne;
}
console.log(visePrePodne(letovi));
//c) Napisati funkciju ispisLetovaDoSada kojoj se prosleđuje niz letova, kao i zemlja, a koja ispisuje sve letove koji su poleteli do trenutnog vremena (vreme preuzeti sa računara).
let datum = new Date();
let sati = datum.getHours();
let minuti = datum.getMinutes();
function ispisLetovaDoSada(niz, zemlja) {
  niz.forEach((el) => {
    let satiLeta = Number(el.vremePoletenja.split(":")[0]);
    let minutiLeta = Number(el.vremePoletenja.split(":")[1]);
    if (el.drzava == zemlja) {
      if (satiLeta < sati) {
        console.log(el);
      } else if (satiLeta == sati && minutiLeta < minuti) {
        console.log(el);
      }
    }
  });
}
ispisLetovaDoSada(letovi, "Amerika");
//d) /* Neke zemlje su označene kao crvene, jer je u njima nepovoljna epidemiološka situacija. Napisati funkciju rizicniLetovi kojoj se prosleđuju niz letova, kao i niz zemalja, a koja ispisuje u paragrafima čiji je tekst obojen crvenom bojom. U svakom paragrafu ispisati informacije o onim letovima koji kao destinaciju imaju zemlju iz crvene zone.*/
let zemlje = ["Amerika", "Spanija"];
function rizicniLetovi(niz, niz2) {
  let p = document.createElement("p");
  niz.forEach((el) => {
    niz2.forEach((el2) => {
      if (el.drzava == el2) {
        p.innerHTML += `${el.destinacija} ${el.vremePoletenja} <br>`;
        p.style.color = "red";
      }
    });
  });
  document.body.appendChild(p);
}
rizicniLetovi(letovi, zemlje);
/*e) Neka destinacija je tražena ukoliko postoji više letova u toku dana za tu destinaciju. Napisati funkciju trazeneDestinacije kojoj se prosleđuje niz letova, a koja ispisuje sve tražene destinacije (ukoliko postoje). */
let trazeneDestinacije = (niz) => {
  for (let i = 0; i < niz.length; i++) {
    let br = 0;
    let zemlja = niz[i];
    for (let j = 0; j < niz.length; j++) {
      if (zemlja.drzava == niz[j].drzava) {
        br++;
      }
    }
    if (br > 1) {
      console.log(zemlja);
    }
  }
  // let trazeneDestinacije = (niz) => {
  //   let destinacije = [];
  //   for (let i = 0; i < niz.length; i++) {
  //     let br = 0;
  //     let zemlja = niz[i];
  //     if (destinacije.includes(zemlja.drzava)) {
  //       continue;
  //     }
  //     for (let j = 0; j < niz.length; j++) {
  //       if (zemlja.drzava == niz[j].drzava) {
  //         br++;
  //       }
  //     }
  //     if (br > 1) {
  //       console.log(zemlja.destinacija);
  //       destinacije.push(zemlja.drzava);
  //     }
  //   }
  // };
  // trazeneDestinacije(letovi);
};
trazeneDestinacije(letovi);

/*f) Napisati funkciju prosecanBrojLetovaZaZemlju kojoj se prosleđuje niz letova, a koja vraća prosečan broj letova ka svekoj od zemalja koje se pojavljuju u prosleđenom nizu. */
let prosecanBrojLetovaZaZemlju = (niz) => {
  for (let i = 0; i < niz.length; i++) {
    let br = 0;
    let zemlja = niz[i];
    for (let j = 0; j < niz.length; j++) {
      if (zemlja.drzava == niz[j].drzava) {
        br++;
      }
    }
    console.log(
      `Prosecan broj letova za ${zemlja.drzava} je ${br / niz.length}`
    );
  }
};
prosecanBrojLetovaZaZemlju(letovi);

// let prosecanBrojLetovaZaZemlju = (niz) => {
//   let destinacije = [];
//   for (let i = 0; i < niz.length; i++) {
//     let br = 0;
//     let zemlja = niz[i];
//     if (destinacije.includes(zemlja.drzava)) {
//       continue;
//     }
//     for (let j = 0; j < niz.length; j++) {
//       if (zemlja.drzava == niz[j].drzava) {
//         br++;
//       }
//     }
//     console.log(
//       `Prosecan broj letova za ${zemlja.drzava} je ${br / niz.length}`
//     );
//     destinacije.push(zemlja.drzava);
//   }
// };
// prosecanBrojLetovaZaZemlju(letovi);
//////////////////////////////////////////////////////////////////////////////
