let blog1 = {
  title: "HTML",
  content: "Osnovni HTML tagovi",
  author: "Jelena",
  likes: 10,
  comments: true,
};

// Ispis objekta
console.log(blog1);
console.log(typeof blog1);

// Ispis odredjene osobine
console.log(blog1.title);
console.log(blog1.author);
console.log(blog1["content"]);

// Izmena oredjene osobine
blog1.content = "HTML tabele";
console.log(blog1.content);
blog1["content"] = "HTML liste";
console.log(blog1.content);
blog1.likes = 7;
blog1.comments = false;
console.log(blog1);

/////////////////////////////////

let user1 = {
  username: "JelenaMatejic",
  age: 29,
  blogs: ["Naredba granja", "Nizovi", "Objekti"],
  login: function () {
    console.log(`Ulogovani ste`);
    console.log(this);
  },
  logout: function () {
    console.log(`Izlogovani ste`);
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

/////////////////////////////////

let dan1 = {
  datum: "2023/12/22",
  kisa: true,
  sunce: false,
  oblacno: true,
  temperature: [-3, -4, -6, -7, -6, -4, -10, 0],
  // 1.
  prosecna: function () {
    let suma = 0;
    this.temperature.forEach((t) => {
      suma += t;
    });
    return suma / this.temperature.length;
  },
  // 2.
  brNatprosecnih: function () {
    let br = 0;
    let pros = this.prosecna();

    // Preko forEach
    // this.temperature.forEach(t => {
    //     if(t > pros) {
    //         br++;
    //     }
    // });

    // Preko for
    for (let i = 0; i < this.temperature.length; i++) {
      if (this.temperature[i] > pros) {
        br++;
      }
    }

    return br;
  },
  // 3.
  brMaxTemp: function () {
    let br = 0;
    let maxTemp = this.temperature[0];
    this.temperature.forEach((t) => {
      if (t > maxTemp) {
        maxTemp = t;
      }
    });
    this.temperature.forEach((t) => {
      if (t == maxTemp) {
        br++;
      }
    });
    return br;
  },
  // 4.
  izmedjuDveVrednosti: function (t1, t2) {
    let brMerenja = 0;
    // Ciljano da u t1 bude manja vrednost, a u t2 veca vrednost
    // cilj: t1 < t2
    if (t1 > t2) {
      let pom = t1;
      t1 = t2;
      t2 = pom;
    }

    this.temperature.forEach((el) => {
      if (t1 < el && el < t2) {
        brMerenja++;
      }
    });
    return [t1, t2, brMerenja];
  },
  // 5.
  iznadProsekaUVeciniDana: function () {
    let brDana = this.brNatprosecnih();
    if (brDana > this.temperature.length / 2) {
      return true;
    } else {
      return false;
    }
  },
  // 6.
  leden: function () {
    // 1. pristup preko forEach
    // let ledenDan = true;
    // this.temperature.forEach(t => {
    //     if(t > 0) {
    //         ledenDan = false;
    //     }
    // })
    // return ledenDan;

    // 2. pristup preko for
    for (let i = 0; i < this.temperature.length; i++) {
      if (this.temperature[i] > 0) {
        return false;
      }
    }
    return true;
  },
  nepovoljan: function () {
    for (let i = 0; i < this.temperature.length - 1; i++) {
      if (Math.abs(this.temperature[i] - this.temperature[i + 1]) > 8) {
        return true;
      }
    }
    return false;
  },
};

console.log(`Prosečna temperatura je: ${dan1.prosecna()}`);
console.log(`Broj natprosečnih merenja u danu je: ${dan1.brNatprosecnih()}`);
let vraceneVrednosti = dan1.izmedjuDveVrednosti(7, 4);
console.log(
  vraceneVrednosti,
  vraceneVrednosti[0],
  vraceneVrednosti[1],
  vraceneVrednosti[2]
);
console.log(
  `Između temperature ${vraceneVrednosti[0]} i temperature ${vraceneVrednosti[1]} ima ${vraceneVrednosti[2]} temperatura`
);
console.log(
  `Da li ima više natprosečnih temperatura? ${dan1.iznadProsekaUVeciniDana()}`
);
console.log(`Da li je dan bio leden? ${dan1.leden()}`);
console.log(`Da li je dan nepovoljan? ${dan1.nepovoljan()}`);
