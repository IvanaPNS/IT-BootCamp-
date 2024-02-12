// let getJSON = (resource, callback) => {
//   //1. kreiranje XML objekta
//   const request = new XMLHttpRequest();

//   request.addEventListener("readystatechange", () => {
//     if (request.readyState === 4 && request.status == 200) {
//       // Sve ok
//       let data = JSON.parse(request.responseText);
//       callback(data, undefined);
//     } else if (request.readyState === 4) {
//       callback(undefined, "Desila se greska");
//     }
//   });

//   // 2 .Otvaramo kreirani zahtev
//   request.open("GET", resource);
//   // 3. Slanje zahteva
//   request.send();
// };

// getJSON("../JSON/prvi.json", (data, err) => {
//   if (data) {
//     console.log(data); // Sve je proslo OK, vraca podatke (data)
//   } else {
//     console.log(err); // ispisuje gresku
//   }
// });

// getJSON("../JSON/drugi.json", (data, err) => {
//   if (data) {
//     console.log(data); // Sve je proslo OK, vraca podatke (data)
//   } else {
//     console.log(err); // ispisuje gresku
//   }
// });
// console.log("Kraj fajla");

////////////////////////////////////////////////////////////////////////////////////////////

let getJSON = (resource) => {
  const request = new XMLHttpRequest(); //1. kreiranje XML objekta
  request.open("GET", resource); // 2 .Otvaramo kreirani zahtev
  request.send(); // 3. Slanje zahteva
  console.log(request);
  return new Promise((resolve, reject) => {
    request.addEventListener("readystatechange", () => {
      if (request.readyState === 4 && request.status == 200) {
        // Sve ok
        let data = JSON.parse(request.responseText);
        resolve(data);
      } else if (request.readyState === 4) {
        reject("Doslo je do greske");
      }
    });
  });
};
getJSON("../JSON/prvi.json")
  .then((sadrzaj) => {
    console.log("prvi.json", sadrzaj); // Ako je prvi.json resolveispisuje njegove podatke
    return getJSON("../JSON/drugi.json"); // Vraca instancu promise,koja moze imati .then i . catch
  })
  .then((sadrzaj2) => {
    console.log("drugi.json", sadrzaj2); // Ako je drugi,json resolve onda ispisuje njegove podatke
    return getJSON("../JSON/treci.json");
  })
  .then((sadrzaj3) => {
    console.log("treci.json", sadrzaj3); // Ako je treci.json resolve ispisuje njegove podatke
  })
  .catch((greska) => {
    console.log("Rejected:", greska); // Ako je bar jedan fajl bio rejected, upada u catche granu
  });

////////////////////////////////////////////////////////////////////////////////
let vezba = (resource) => {
  return fetch(resource);
};

vezba("../JSON/prvi.json")
  .then((sadrzaj) => {
    console.log(sadrzaj);
    return sadrzaj.json();
  })
  .then((data) => {
    console.log(data);
    return vezba("../JSON/drugi.json");
  })
  .then((sadrzaj2) => {
    return sadrzaj2.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });

///////////////////////////////////
async function test() {
  // neka logika
  try {
    // const response = fetch("../JSON/prvi.json");
    // response
    //   .then((sadrzaj1) => {
    //     return sadrzaj1.json();
    //   })
    //   .then((data) => console.log(data));
    const response = await fetch("../JSON/prvi.json");
    const prvi = await response.json();
    console.log(prvi);
    const response2 = await fetch("../JSON/drugi.json");
    const drugi = await response2.json();
    console.log(drugi);
    const response3 = await fetch("../JSON/treci.json");
    const treci = await response3.json();
    console.log(treci);
  } catch (err) {
    console.log(err);
  }
}
// neka logika

test();

// .then((data) => console.log(data));

// getJSON("../JSON/prvi.json", (data, err) => {
//   if (data) {
//     console.log(data); // Sve je proslo OK u prvi.jsoni  vraca podatke (data) iz prvi.json
//     // Ako je sve bilo ok sa prvim fajlom onda uzmi drugi.json fajl
//     getJSON("../JSON/drugi.json", (data, err) => {
//       if (data) {
//         console.log(data); // Sve je proslo OK u drugi.json, vraca podatke (data) iz drugi.json
//         getJSON("../JSON/treci.json", (data, err) => {
//           if (data) {
//             console.log(data); // Sve proslo OK u trecem.json
//           } else {
//             console.log(err); // Ispisuje gresku iz trecu.json
//           }
//         });
//       } else {
//         console.log(err); // ispisuje gresku iz drugi.json
//       }
//     });
//   } else {
//     console.log(err); // ispisuje gresku iz prvi.json
//   }
// });

console.log("Kraj fajla");
