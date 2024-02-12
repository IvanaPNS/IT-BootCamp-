// Dohvatiti sve <li> elemente sa stranice.
// Svakom <li> elementu iz liste dodati Event Listener
// (Hint: proći petljom po listi <li> elemenata koje ste dohvatili i svakom od njih dodati Event Listener)
// Kada se klikne na <li> precrtati tekst
// u elementu na koji je kliknuto
// Kada se ponovo klikne na precrtani
// <li> element, „otprecrtati ga“

let liZadaci = document.querySelectorAll("li");
liZadaci.forEach((li) => {
  li.addEventListener("click", () => {
    // 1. način
    // if(li.style.textDecoration == "line-through") {
    //     li.style.textDecoration = "none";
    // } else {
    //     li.style.textDecoration = "line-through";
    // }

    // 2. način
    li.classList.toggle(`precrtaj`);
  });
});
