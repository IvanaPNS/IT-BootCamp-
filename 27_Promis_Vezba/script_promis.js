//Robna kuća “Ikea” vas je angažovala da joj pomognete u realizaciji aplikacije koja će omogućiti lakši rad zaposlenima u prodavnici.
// Uvidom u način rada svih zaposlenih, zaključili ste da menadžment firme funkcioniše na sledeći način:
// ●      Radnici u magacinu proveravaju stanje artikala, i oni su zaduženi da vode evidenciju o brojnom stanju svakog artikla.
// ●      Ekonomisti na osnovu analize tržišta, kao i troškova firme određuju cene, i oni su zaduženi da vode računa o ceni svakog artikla.
// ●      Radnici u kamionu za prevoz poseduju posebnu vagu koja je u mogućnosti da izmeri svaki proizvod, i oni su zaduženi da vode evidenciju o težini svakog artikla.
// Na osnovu ovih informacija, odlučili ste da kreirate tri json fajla, tako da svaki sektor unosi podatke u svoj poseban json fajl. Sadržaj svakog fajla je string u JSON formatu koji odgovara nizu objekata, pri čemu svaki objekat od atributa sadrži:
// ●      stock.json: id (identifikacioni broj artikla), item (naziv artikla), stock (broj artikala na stanju),
// ●      prices.json: id (identifikacioni broj artikla), item (naziv artikla), price (cena artikla),
// ●      weights.json: id (identifikacioni broj artikla), item (naziv artikla), weight (težina artikla izražena u kilogramima).
// Menadžment kompanije je od vas zatražio da radnik u prodavnici može da otvori pretraživač, i na stranici da mu se prikaže sledeće:

//ZADATAK 1.	Jedna forma u kojoj se nalazi input u koji može da se upiše neki broj, koji predstavlja ukupnu težinu u kilogramima koju prihvata kamion za prevoz. Pored inputa, nalazi se i dugme. Klikom na dugme potrebno je da odredite da li u kamion za prevoz može da stane ukupna težina svih proizvoda kojih više nema na stanju. Zapravo, potrebno je uraditi sledeće:
// a.	Odrediti koji proizvodi više nisu na stanju i koje treba poručiti. Pretpostavljamo da se naručuje po jedna količina svakog artikla koji nije na stanju.
// b.	Ako je težina svih proizvoda koje treba poručiti veća od kapaciteta kamiona, ispisati poruku “Not enought capacity in truck!!“.
// c. 	U suprotnom, ispisati ukupnu cenu svih artikala koje treba naručiti.

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
function submitFormVarijanta2(event) {
  event.preventDefault();
  let nizArtikala = [];
  // let nizArtikalaKojiNisuNaStanju = []
  getItemsReturnPromise("json/stock.json")
    .then((data) => {
      data.forEach((artikal) => {
        // niz artikala kojih nema na stanju
        if (artikal.stock == 0) {
          nizArtikala.push(artikal.id);
        }
      });
      return getItemsReturnPromise("json/weights.json");
    })
    .then((data) => {
      // 25 kg
      let totalWeight = 0;
      data.forEach((artikal) => {
        if (nizArtikala.includes(artikal.id)) {
          totalWeight += artikal.weight;
        }
      });

      // if (totalWeight <= Number(capacity.value)) {
      // kapacitet kamiona upisujemo u formu
      // ako je kapacitet veci od totalne tezine
      if (Number(capacity.value) >= totalWeight) {
        return getItemsReturnPromise("json/prices.json");
      } else {
        div.innerHTML = "Not enough capacity in track !!";
      }
    })

    .then((data) => {
      if (data !== undefined) {
        let totalPrice = 0;
        let htmlEl = "<table> <th>Ime</th> <th>Cena</th>";
        data.forEach((artikal) => {
          if (nizArtikala.includes(artikal.id)) {
            totalPrice += artikal.price;
            // artikal.item --> ime
            // artikal.price --> cena
            htmlEl += `<tr><td>${artikal.item}</td><td>${artikal.price}</td></tr>`;
          }
        });
        htmlEl += `<tr><td>UKUPNO: </td><td>${totalPrice}</td></tr>  </table>`;
        // div.innerHTML = `Total price of articles: ${totalPrice}`;
        div.innerHTML = htmlEl;
      }
    })
    .catch((msg) => {
      div.innerHTML = msg;
    });
}

form.addEventListener("submit", submitFormVarijanta2);

// domaci d.	BONUS VARIJANTA: Ne ispisati samo ukupnu cenu svih artikala, već tabelu sa dve kolone: U prvoj koloni je ispisan naziv artikla koji se poručuje, u sledećoj je njegova cena. U poslednjem redu tabele, u prvoj ćeliji stoji tekst “UKUPNO”, a u drugoj ćeliji ukupna cena svih artikala.
