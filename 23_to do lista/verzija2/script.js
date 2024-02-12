// Kada korisnik unese tekstualni sadržaj u input polje,
// klikom na dugme dodaj, na kraj liste zadataka dodati novi <li> sa tekstualnim sadržajem preuzetim iz input polja:
//  I Nakon dodavanja zadatka, isprazniti input polje
//  II Onemogućiti korisniku da listi zadataka pošalje prazan string
// Kada se klikne na odgovarajući <li>, taj element treba da nestane sa stranice
// Hint: Posmatrati elemente kao u DOM stablu (dodavanje u DOM stablo i brisanje iz DOM stabla).

let liZadaci = document.querySelectorAll("li");
let btnDodaj = document.querySelector("#submit");
let inputZadatka = document.querySelector("#task");
let ulZadaci = document.querySelector("ul");

ulZadaci.addEventListener("click", (e) => {
  // console.log("Kliknuto na <ul>");
  // console.log(e);
  // console.log(e.target); // Ceo element na koji je kliknuto
  // console.log(e.target.tagName); // Tag na koji je kliknuto
  if (e.target.tagName == "LI") {
    // e.target.classList.toggle("precrtaj");
    e.target.remove();
  }
});

btnDodaj.addEventListener("click", (e) => {
  e.preventDefault();
  let tekstZadatka = inputZadatka.value;
  if (tekstZadatka.trim() != "") {
    let liNoviZadatak = document.createElement("li"); // Kreiram novi <li>
    liNoviZadatak.textContent = tekstZadatka; // Dodajemo tekst u <li> // ili .innerHTMl ili .textContent ili .innerText

    let radioDodaj = document.querySelector("input[name='add']:checked");
    console.log(radioDodaj, radioDodaj.value);
    if (radioDodaj.value == "end") {
      ulZadaci.appendChild(liNoviZadatak); // Dodajemo <li> na kraj <ul>
    } else {
      ulZadaci.prepend(liNoviZadatak); // Dodajemo <li> na pocetak <ul>
    }
  }

  inputZadatka.value = ""; /// Isprazni input polje
});
