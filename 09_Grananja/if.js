console.log("IF");

let x = 3;
let y = 3;

if (x == y) {
  console.log("Vrednosti promenljivih x i y su jednake");
  console.log("Vrednosti promenljivih " + x + " i " + y + " su jednake");
  console.log("Vrednosti promenljivih ", x, " i ", y, " su jednake");
  console.log(`Vrednosti promenljivih ${x} i ${y} su jednake`);
}
console.log("Komanda ispod if grane");

let a = 4;
let b = "4";
if (a == b) {
  console.log(`Vrednosti a i y su jednake po vrednosti`);
}
if (a === b) {
  console.log(`Vrednosti a i b su jednake i po tipu i po vrednosti`);
}
if (a !== b) {
  console.log(`Vrednosti a i b su razlicite bilo po tipu bilo po vrednosti`);
}

