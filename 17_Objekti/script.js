let blog1 = {
  title: "HTML",
  content: "Osnovni html tagovi",
  author: "Jelena",
  likes: 10,
  comments: true,
};

//ispis objekta
console.log(blog1);
console.log(typeof blog1);

// ispis odredjene osobine

console.log(blog1.title);
console.log(blog1.author);
console.log(blog1[`content`]);

//izmena odredjene osobine

blog1.content = "HTML tabele";
console.log(blog1.content);
blog1["content"] = "HTML Liste";
console.log(blog1.content);
blog1.likes = 7;
console.log(blog1);
blog1.comments = false;
console.log(blog1);

///////////////////////////////////
let user1 = {
  username: "IvanaPetrovic",
  age: 37,
  blogs: ["naredba grananja", "Nizovi", "Objekti"],
  nextAge: this.age + 1,
  login: function () {
    console.log("Ulogovani ste");
    console.log(this);
  },
  logout: function () {
    console.log("Izlogovani ste");
  },
  logBlogs: function () {
    this.blogs.forEach((element) => {
      console.log(element);
    });
  },
  hello: function () {
    return `Hello ${this.username}`;
  },
};
user1.login();
user1.logout();
user1.logBlogs();
console.log(user1.hello());
console.log(this);

user1.blogs.forEach((blog) => {
  document.write(`<p>${blog}</p>`);
});
///////////////////////////////
let dan1 = {
  datum: "2023/12/22",
  kisa: true,
  sunce: false,
  oblacno: true,
  temperature: [3, 4, -6, 7, 6, 4],

  //1 prosecna
  prosecna: function () {
    let suma = 0;
    this.temperature.forEach((t) => {
      suma += t;
    });
    return suma / this.temperature.length;
  },
  // 2 nadprosecna
  brNatprosecnih: function () {
    let br = 0;
    let prosek = this.prosecna();
    //preko forEach
    // this.temperature.forEach((t) => {
    //   if (t > prosek) {
    //     br++;
    //   }
    // });

    // preko FOR
    for (let i = 0; i < this.temperature.length; i++) {
      if (this.temperature[i] > prosek) {
        br++;
      }
    }
    return br;
  },

  ////////////////////////
  //3 Prebrojava i vraća koliko merenja je bilo sa maksimalnom temperaturom.
  // maxT: function () {
  //   br = 0;
  //   let maxTemp = this.temperature[0];
  //   this.temperature.forEach((t) => {
  //     if (t > maxTemp) {
  //       maxTemp = t;
  //     }
  //   });
  //   this.temperature.forEach((t) => {
  //     if (t == maxTemp) {
  //       br++;
  //     }
  //   });
  //   return br;
  // },

  maxT: function () {
    max = this.temperature[0];
    let br = 0;
    this.temperature.forEach((el) => {
      if (el > max) {
        max = el;
      }
    });
    this.temperature.forEach((el) => {
      if (max == el) {
        br++;
      }
    });
    return br;
  },
  // 4 Prima dva parametra koji predstavljaju dve temperature. Potrebno je da metoda vrati broj merenja u toku dana čija je vrednost između ove dve zadate temperature (ne uključujući te dve vrednosti).
  većaodt1manjaodt2: function (t1, t2) {
    let brMerenja = 0;
    let većatemp = t1;
    let manjatemp = t2;
    if (t2 > većatemp) {
      većatemp = t2;
    }
    if (t1 < manjatemp) {
      manjatemp = t1;
    }
    this.temperature.forEach((el) => {
      if (el > manjatemp && el < većatemp) {
        brMerenja++;
      }
    });
    return brMerenja;
  },
  // 8 Dan je nepovoljan ako je razlika između neka dva uzastopna merenja veća od 8 stepeni. Metod vraća true ukoliko je dan bio nepovoljan, u suprotnom vraća false.

  nepovoljan: function () {
    for (let i = 0; i < this.temperature.length - 1; i++) {
      if (Math.abs(this.temperature[i] - this.temperature[i + 1]) > 8) {
        return true;
      }
    }
    return false;
  },

  // 5 Vraća true ukoliko je u većini dana temperatura bila iznad proseka. U suprotnom vraća false.

  tempIznadProseka: function () {
    let brDana = this.brNatprosecnih();
    if (brDana > this.brNatprosecnih.length / 2) {
      return true;
    } else {
      return false;
    }
  },

  // drugi nacin
  // U suprotnom vraća false.
  temperatureIznadProseka: function () {
    return this.brNatprosecnih() > this.temperature.length / 2 ? true : false;
  },
  // 7
  tropskiDan: function () {
    let x;
    this.temperature.forEach((el) => {
      if (el < 24) {
        x = false;
      } else {
        x = true;
      }
    });
    return x;
  },
  // 6
  ledenDan: function () {
    let x;
    this.temperature.forEach((el) => {
      if (el > 0) {
        x = false;
      } else {
        x = true;
      }
    });
    return x;
  },

  neuobicajanDan: function () {
    let rez;
    for (let i = 0; i < this.temperature.length; i++) {
      if (this.kisa && this.temperature[i] < -5) {
        rez = true;
        break;
      } else if (this.oblacno && this.temperature[i] > 25) {
        rez = true;
        break;
      } else if (this.kisa && this.oblacno && this.sunce) {
        rez = true;
        break;
      } else {
        rez = false;
      }
    }
    return rez;
  },
};
console.log(dan1.nepovoljan());
console.log(dan1.ledenDan());
console.log(dan1.neuobicajanDan());

// let dan1 = {
//   datum: "2023/12/22",
//   kisa: true,
//   sunce: false,
//   oblacno: true,
//   temperature: [3, 4, -6, 7, 6, 4],
// console.log(dan1.tropskiDan());
// console.log(`vracene vrednosti ${dan1.tempIznadProseka()}`);
// console.log(`vracene vrednosti ${dan1.većaodt1manjaodt2(4, 7)}`);
// console.log(`bilo je ukupno ukupno merenja sa max temp ${dan1.maxT()}`);
// console.log(`Prosecna temperatura je ${dan1.prosecna()}`);
// console.log(`Broj natprosecnih merenja u danu je ${dan1.brNatprosecnih()}`);

// 6 Za dan se smatra da je leden ukoliko nijedna temperatura izmerena tog dana nije iznosila iznad 0 stepeni. Metod vraća true ukoliko je dan bio leden, u suprotnom metod vraća false.

// Za dan se smatra da je tropski ukoliko nijedna temperatura izmerena tog dana nije iznosila ispod 24 stepena. Metod vraća true ukoliko je dan bio tropski, u suprotnom vraća false.

// const iva = {
//   name: "IVana",
//   lastName: "Petrovic",
//   arr: [1, 2, 3, 4, 54, 5],
//   met: function () {
//     console.log(this.name);
//   },
// };
// iva.met()
// let temperature = [3, 4, 6, 7, 6, 4];
// function tropskiDan() {
//   let x;
//   temperature.forEach((el) => {
//     if (el < 24) {
//       x = false;
//     } else {
//       x = true;
//     }
//   });

//   return x;
// }

// console.log(tropskiDan());

// Za dan se kaže da je neuobičajen ako je bilo kiše i ispod -5 stepeni, ili bilo oblačno i iznad 25 stepeni, ili je bilo i kišovito i oblačno i sunčano. Metod vraća true ukoliko je dan bio neuobičajen, u suprotnom vraća false.
