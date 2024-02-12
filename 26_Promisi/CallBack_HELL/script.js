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
let getJSON = (resource, callback) => {
  //1. kreiranje XML objekta
  const request = new XMLHttpRequest();

  request.addEventListener("readystatechange", () => {
    if (request.readyState === 4 && request.status == 200) {
      // Sve ok
      let data = JSON.parse(request.responseText);
      callback(data, undefined);
    } else if (request.readyState === 4) {
      callback(undefined, "Desila se greska");
    }
  });

  // 2 .Otvaramo kreirani zahtev
  request.open("GET", resource);
  // 3. Slanje zahteva
  request.send();
};

getJSON("../JSON/prvi.json", (data, err) => {
  if (data) {
    console.log(data); // Sve je proslo OK u prvi.jsoni  vraca podatke (data) iz prvi.json
    // Ako je sve bilo ok sa prvim fajlom onda uzmi drugi.json fajl
    getJSON("../JSON/drugi.json", (data, err) => {
      if (data) {
        console.log(data); // Sve je proslo OK u drugi.json, vraca podatke (data) iz drugi.json
        getJSON("../JSON/treci.json", (data, err) => {
          if (data) {
            console.log(data); // Sve proslo OK u trecem.json
          } else {
            console.log(err); // Ispisuje gresku iz trecu.json
          }
        });
      } else {
        console.log(err); // ispisuje gresku iz drugi.json
      }
    });
  } else {
    console.log(err); // ispisuje gresku iz prvi.json
  }
});

console.log("Kraj fajla");
