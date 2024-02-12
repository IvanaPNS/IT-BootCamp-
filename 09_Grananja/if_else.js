let a = -5;
let b = 5;
if (a > b) {
  console.log("a je vece od b");
} else {
  console.log(" b je vece ili jednako a");
}

/* 1) Za unetu zapreminu proizvoda, u paragrafu zelenom bojom ispisati “Pack up”, ukoliko je proizvod zapremine manji ili jednake 100ml. 
U suprotnom u paragrafu crvenom bojom ispisati “Throw away”. */

let zapremina = 120;
if (zapremina <= 100) {
  document.write(" <p style='color: green;'>Pack up</p>");
} else {
  document.write(" <p style='color: red;'>Throw away</p>");
}
/* 3)
 Za preuzetu godinu sa računara i unetu godinu rođenja izračunati da li osoba ove godine postaje punoletna. Ukoliko postaje, prikazati sliku torte sa brojem 18. U suprotnom, izračunati još koliko godina je preostalo do punoletstva i ispisati tu informaciju u paragrafu. */

let osoba = 2000;
let d = new Date();
let godina = d.getFullYear();
let punoletstvo = godina - 18;
if (osoba === punoletstvo) {
  document.write("<img src='download.jpg' >");
} else {
  let d = new Date();
  let godina = d.getFullYear();
  let preostalo = 18 - (godina - osoba);
  if (preostalo <= 0) {
    document.write(" <p >Osoba je punoletna</p>");
  } else {
    document.write(`<p'>Ostalo je jos ${preostalo} do punoletstva</p>`);
  }
}

let datum = new Date();
godina = datum.getFullYear();
let god_rodj = 2006;
let ima_godina = godina - god_rodj;

// Ako osoba baš ove gdoine puni 18 godina, onda ispisujemo sličicu
if (ima_godina == 18) {
  console.log(`Osoba ove godine postaje punoletna`);
  document.write(`<img src="torta.jpeg">`);
}

// Ako jošuvek nije punoletna, ispisujemo još koliko godina joj je preostalo do punoletstva
if (ima_godina < 18) {
  console.log(`Osoba je maloletna`);
  let ostalo_do_punoletstva = 18 - ima_godina;
  document.write(
    `<p>Do punoletstva ostao je ${ostalo_do_punoletstva} godina</p>`
  );
}
// 2)Za unetu temperaturu u paragrafu, ispisati “Temperatura u plusu” crvenom bojom ili “Temperatura u minusu” plavom bojom.
// Ukoliko je temperatura nula, računati kao temperaturu u plusu.

let t = -10;
if (t >= 0) {
  let paragraf = document.getElementById(`temperatura`); //preuzmem paragraf
  paragraf.innerHTML = `Temperatura je u plusu`; //upisem u paragraf preko iner.html
  paragraf.style.color = "red";
} else {
  let paragraf = document.getElementById("temperatura");
  paragraf.innerHTML = `Temperatura je u <b>minusu</b>`;
  paragraf.style.color = "Blue";
}

// 4 )U odnosu na preuzeto trenutno vreme sa računara, u paragrafu ispisati da li je trenutno jutro ili popodne.
// Popodne je kada prođe 12:00 sati, računajući i to vreme.

let vreme = new Date();
let sati = vreme.getHours();
if (sati >= 12) {
  document.write("Po Podne");
} else {
  document.write("Jutro");
}

// 5) U odnosu na pol koji je korisnik uneo u promenljivu
// (“m” za muški pol ili “z” za ženski pol)  na ekranu prikazati odgovarajući avatar (odgovarajuću sličicu).
let pol = `m`;
if (pol === `m`) {
  document.write(
    `<img src="https://png.pngtree.com/png-vector/20220807/ourmid/pngtree-man-avatar-wearing-gray-suit-png-image_6102786.png" alt="man avatar">`
  );
} else {
  document.write(
    `<img src="https://t3.ftcdn.net/jpg/06/17/13/26/360_F_617132669_YptvM7fIuczaUbYYpMe3VTLimwZwzlWf.jpg" alt="woman avatar">`
  );
}
