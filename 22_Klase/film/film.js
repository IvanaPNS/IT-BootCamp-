class Film {
  constructor(n, r, g, o) {
    this.naslov = n;
    this.reziser = r;
    this.godinaIzdavanja = g;
    this.ocene = o; //seter za niz ocena
  }

  //seteri - set metode - postavljaju vrednost polja
  set naslov(n) {
    this._naslov = n;
  }
  set reziser(r) {
    this._reziser = r;
  }
  set godinaIzdavanja(gi) {
    if (gi < 1800) {
      this._godinaIzdavanja = 1800;
    } else {
      this._godinaIzdavanja = gi;
    }
  }
  set ocene(o) {
    for (let i = 0; i < o.length; i++) {
      if (o[i] < 5 || o[i] > 10 || o[i] != Math.ceil(o[i])) {
        o[i] = 5;
      }
    }
    this._ocene = o;
  }

  //geteri - vracaju vrednost polja

  get naslov() {
    return this._naslov;
  }

  get reziser() {
    return this._reziser;
  }

  get godinaIzdavanja() {
    return this._godinaIzdavanja;
  }
  get ocene() {
    return this._ocene;
  }
  stampaj() {
    console.log(`Naslov: ${this._naslov}`); // ovo poziva geter za naslov
  }
  //Napraviti metod prosek koji vraća prosečnu ocenu
  prosecna() {
    let suma = 0;
    this.ocene.forEach((elem) => {
      suma += elem;
    });
    return suma / this.ocene.length;
  }
}
export default Film;

// let film1 = new Film("Cuvari formule", "Dragan Bjelogrlic", 2023);
// let film2 = new Film("Klopka", "Srdjan Golubovic", 2007);
// console.log(film1);
// console.log(film2);

// film1.stampaj();
// // film1._godinaIzdavanja = -2023; // nikad ovako nego seterom, tj bez crte
// film1.godinaIzdavanja = 2024; // ovo poziva setera, ne i konstruktor
// console.log(film1);
// console.log(`Film ${film2.naslov},godina izdanja: ${film2.godinaIzdavanja}`);

// let filmovi = [film1, film2];
