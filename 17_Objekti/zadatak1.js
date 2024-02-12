let student = {
  ime: "Ivana",
  prezime: "Petrovic",
  godinaStudija: 3,
  ocene: [9, 10, 9, 10],
  ////// a  Napisati metodu koja vraća true ukoliko je student prosečan, u suprotnm vraća false. Student je prosečan ako nema nijednu šesticu i nijednu desetku.

  prosecanStudent: function () {
    let prosecanStudent = true;

    this.ocene.forEach((el) => {
      if (el == 6 || el == 10) {
        prosecanStudent = false;
      }
    });
    return prosecanStudent;
  },
  //b  Napisati metodu koja vraća true ukoliko je student ekstra, u suprotnm vraća false. Student je “ekstra” ako je polagao ispite samo sa devetkama i desetkama, i pri tome je broj desetki barem duplo veći od broja devetki.

  studentExtra: function () {
    let br10 = 0;
    let br9 = 0;
    for (let i = 0; i < this.ocene.length; i++) {
      if (this.ocene[i] == 9) {
        br9++;
      } else if (this.ocene[i] == 10) {
        br10++;
      } else {
        return false;
      }
    }
    return br10 > 2 * br9 ? true : false;
  },
  //c Napisati metodu koja vraća true ukoliko student kida, u suprotnm vraća false. Student “kida” ako je polagao ispite samo sa devetkama i desetkama, a broj devetki je manji od godine studije na kojoj se student nalazi.
  studentKida: function () {
    let br9 = 0;
    for (let i = 0; i < this.ocene.length; i++) {
      if (this.ocene[i] == 9 || this.ocene == 10) {
        if (this.ocene[i] == 9) {
          br9++;
        }
      } else {
        return false;
      }
    }
    return br9 < this.godinaStudija ? true : false;
  },
  studentKida1: function () {
    let br9 = 0;
    for (let i = 0; i < this.ocene.length; i++) {
      if (this.ocene[i] < 9) {
        return false;
      } else if (this.ocene[i] == 9) {
        br9++;
      }
    }

    return br9 < this.godinaStudija;
  },
};
// console.log(student.prosecanStudent());
// console.log(student.studentExtra());

// console.log(student.studentKida());
// console.log(student.studentKida1());

let niz = [9, 10, 9, 10];
let test = {
  ime: "Ivana",
  prezime: "Petrovic",
  godinaStudija: 3,
  ocene: [9, 10, 9, 10],
  studentRazbija: function () {},
};
test.studentKida1();
