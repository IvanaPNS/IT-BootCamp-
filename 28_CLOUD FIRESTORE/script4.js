//dohvatanje dokumenata iz kolekcije, po redosledu polja
//(dokument mora da sadrzi to polje da bi ga dohvatili)
//(ako ima vise od jednog polja neophodno je prvo kreirati index)
/*
db.collection("users")
  .orderBy("name", "desc")
  .orderBy("age", "asc")
  .get()
  .then((snapshot) => {
    snapshot.forEach((doc) => {
      let data = doc.data();
      console.log(data);
    });
  })
  .catch((err) => {
    console.log(`Error ${err}`);
  });
*/

// Dohvatanje odredjenog broja dokumenata, limitiranje
// db.collection("users")
//   .orderBy("name", "desc")
//   .orderBy("age", "asc")
//   .limit(2)
//   .get()
//   .then((snapshot) => {
//     snapshot.forEach((doc) => {
//       let data = doc.data();
//       console.log(data);
//     });
//   })
//   .catch((err) => {
//     console.log(`Error ${err}`);
//   });

// Dohvatanje dokumenata koji zadovoljavaju odredjene uslove (filtriranje)

// Dohvati sve klijente koji Imaju platu veću ili jednaku od 500
// db.collection("customers")
//   .where("Salary", ">=", 50000)
//   .get()
//   .then((snapshot) => {
//     snapshot.forEach((doc) => {
//       let data = doc.data();
//       console.log(data);
//     });
//   })
//   .catch((err) => {
//     console.log(`Error ${err}`);
//   });

// Dohvati sve klijente koji Imaju platu između 300 i 800
// db.collection("customers")
//   .where("Salary", ">=", 300)
//   .where("Salary", "<=", 800)
//   .get()
//   .then((snapshot) => {
//     snapshot.forEach((doc) => {
//       let data = doc.data();
//       console.log(data);
//     });
//   })
//   .catch((err) => {
//     console.log(`Error ${err}`);
//   });
// Dohvati sve klijente koji Imaju platu manju od 900, i imaju 30 godina

// db.collection("customers")
//   .where("Salary", "<=", 90000)
//   .where("age", "==", 30)
//   //   .orderBy("Name")
//   //   .orderBy("Salary")
//   .get()
//   .then((snapshot) => {
//     snapshot.forEach((doc) => {
//       let data = doc.data();
//       console.log(data);
//     });
//   })
//   .catch((err) => {
//     console.log(`Error ${err}`);
//   });

// dohvati sve klijente koji imaju preko 25 godina, sortirane po imenu
// db.collection("customers")
//   .where("age", ">", 25)
//   .orderBy("age")
//   .orderBy("Name")
//   .get()
//   .then((snapshot) => {
//     snapshot.forEach((doc) => {
//       let data = doc.data();
//       console.log(data);
//     });
//   })
//   .catch((err) => {
//     console.log(`Error ${err}`);
//   });

// Dohvati sve klijente koji Imaju adresu u Nišu

// db.collection("customers")
//   .where("addresses", "array-contains", "Nis")
//   .get()
//   .then((snapshot) => {
//     snapshot.forEach((doc) => {
//       let data = doc.data();
//       console.log(data);
//     });
//   })
//   .catch((err) => {
//     console.log(`Error: ${err}`);
//   });
// Dohvati sve klijente koji Imaju adresu u Nišu ili Beogradu,

// db.collection('customers')
// .where('addresses', 'array-contains-any', ['Nis', 'Beograd'])
// .get()
// .then(snapshot => {
//     snapshot.forEach(doc => {
//         let data = doc.data();
//         console.log(data);
//     });
// })
// .catch(err => {
//     console.log(`Error: ${err}`);
// });

// Dohvati sve klijente koji Imaju 22, 25 ili 28 godina

// db.collection("customers")
//   .where("age", "in", [22, 25, 28])
//   .get()
//   .then((snapshot) => {
//     snapshot.forEach((doc) => {
//       let data = doc.data();
//       console.log(data);
//     });
//   })
//   .catch((err) => {
//     console.log(`Error: ${err}`);
//   });

// Dohvatiti sve zadatke koji Treba da se izvrše u tekućoj godini
/*
let datum = new Date();
let godina = datum.getFullYear(); // tekuca godina
let datum1 = new Date(godina, 0, 1); // 1. januar tekuce godine
let datum2 = new Date(godina + 1, 0, 1); // 1. januar sledece godine
let ts1 = firebase.firestore.Timestamp.fromDate(datum1);
let ts2 = firebase.firestore.Timestamp.fromDate(datum2);

db.collection('tasks')
.where('due_date', '>=', ts1) // moze i datum1
.where('due_date', '<', ts2) // moze i datum2, ne mora da se konvertuje
.get()
.then(snapshot => {
    snapshot.forEach(doc => {
        let data = doc.data();
        console.log(data);
    });
})
.catch(err => {
    console.log(`Error: ${err}`);
});
*/

// Dohvatiti sve zadatke koji Su zavrseni
/*
let datum = new Date();

db.collection('tasks')
.where('due_date', '<=', datum)
.get()
.then(snapshot => {
    snapshot.forEach(doc => {
        let data = doc.data();
        console.log(data);
    });
})
.catch(err => {
    console.log(`Error: ${err}`);
});
*/

// Dohvatiti sve zadatke koji Tek treba da pocnu
// let datum = new Date();

// db.collection("tasks")
//   .where("start_date", ">=", datum)
//   .get()
//   .then((snapshot) => {
//     snapshot.forEach((doc) => {
//       let data = doc.data();
//       console.log(data);
//     });
//   })
//   .catch((err) => {
//     console.log(`Error: ${err}`);
//   });
// ZADACI Movies
// Pročitati sve filmovi koje:
// Je režirao Srdjan Dragojevic
db.collection("movies")
  .where("director.surname", "==", "Dragojević")
  .where("director.name", "==", "Srdjan")
  .get()
  .then((snapshot) => {
    snapshot.forEach((doc) => {
      let data = doc.data();
      console.log("Režiser");
      console.log(data);
    });
  })
  .catch((err) => {
    console.log(`Error ${err}`);
  });
// Čija je ocena između 5 i 10
db.collection("movies")
  .where("rating", ">", 5)
  .where("rating", "<", 10)
  .get()
  .then((snapshot) => {
    snapshot.forEach((doc) => {
      let data = doc.data();
      console.log("Rejting");
      console.log(data);
    });
  })
  .catch((err) => {
    console.log(`Error ${err}`);
  });
// Kojima je žanr komedija, tragedija ili drama
db.collection("movies")
  .where("genres", "array-contains-any", ["Comedy", "Tragedy", "Drama"])
  .get()
  .then((snapshot) => {
    snapshot.forEach((doc) => {
      let data = doc.data();
      console.log("Žanr");
      console.log(data);
    });
  })
  .catch((err) => {
    console.log(`Error ${err}`);
  });
// Koji su izašli u 21. veku
db.collection("movies")
  .where("release_year", ">=", 2001)
  .get()
  .then((snapshot) => {
    snapshot.forEach((doc) => {
      let data = doc.data();
      console.log("21. vek");
      console.log(data);
    });
  })
  .catch((err) => {
    console.log(`Error ${err}`);
  });

// Prikazati sve informacije o najbolje rangiranom filmu.
db.collection("movies")
  .orderBy("rating", "desc")
  .limit(1)
  .get()
  .then((snapshot) => {
    snapshot.forEach((doc) => {
      let data = doc.data();
      console.log(data);
    });
  })
  .catch((err) => {
    console.log(`Error: ${err}`);
  });
//Prikazati sve informacije o najslabije rangiranoj drami.
db.collection("movies")
  .where("genres", "array-contains", "Action")
  .orderBy("rating", "asc")
  .limit(1)
  .get()
  .then((snapshot) => {
    snapshot.forEach((doc) => {
      let data = doc.data();
      console.log(data);
    });
  })
  .catch((err) => {
    console.log(`Error: ${err}`);
  });
