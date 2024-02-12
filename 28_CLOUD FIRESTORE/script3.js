let datum1 = new Date("2024-01-26 17:00:00");
let datum2 = new Date("2024-01-26 21:00:00");

// collection("...").add()
//collection("...").doc().set()
db.collection("tasks")
  .add({
    title: "Cas ITBootcamp",
    start_date: firebase.firestore.Timestamp.fromDate(datum1),
    due_date: firebase.firestore.Timestamp.fromDate(datum2),
    priority: false,

    description: "Cas iz baza podataka",
  })
  .then(() => {
    console.log("Uspesno dodat task");
  })
  .catch((e) => {
    console.log(`Greska ${e}`);
  });
//doc("...").set() - kompletno "gazi" sadrzaj dokumenta -menja
//doc("...")..update() - manja sadrzaj postojecih polja
db.collection("users")
  .doc("cust04")
  .update({
    age: 28,
  })
  .then(() => {
    console.log("Uspesno promenjene godine");
  })
  .catch((e) => {
    console.log(`Greska ${e}`);
  });

db.collection("muvies")
  .doc("film1")
  .set({
    name: "Zelena milja",
    direktor: {
      name: "Frank",
      surname: "Darabont",
    },
    Release_year: 1999,
    Genres: ["Drama", "Mystery"],
    Rating: 8.66,
  })
  .then(() => {
    console.log("Uspesno promenjene godine");
  })
  .catch((e) => {
    console.log(`Greska ${e}`);
  });

db.collection("muvies")
  .doc("film2")
  .set({
    name: "Lepa sela lepo gore",
    direktor: {
      name: "Srdjan",
      surname: "Dragojevic",
    },
    Release_year: 1996,
    Genres: ["Drama", "ratni film"],
    Rating: 9.1,
  })
  .then(() => {
    console.log("Uspesno promenjene godine");
  })
  .catch((e) => {
    console.log(`Greska ${e}`);
  });
db.collection("muvies")
  .doc("film2")
  .update({
    Rating: 8.99,
  })
  .then(() => {
    console.log("Uspesno promenjene godine");
  })
  .catch((e) => {
    console.log(`Greska ${e}`);
  });
db.collection("muvies").doc("film1").set(
  {
    Genres: "Drama",
  },
  { merge: true }
);
// class Movie {
//   constructor(n, d, y, g, r) {
//     this.name = n;
//     this.director = d;
//     this.releaseYear = y;
//     this.genres = g;
//     this.rating = r;
//   }
// }
// let movie1 = new Movie(
//   "Film1",
//   { name: "Ime1", surname: "Prezime1" },
//   2023,
//   ["Action", "Comedy"],
//   5.5
// );
// let movie2 = new Movie(
//   "Film2",
//   { name: "Ime2", surname: "Prezime2" },
//   2014,
//   ["Horror"],
//   7.0
// );
// let movies = [movie1, movie2];
// function addMovie(arr) {
//   for (let i = 0; i < movies.length; i++) {
//     db.collection("movies")
//       .doc(`movie${i + 1}`)
//       .set(Object.assign({}, movies[i]))
//       .then(() => {
//         console.log("Movie added successfully");
//       })
//       .catch((e) => {
//         console.log(`Error: ${e}`);
//       });
//   }
// }
// addMovie(movies);
// db.collection("movies")
//   .doc("movie1")
//   .update({
//     rating: 5.8,
//   })
//   .then(() => {
//     console.log("Rading updated successfully");
//   })
//   .catch((e) => {
//     console.log(`Error: ${e}`);
//   });

// Vladislav Stevanović
//   7:29 PM
// db.collection("movies").doc("film1")
// .set( {
//     name: "Terminator2",
//     release_year: 1991,
//     director: {
//         ime: "James",
//         prezime: "Cammeron"
//     },
//     genres: ["action", "thriller", 'sf'],
//     rating: 9.2,
// })
// .then(() => {
//     console.log("Movie added");
// })
// .catch((e) => {
//     console.log(`Greska${e}`);
// })
// db.collection("movies").doc("film2")
// .set( {
//     name: "LOTR return of the king",
//     release_year: 2003,
//     director: {
//         ime: "Peter",
//         prezime: "Jackson"
//     },
//     genres: ["action", "fantasy",],
//     rating: 9.5,
// })
// .then(() => {
//     console.log("Movie added");
// })
// .catch((e) => {
//     console.log(`Greska${e}`);
// })
// db.collection("movies").doc("film3")
// .set( {
//     name: "Star wars new hope",
//     release_year: 1979,
//     director: {
//         ime: "George",
//         prezime: "Lucas"
//     },
//     genres: ["comedy", "family", "SF"],
//     rating: 8.2,
// })
// .then(() => {
//     console.log("Movie added");
// })
// .catch((e) => {
//     console.log(`Greska${e}`);
// })
// db.collection("movies").doc("film1")
// .update ({
//     rating: 9.8
// })
// .then(() => {
//     console.log("Film izmenjen");
// })
// .catch((e) => {
//     console.log(`Greska${e}`);
// })
// db.collection("movies").doc("film2")
// .update ({
//     genres : firebase.firestore.FieldValue.arrayUnion("family")
// })
// .then(() => {
//     console.log("Dodat zanr");
// })
// .catch((e) => {
//     console.log(`Greska${e}`);
// })
//dohvatanje dokumenta

// Dohvatanje dokumenta
db.collection("movies")
  .doc("film1")
  .get()
  .then((doc) => {
    if (doc.exists) {
      let data = doc.data();
      console.log("Uspesno skinut dokument: " + doc.id);
      console.log(data);
    } else {
      console.log("Ne postoji ovaj dokument");
    }
  })
  .catch((e) => {
    console.log(`Greska: ${e}`);
  });

// Dohvatanje svih dokumenata iz kolekcije
db.collection("customers")
  .get()
  .then((snapshot) => {
    snapshot.forEach((doc) => {
      let data = doc.data();
      console.log(doc.id, " => ", data);
    });
  })
  .catch((e) => {
    console.log(`Greska: ${e}`);
  });
