// 1 zadatak
// Napisati funkciju suma kojoj se prosleđuju parametri n i m, dok funkcija vraća sumu kubova brojeva od n do m.
// Pozvati funkciju i njen rezultat ispisati u konzoli.
function suma(n, m) {
  let suma = 0;
  for (i = n; i <= m; i++) {
    suma = suma + i ** 3;
  }
  return suma;
}
console.log(suma(1, 3));

//2 Napisati funkciju godine kojoj se prosleđuje parametar godRodjenja.
// Parametar godRodjenja predstavlja godinu rođenja neka osobe. Funkcija treba da vrati koliko godina ima ta (prosleđena) osoba.
// Broj godina osobe izračunati na osnovu prosleđene godine rođenja i trenutne godine koju preuzimate sa računara.
// Pozvati funkciju i dobijeni rezultat ispisati u konzoli.
function godine(godRodjenja) {
  let godina = new Date();
  let godinaTrenutna = godina.getFullYear();
  let imaGodina = godinaTrenutna - godRodjenja;
  return imaGodina;
}
console.log(godine(1986));

// 3 Napisati funkciju deljiv kojoj se prosleđuju tri parametra n, m i k. Funkcija na ekranu treba da ispiše broj brojeva od n do m koji su deljivi brojem k. Pozvati funkciju.
function deljiv(n, m, k) {
  for (i = n; i <= m; i++) {
    if (i % k == 0) {
      document.write(
        `<p>Brojevi od ${n} do ${m} koji su deljivi sa ${k} su ${i}</p>`
      );
    }
  }
}
deljiv(6, 36, 3);

// 4 Pilot želi da napravi program gde unosi vreme polatanja (sat poletanja između 0 i 23 i minut poletanja aviona između 0 i 59) i vreme sletanja aviona (sat sletanja između 0 i 23 i minut sletanja aviona između 0 i 59). Napisati funkciju pilot kojoj se prosleđuje vreme poletanja i vreme sletanja aviona, a ona pilotu u konzoli ispisuje koliko časova i minuta je trajao njegov let. Pretpostaviti da su poletanje i sletanje aviona u istom danu i da je ispravno uneo vrednosti poletanja i sletanja.

function pilot(ps, pm, ss, sm) {
  let trajanjeLeta = ss * 60 + sm - (ps * 60 + pm);
  let trajanjeLetaS = Math.floor(trajanjeLeta / 60);
  let trajanjeLetaM = trajanjeLeta % 60;
  return `Let je trajao sati: ${trajanjeLetaS} i minuta: ${trajanjeLetaM}`;
}
console.log(pilot(20, 10, 22, 5));

//5 Specijalitet jedne poslastičare je slatkiš po imenu jaban koje se pravi od jabuka i banana. Za jednu porciju ovog slatkiša potrebme su 2 jabuke i 3 banane. Poslastičara jabuke i banane dobija od jednog lokalnog dobavljača. U svakoj isporuci ima 20% oštećenih jabuka koje se ne mogu iskoristiti za pripremu jaban slatkiša. Napisati funkciju jaban koja za prosleđeni broj isporučenih jabuka i prosleđeni broj isporučenih banana, određuje i vraća koliko porcija jaban slatkiša je moguće da poslastičar napravi. Broj oštećenih jabuka zaokružiti na najbliži ceo broj.

function jaban(jabuka, banana) {
  let porcijaJ = Math.floor(jabuka / 2.4);
  let porcijaB = Math.floor(banana / 3);
  return porcijaJ < porcijaB ? porcijaJ : porcijaB;
}
console.log(`Moguce je napraviti ${jaban(15, 36)} porcija jabana`);
