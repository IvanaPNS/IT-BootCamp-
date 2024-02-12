document.getElementById("d1").innerHTML = "Ja se zovem Ivana Petrovic";

console.log("Zdravo");

console.log("Pera");

console.log("Mika");
console.log("It's all right");
console.log('It"s all right');
console.log("It's all right");

// Literali
console.log(5);
console.log(-5.189);
console.log(3 + 4); // 7
console.log("3" + "4"); // 34 konkantenacija stringova-spajanje stringova
console.log("3+4"); //3+4 kao string
console.log("3 + 4 =", 3 + 4);
console.log("3 + 4 = " + (3 + 4));
console.log(true);
console.log(false);

// Promenjive
let x; // 1) deklaracija promenljive (uvodjenje promenljive u program)

console.log(x);

x = 5;
console.log(x);

x = "Laza";
console.log(x);

let y = true; // 2) definicija promeljive (deklaracija + dodela vrednosti)
console.log(y);

const z = -7.6;
// z = 6; // ne moze da se menja  vrednost
console.log(z);

let age;
console.log(age, age + 3); // undefined, NaN - Not a Number
age = null;
console.log(age, age + 3); //null, 3

let broj = 3 + 4 * 2; // 11
console.log(broj);

broj = (3 + 4) * 2; //14
console.log(broj);

// broj +=6; //20
// console.log(broj); //isto kao ovo dole

broj = broj + 6; // 14 + 6 = 20  promenljiva br dobija novu vrednost 20
console.log(broj); //20

broj *= 5; // broj = broj * 5 = 100
console.log(broj);

x = 6;
x++;
console.log(x); //7   dodaje jedan

++x;
console.log(x); //8   dodaje jedan

x = 6;
console.log(x++); //6   post-increment  (prvo se iskoristi stara vrednost promeljive x, pa se onda uveca)
console.log(x); // 7
console.log(++x); // 8 (pre-incerment)    (prvo se uveca vrednost promenljive x , pa se onda koristi)

// beba ima 28 meseci
// 28 delimo sa 12, i trazimo kolicnik i ostatak
// console.log(28/12);
//kolicnik :
console.log(Math.floor(28 / 12)); // 2   daje kolicnik, ceo broj
//Ostatak :
console.log(28 % 12); // 4
// 28 = 2 * 12 + 4
//     (k)      (O)

console.log(7 % 3); //1
console.log(24 % 18); //6

x = 5;
y = 3;
console.log(x ** y); //125 to je 5 na 3


