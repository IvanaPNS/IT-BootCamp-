// 15)U promenljivu uneti broj koji predstavlja temperaturu vazduha.
// Na ekranu ispisati „ekstremna temperatura“ ukoliko je temperatura manja od -15 stepeni Celzijusovih ili veća od 40 stepeni Celzijusovih.
//prvi nacin
let t = 5;
if (t < -15 || t > 40) {
  console.log("extremna temperatura");
} else {
  console.log("nije extremna temperatura");
}

// drugi nacin
if (t >= -15 && t <= 40) {
  console.log("Nije extremna temperatura");
} else {
  console.log("extremna temperatura");
}

//16 Ispitati da li je trenutna godina prestupna. (godinu preuzeti iz vremena na Vašem računaru).Godina je prestupna ako je deljiva sa 4 i nije deljiva sa 100 ili ako je deljiva sa 400.
let d = new Date();
let godina = d.getFullYear();
if ((godina % 4 == 0 && godina % 100 != 0) || godina % 400 == 0) {
  console.log("Prestupna je");
} else {
  console.log(" Nije Prestupna ");
}

//17 Jedan butik ima radno vreme od 9h do 20h radnim danima, a vikendom od 10h do 18h. Preuzeti dan i vreme sa računara, ispitati “otvoreno” ukoliko je butik trenutno otvoren.
// U suprotnom ispisati “zatvoreno”.
// (Ko bude imao vremena: Ukoliko je butik trenutno otvoren, prikazati sličicu otvorenih vrata na ekranu. Ukoliko je butik trenutno zatvoren, prikazati sličicu zatvorenih vrata.)

// let dan = d.getDay();
// let vreme = d.getHours();
// if (dan != 0 && dan != 6 && vreme >= 9 && vreme < 20) {

//     document.write("Otvoreno");

// } else if ((dan == 6 || dan == 0) && vreme >= 10 && vreme < 18){

//     console.log("Otvoreno");
//   } else {
//     console.log("Zatvoreno");
//  }
// }

let dan = d.getDay();
let vreme = d.getHours();
if (dan != 0 && dan != 6 && vreme >= 9 && vreme < 20) {
  document.write(
    '<img src="https://images.pexels.com/photos/1544420/pexels-photo-1544420.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1">'
  );
} else if ((dan == 6 || dan == 0) && vreme >= 10 && vreme < 18) {
  document.write(
    '<img src="https://images.pexels.com/photos/1544420/pexels-photo-1544420.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1">'
  );
} else {
  document.write(
    '<img src="https://images.pexels.com/photos/277559/pexels-photo-277559.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1">'
  );
}

//18)
//a)

// let b1 = 6;
// let b2 = -5;
// let b3 = 0;
// let maks = b1;
// if (b2 > maks) {
//   maks = b2;
// }
// if (b3 > maks) {
//   maks = b3;
// }
// console.log(`Najveci od brojeva je ${maks}`);

// //b

// let maximum = null;
// if (b1 > b2) {
//   maximum = b1;
// } else {
//   maximum = b2;
// }
// if (maximum < b3) {
//   maximum = b3;
// }
// console.log(`Najveci broj ke${maximum}`);

// //c
// if (b1 > b2) {
//   if (b1 > b3) {
//     console.log(`Najveci je ${b1}`);
// } else {
//       console.log(`Najveci je ${b3}`);
//   }
// }
// else if(b2>b3) {

// }
