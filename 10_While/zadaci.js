// zadatak 1b
let i = 1;
while (i <= 20) {
  console.log(i);
  i++;
}

// zadatak 1a
i = 1;
let poruka = "";
while (i <= 20) {
  poruka = poruka + i + " ";
  i++;
}
console.log(poruka);

//2zadatak

// 1 nacin

i = 20;
while (i >= 1) {
  console.log(i);
  i--;
}

//2 nacin

i = 1;
while (i <= 20) {
  console.log(21 - i);
  i++;
}

/*
...
*/
//zadatak 3

//1 nacin

i = 1;
while (i <= 20) {
  if (i % 2 == 0) {
    console.log(i);
  }
  i++;
}

// 2nacin

i = 2;
while (i <= 20) {
  console.log(i);
  i = i + 2; // i += 2
}

// 4 zada
n = 15;
i = 1;
while (i <= n) {
  let paragraph = document.createElement("p");
  paragraph.textContent = "This is paragraph " + i;
  if (i % 3 == 1) {
    paragraph.style.color = "red";
  } else if (i % 3 == 2) {
    paragraph.style.color = "green";
  } else {
    paragraph.style.color = "blue";
  }
  document.body.appendChild(paragraph);
  i++;
}
