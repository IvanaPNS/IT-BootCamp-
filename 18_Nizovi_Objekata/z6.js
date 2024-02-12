// ZADATAK 6
let blog1 = {
  title: "IF naredba grananja!",
  likes: 50,
  dislikes: 21,
};
let blog2 = {
  title: "While petlja",
  likes: 25,
  dislikes: 36,
};
let blog3 = {
  title: "for petlja",
  likes: 100,
  dislikes: 12,
};
let blogovi = [blog1, blog2, blog3];
// A
/* Kojoj se prosleđuje niz blogova, a ona vraća ukupan broj lajkova. */
let brojLajkova = (niz) => {
  let suma = 0;
  niz.forEach((b) => {
    suma = suma + b.likes;
  });
  return suma;
};
console.log(brojLajkova(blogovi));
// B
/* Kojoj se prosleđuje niz blogova, a ona vraća prosečan broj lajkova. */
let prosecanBroj = (niz) => {
  return brojLajkova(niz) / niz.length;
};
console.log(prosecanBroj(blogovi));
// C
/* Kojoj se prosleđuje niz blogova, a ona ispisuje sve one naslove blogova koji imaju više lajkova nego dislajkova. */
let viseLajk = (niz) => {
  niz.forEach((b) => {
    if (b.likes > b.dislikes) {
      console.log(b.title);
    }
  });
};
viseLajk(blogovi);
// D
/* Kojoj se prosleđuje niz blogova, a ona ispisuje sve one naslove blogova koji imaju najmanje duplo više lajkova nego dislajkova. */
let viseLajk2 = (niz) => {
  niz.forEach((b) => {
    if (b.likes >= b.dislikes * 2) {
      console.log(b.title);
    }
  });
};
viseLajk2(blogovi);
// E
/* Kojoj se prosleđuje niz blogova, a ona ispisuje sve one naslove blogova koji se završavaju uzvičnikom. */
let naslovUzvicnik = (niz) => {
  niz.forEach((b) => {
    if (b.title[b.title.length - 1] == "!") {
      console.log(b.title);
    }
  });
};
naslovUzvicnik(blogovi);
// F
/* Kojoj se prosleđuje niz blogova, kao i $granica, a ona vraća broj blogova čiji je broj lajkova veći od granice. */
let granica = (niz, g) => {
  let br = 0;
  niz.forEach((b) => {
    if (b.likes > g) {
      br++;
    }
  });
  return br;
};
console.log(granica(blogovi, 49));
// G
/* Kojoj se prosleđuje niz blogova, kao i neka reč, a ona vraća prosečan broj lajkova za one blogove koji u naslovu sadrže prosleđenu reč. */
let recProsek = (niz, rec) => {
  let suma = 0;
  let br = 0;
  niz.forEach((b) => {
    if (b.title.includes(rec)) {
      suma = suma + b.likes;
      br++;
    }
  });
  return suma / br;
};
console.log(recProsek(blogovi, "petlja"));
// H
/* Kojoj se prosleđuje niz blogova, a ona ispisuje blogove koji imaju iznadprosečan broj lakova. */
let iznadLajk = (niz) => {
  niz.forEach((b) => {
    if (b.likes > prosecanBroj(niz)) {
      console.log(b.title);
    }
  });
};
iznadLajk(blogovi);
