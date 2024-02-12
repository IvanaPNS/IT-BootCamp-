// Pamcenje/Upisivanje/Smestanje u lokalnoj memoriji
localStorage.setItem("Ime", "Stefan");
localStorage.setItem("Grad", "Nis");

// Izmena/Update u lokalnoj memoriji
localStorage.setItem("Grad", "Leskovac");

// Ukoliko postoji neki key onda vrsi Update
//Ukoliko ne postoji neki key u LS onda vrsi upis(novi unos)

//Preuzimanje iz lokalne memorije
let unetoIme = localStorage.getItem("Ime");
console.log(unetoIme);
console.log(localStorage.getItem("Grad"));

console.log(localStorage.getItem("godina")); // Vraca null jer kljuc(key) godine ne postoji u LS
localStorage.removeItem("Grad"); // Brize iz memporije po zadatom kljucu
