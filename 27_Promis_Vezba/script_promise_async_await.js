const form = document.querySelector("#order");
const capacity = document.querySelector("#capacity");
const div = document.querySelector("#result");

function getItemsReturnPromise(resource) {
  return new Promise((resolve, reject) => {
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
  });
}

async function clickGetItems() {
  let data1 = await getItemsReturnPromise("json/stock.json");
  let nizArtikalaKojiNisuNaStanju = [];
  data1.forEach((artikal) => {
    if (artikal.stock == 0) {
      nizArtikalaKojiNisuNaStanju.push(artikal.id);
    }
  });

  let deta2 = await getItemsReturnPromise("json/weights.json");
  let totalWeight = 0;
  deta2.forEach((artikal) => {
    if (nizArtikalaKojiNisuNaStanju.includes(artikal.id)) {
      totalWeight += artikal.weight;
    }
  });

  if (totalWeight <= Number(capacity.value)) {
    let data3 = await getItemsReturnPromise("json/prices.json");
    let totalPrice = 0;
    data3.forEach((artikal) => {
      if (nizArtikalaKojiNisuNaStanju.includes(artikal.id)) {
        totalPrice += artikal.price;
      }
    });
    return totalPrice;
  } else {
    return "Not enough capacity in track !!";
  }
}

function submitFormVarijanta3(event) {
  event.preventDefault();
  clickGetItems()
    .then((data) => {
      div.innerHTML = data;
    })
    .catch((err) => {
      div.innerHTML = `Greska ${err}`;
    });
}

form.addEventListener("submit", submitFormVarijanta3);
