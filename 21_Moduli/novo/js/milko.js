let x = 4; // pomocna promenljiva
let y = 8; // pomocna promenljiva

//............

let rezultat = x + y; //promenljiva koja pamti rez

let racunaj = () => {
  document.body.innerHTML += `<p>${rezultat}</p>`;
};
racunaj();
