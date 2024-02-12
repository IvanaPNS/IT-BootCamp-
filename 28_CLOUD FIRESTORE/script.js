const customers = "customers";

console.log(db);

let users = db.collection("users");
console.log(users);

let d1 = users.doc("ppetrovic");
console.log(d1);
let d2 = db.doc("users/npetrovic");
console.log(d2);

/*
CRUD - Create, Read, Update, Delete 
Za pristup dokumentu :
let doc = db.collection
*/

/* 1. Create(set)*/
let cust1 = {
  Name: "Mika",
  Age: 38,
  Adrresses: ["Vladimira Nikolica", "Novi Sad"],
  Salary: 400.6,
}; // js na osnovu njega kreiramo dokument u bazi
db.collection("customers")
  .doc("cust1")
  .set(cust1)
  .then(() => {
    document.body.innerHTML += "Korisnik dodat u bazu";
  })
  .catch((err) => {
    document.body.innerHTML += `Greska${err}`;
  });

db.collection(customers)
  .doc()
  .set({
    name: "Zika",
    age: 22,
    addresses: ["Nis"],
    salary: 600,
  })
  .then(() => {
    document.body.innerHTML += "Korisnik dodat u bazu";
  })
  .catch((err) => {
    document.body.innerHTML += `Greska${err}`;
  });
