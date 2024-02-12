class User {
  constructor(n, s, a) {
    this.name = n;
    this.surname = s;
    this.age = a;
  }
}
User.prototype.bojaKose = "crna";

let branko = new User("Branko", "Milivojevic", 27);
branko.grad = "Paracin";
// branko.potpis = function () {
//   console.log(this.name, this.surname);
// }; // dodavanje metode

// branko.potpis(); // pozivanje metode

let ivan = new User("Ivan", "Stanimirovic", 37);
ivan.poreklo = "Leskovac";
console.log(branko);
console.log(branko.bojaKose);

db.collection("users")
  .doc("cust04")
  .set(Object.assign({}, branko))
  .then(() => {
    console.log("Uspesno dodat user");
  })
  .catch((e) => {
    console.log(`Greska: ${e}`);
  });
db.collection("users")
  .doc("stanimirovic")
  .set(Object.assign({}, ivan))
  .then(() => {
    console.log("Uspesno dodat user");
  })
  .catch((e) => {
    console.log(`Greska: ${e}`);
  });

// db.collection("users")
//   .doc("cust04")
//   .set({
//     name: "Branko",
//     surname: "Milivoljevic",
//     age: 27,
//   })
//   .then(() => {
//     console.log("Uspesno dodat user");
//   })
//   .catch((e) => {
//     console.log(`Greska: ${e}`);
//   });

// js poziva set metedu kojoj se prosledjuje js OBJEKAT
// Na osnovu tog objekta se u bazi kreira novi DOKUMENT

/*
Js objekat
1)
*/
