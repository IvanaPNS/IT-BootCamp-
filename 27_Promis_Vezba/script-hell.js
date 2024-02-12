const form = document.querySelector("#order");
const capacity = document.querySelector("#capacity");
const div = document.querySelector("#result");

/*
1) Odrediti artikle koji nisu vise na stanju
2) Odrediti ukupnu tezinu svih tih artikala
3) Ako je ta tezina manja od kapaciteta kamiona onda
    3.1) Oderediti i ispisati ukupnu cenu svih tih artikala
    3.2) Inace, ispisati poruku da kamion nema trazeni kapacitet
*/
function getItems(resource, resolve, reject) {
  let request = new XMLHttpRequest();
  request.addEventListener("readystatechange", function () {
    if (request.readyState === 4 && request.status === 200) {
      // sve je ok, obradi zahtev
      let data = JSON.parse(request.responseText);
      resolve(data); // fukcija radi nesto sa podacima koji su stigli sa servera
    } else if (request.readyState === 4) {
      // desila se neka greska
      reject("Desila se greska");
    }
  });
  request.open("GET", resource);
  request.send();
}

function submitFormVarijanta1(event) {
  event.preventDefault();
  //1) Odrediti artikle koji nisu vise na stanju
  let nizArtikala = [];

  getItems(
    "json/stock.json",
    (data) => {
      data.forEach((artikal) => {
        if (artikal.stock == 0) {
          nizArtikala.push(artikal.id);
        }
      });
      //2) Odrediti ukupnu tezinu svih tih artikala
      getItems(
        "json/weights.json",
        (data) => {
          let totalWeights = 0;
          data.forEach((artikal) => {
            if (nizArtikala.includes(artikal.id)) {
              totalWeights += artikal.weight;
            }
          });
          //3) Ako je ta tezina manja od kapaciteta kamiona onda
          if (totalWeights <= Number(capacity.value)) {
            // 3.1) Oderediti i ispisati ukupnu cenu svih tih artikala
            getItems(
              "json/prices.json",
              (data) => {
                let totalPrice = 0;
                data.forEach((artikal) => {
                  if (nizArtikala.includes(artikal.id)) {
                    totalPrice += artikal.price;
                  }
                });
                div.innerHTML = `Total price of articles: ${totalPrice}`;
              },
              (msg) => {
                div.innerHTML = msg;
              }
            );
          } else {
            // 3.2) Inace, ispisati poruku da kamion nema trazeni kapacitet
            div.innerHTML = "Not enough capacity in track !!";
          }
        },
        (msg) => {
          div.innerHTML = msg;
        }
      );
    },
    (msg) => {
      div.innerHTML = msg;
    }
  );
}

/*
funkcija submitFormVarijanta1 je apsolutno tacna !!!
Problem: Nepreglednost i jako tesko odrzavanje(callBack hell)
CallBack hell moze da se ublazi Promisima :)
*/

form.addEventListener("submit", submitFormVarijanta1);
