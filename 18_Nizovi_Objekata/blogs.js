let blog1 = {
  title: "If naredba grananja!",
  likes: 50,
  dislikes: 21,
};
let blog2 = {
  title: "While petlja !",
  likes: 25,
  dislikes: 36,
};
let blog3 = {
  title: "For petlja",
  likes: 100,
  dislikes: 12,
};
let arrBlogs = [blog1, blog2, blog3];

// ispis niza objekata
console.log(arrBlogs);
//ispis jednog elementa iz niza objekata
console.log(arrBlogs[1]);

// ispis jednog propertija iz niza objekta
console.log(arrBlogs[1].title);
console.log(arrBlogs[1]["title"]);

//ispis naslova svih elemenata iz niza-koriscenjem for petlje

for (let i = 0; i < arrBlogs.length; i++) {
  console.log(arrBlogs[i].title);
}
arrBlogs[1].title = "While ciklus";
//ispis naslova svih elemenata iz niza-koriscenjem forEach petlje
arrBlogs.forEach((obj) => {
  console.log(obj.title, obj.likes);
});

/// 1 Zadatak Napraviti arrow funkciju kojoj se prosleđuje niz objekata, a ona vraća ukupan broj lajkova

let sumLikes = (arr) => {
  let sum = 0;
  arr.forEach((obj) => {
    sum += obj.likes;
  });
  return sum;
};

console.log(`Suma lajkova je: ${sumLikes(arrBlogs)}`);

// 2 zadatak Napraviti arrow funkciju kojoj se prosleđuje niz objekata, a ona vraća prosečan broj lajkova
let avgLikes = (arr) => {
  //   let s = sumLikes(arr);
  //   let n = arr.length;
  //   let avg = s / n;
  //   return avg;
  return sumLikes(arr) / arr.length;
};
console.log(`Prosecan br lajkova je ${avgLikes(arrBlogs)}`);

// 3 Napraviti arrow funkciju kojoj se prosleđuje niz objekata, a ona ispisuje sve one naslove blogova koji imaju više pozitivnih nego negativnih ocena

let nasloviBlogova = (arr) => {
  arr.forEach((obj) => {
    if (obj.likes > obj.dislikes) {
      console.log(obj.title);
    }
  });
};
nasloviBlogova(arrBlogs);

// let ispisNaslova = (arr) => {
//   arr.forEach((obj) => {
//     if (obj.likes > obj.dislikes) {
//       console.log(obj.title);
//     }
//   });
// };
// ispisNaslova(arrBlogs);

//4 Napraviti arrow funkciju kojoj se prosleđuje niz objekata, a ona ispisuje sve one naslove blogova koji imaju najmanje duplo više pozitivnih nego negativnih ocena
let nasloviBlogovaDuploVise = (arr) => {
  arr.forEach((obj) => {
    if (obj.likes >= 2 * obj.dislikes) {
      console.log(obj.title);
    }
  });
};
nasloviBlogovaDuploVise(arrBlogs);

// let ispis = (arr) => {
//   for (i = 0; i < arr.length; i++) {
//     if (arr[i].likes >= arr[i].dislikes * 2) {
//       console.log(arr[i].title);
//     }
//   }
// };

// 5 Napisati arrow funkciju kojoj se prosleđuje niz objekata a ona ispisuje sve naslove koji se završavaju uzvičnikom

let blogTitles3 = (arr) => {
  arr.forEach((blog) => {
    // if (blog.title.endsWith("!")) {
    //   console.log(blog.title);
    // }
    if (blog.title[blog.title.length - 1] == "!") {
      console.log(blog.title);
    }
  });
};
blogTitles3(arrBlogs);
