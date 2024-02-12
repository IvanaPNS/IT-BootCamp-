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

//////////////////////////////////////////

let user1 = {
  username: "JelenaMatejic",
  age: 29,
  blogs: [blog1, blog3],
  logBlogs: function () {
    this.blogs.forEach((el) => {
      console.log(el.title);
    });
  },
};

let user2 = {
  username: "StefanStanimirovic",
  age: 34,
  blogs: [blog2],
  logBlogs: function () {
    this.blogs.forEach((el) => {
      console.log(el.title);
    });
  },
};

//////////////////////////////////////////

console.log(user1.blogs[0].title);
console.log(user1.blogs[0]["title"]);
console.log(user1["blogs"][0]["title"]);

user1.logBlogs();
user2.logBlogs();

// 1 zadatak Napraviti niz korisnika gde svaki od korisnika sadrži niz blogova. Svaki blog u ovom nizu je objekat.

let users = [user1, user2];

// ispis username polja iz users niza
users.forEach((user) => {
  console.log(user.username);
});

//ispis svih naslova blogova, koje su korisnici kreirali

users.forEach((user) => {
  user.logBlogs();
});

// da nisam imala metodu logBlogs
users.forEach((user) => {
  // let userBlogs = u.blogs; // niz blogova korisnika
  //   u.Blogs.forEach((b) => {
  //iteriram nizom objekata gde je svaki objekat po jedan blog. Iz tog objekta Blog mogu uzeti naslov
  user.blogs.forEach((blog) => {
    console.log(blog.title);
  });
});

// 3 zadatak  Ispisati naslove onih blogova koji imaju više od 50 lajkova

users.forEach((user) => {
  user.blogs.forEach((blog) => {
    if (blog.likes > 50) {
      console.log(blog.title);
    }
  });
});
// 2 Ispisati imena onih autora koji imaju ispod 18 godina
users.forEach((user) => {
  if (user.age < 18) {
    console.log(user.username);
  }
});

// 4 Ispisati sve blogove autora čiji je username ’JohnDoe’
users.forEach((user) => {
  if (user.username === "JohnDoe") {
    // console.log(u.blogs);
    user.logBlogs();
  }
});

//5 Ispisati imena onih autora koji imaju ukupno više od 100 lajkova za blogove koje su napisali

users.forEach((user) => {
  let sumLike = 0;
  user.blogs.forEach((blog) => {
    sumLike += blog.likes;
  });
  if (sumLike > 100) {
    console.log(user.username);
  }
});

//6 Ispisati naslove onih blogova koji imaju natprosečan broj pozitivnih ocena
let sum = 0;
let br = 0;
users.forEach((user) => {
  user.blogs.forEach((blog) => {
    sum += blog.likes;
    br++;
  });
});
let prosek = sum / br;
users.forEach((user) => {
  user.blogs.forEach((blog) => {
    if (blog.likes > prosek) {
      console.log(blog.title);
    }
  });
});
// 7 Ispisati naslove onih blogova koji imaju natprosečan broj pozitivnih ocena i ispodprosečan broj negativnih ocena
sum = 0;
br = 0;
users.forEach((u) => {
  u.blogs.forEach((b) => {
    sum += b.dislikes;
    br++;
  });
});

let prosekDislikes = sum / br;
users.forEach((u) => {
  u.blogs.forEach((b) => {
    if (b.dislikes < prosekDislikes && b.likes > prosek) {
      console.log(b.title);
    }
  });
});

// // 7
let sumPoz = 0;
let br1 = 0;
let sumNeg = 0;
users.forEach((el) => {
  el.blogs.forEach((b) => {
    sumPoz += b.likes;
    sumNeg += b.dislikes;
    br1++;
  });
});
let prosekPoz = sumPoz / br1;
let prosekNeg = sumNeg / br1;
users.forEach((el) => {
  el.blogs.forEach((b) => {
    if (b.likes > prosekPoz && b.dislikes < prosekNeg) {
      console.log(b.title);
    }
  });
});
