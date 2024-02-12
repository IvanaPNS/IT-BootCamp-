const request = new XMLHttpRequest();
request.addEventListener("readystatechange", function () {
  //   console.log(request.readyState);
  if (request.readyState === 4 && request.status == 200) {
    let data = JSON.parse(request.responseText);
    console.log(data);
    console.log(data[5]);
    console.log(data[5].title);
  } else if (request.readyState === 4) {
    console.log("Desila se greska");
  }
});

request.open("GET", "https://jsonplaceholder.typicode.com/todos");
request.send();

const request1 = new XMLHttpRequest();
request1.addEventListener("readystatechange", function () {
  if (request1.readyState === 4 && request1.status == 200) {
    let date = JSON.parse(request1.responseText);
    date.forEach((el) => {
      if (el.website.endsWith(".com")) {
        console.log(el);
      }
    });
  } else if (request1.readyState === 4) {
    console.log("Desila se greska");
  }
});

request1.open("GET", "https://jsonplaceholder.typicode.com/users");
request1.send();
//2 zad
// const usersResurs1 = new XMLHttpRequest();
// usersResurs1.addEventListener("readystatechange", function () {
//   if (usersResurs1.readyState == 4 && usersResurs1.status == 200) {
//     let data = JSON.parse(usersResurs1.responseText);
//     data.forEach((user) => {
//       if (user.website.endsWith(".com")) {
//         console.log(user);
//       }
//     });
//   } else if (usersResurs1.readyState == 4) {
//     console.log(`Desila se greska ${usersResurs1.status}`);
//   }
// });
// usersResurs1.open("GET", "https://jsonplaceholder.typicode.com/users");
// usersResurs1.send();

//4 z Ispisati korisnike koji rade u kompaniji čije ime sadrži reč „Group", ili reč „LLC".
// const request3 = new XMLHttpRequest();
// request3.addEventListener("readystatechange", function () {
//   if (request3.readyState === 4 && request3.status === 200) {
//     let data = JSON.parse(request3.responseText);
//     console.log("Cetvrti zadatak");
//     data.forEach(user => {
//       if (
//         user.company.name.includes("Group") ||
//         user.company.name.includes("LLC")
//       ) {
//         console.log(user);
//       }
//     });
//   } else if (request3.readyState === 4) {
//     console.log("Desila se greska");
//   }
// });

// request3.open("GET", "https://jsonplaceholder.typicode.com/users");
// request3.send();

// //5 Ispisati sve različite gradove u kojima rade ovi korisnici.
// const request4 = new XMLHttpRequest();
// request4.addEventListener("readystatechange", function () {
//   if (request4.readyState === 4 && request4.status === 200) {
//     let data = JSON.parse(request4.responseText);
//     console.log("Peti zadatak");

//     let gradovi = [];
//     data.forEach(user => {
//       if (
//         user.company.name.includes("Group") ||
//         user.company.name.includes("LLC")
//       ) {
//         if (gradovi.includes(user.address.city) === false)
//           gradovi.push(user.address.city);
//       }
//     });
//     console.log(gradovi);
//   } else if (request4.readyState === 4) {
//     console.log("Desila se greska");
//   }
// });

// request4.open("GET", "https://jsonplaceholder.typicode.com/users");
// request4.send();

// //6 Ispisati broj korisnika koji žive na adresi čije su obe vrednosti geografske dužine i geografske širine negativni brojevi.
// const request5 = new XMLHttpRequest();
// request5.addEventListener("readystatechange", function () {
//   if (request5.readyState === 4 && request5.status === 200) {
//     let data = JSON.parse(request5.responseText);
//     console.log("Sesti zadatak");

//     let suma = 0;
//     data.forEach(user => {
//       if (
//         Number(user.address.geo.lat) < 0 &&
//         Number(user.address.geo.lng) < 0
//       ) {
//         suma++;
//       }
//     });
//     console.log(suma);
//   } else if (request5.readyState === 4) {
//     console.log("Desila se greska");
//   }
// });

// request5.open("GET", "https://jsonplaceholder.typicode.com/users");
// request5.send();

const request2 = new XMLHttpRequest();
request2.addEventListener("readystatechange", function () {
  if (request2.readyState === 4 && request2.status == 200) {
    let date = JSON.parse(request2.responseText);

    date.forEach((el) => {
      if (el.name.includes("Clementin")) {
        console.log(el);
      }
    });
  } else if (request2.readyState === 4) {
    console.log("Desila se greska");
  }
});

request2.open("GET", "https://jsonplaceholder.typicode.com/users");
request2.send();

const request3 = new XMLHttpRequest();
request3.addEventListener("readystatechange", function () {
  if (request3.readyState === 4 && request3.status == 200) {
    let date = JSON.parse(request3.responseText);
    date.forEach((el) => {
      if (
        el.company.name.includes("Group") ||
        el.company.name.includes("LLC")
      ) {
        console.log(el);
      }
    });
  } else if (request3.readyState === 4) {
    console.log("Desila se greska");
  }
});

request3.open("GET", "https://jsonplaceholder.typicode.com/users");
request3.send();

const request4 = new XMLHttpRequest();
request4.addEventListener("readystatechange", function () {
  if (request4.readyState === 4 && request4.status == 200) {
    let date = JSON.parse(request4.responseText);
    date.forEach((el) => {
      if (
        el.address.geo.lat.startsWith("-") &&
        el.address.geo.lng.startsWith("-")
      ) {
        console.log(el);
      }
    });
  } else if (request4.readyState === 4) {
    console.log("Desila se greska");
  }
});

request4.open("GET", "https://jsonplaceholder.typicode.com/users");
request4.send();

const request5 = new XMLHttpRequest();
request5.addEventListener("readystatechange", function () {
  if (request5.readyState === 4 && request5.status == 200) {
    let data = JSON.parse(request5.responseText);

    data.forEach((el) => {
      if (el.address.city) {
        console.log(el.address.city);
      }
    });
  } else if (request5.readyState === 4) {
    console.log("Desila se greska");
  }
});

request5.open("GET", "https://jsonplaceholder.typicode.com/users");
request5.send();
