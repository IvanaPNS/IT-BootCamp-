let x = 5; // pomocna promenljiva

//.............

let rezultat = x + 5; // promenljiva koja pamti rezultat

let racunaj = () => {
  // funkcija koja se trazi od mene
  console.log(rezultat + 10);
};

export { rezultat, racunaj };
