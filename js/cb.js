const arr = [1, 2, 3, 4, 5, 6, 6, 7, 8, 8, 9];

function nasForEach(niz, callback) {
  for (let i = 0; i < niz.length; i++) {
    const element = niz[i];
    const indeks = i;
    callback(element, indeks);
  }
}

const newArr = [];

function iva(element, index) {
  newArr.push(element * 3);
}

// nasForEach(arr, iva);
arr.forEach(iva);
nasForEach(arr, iva);

arr.forEach((em, i) => {});
nasForEach(arr, (el, i) => {});
// arr.forEach(iva);

// console.log(newArr);

function testGlupavaFunkcija(niz) {
  const newArr = [];
  niz.forEach((el) => newArr.push(el * 3));
  return newArr;
}
const x = testGlupavaFunkcija(arr);
console.log(x);

const arr = [1, 2, 3, 4, 5, 6, 6, 7, 8, 8, 9];

let arr1 = [];
arr.forEach((el, i) => {
  arr1.push(el * 3);
});
console.log(arr1);

let arr2 = [];

function ivaCallBack(el, i) {
  arr2.push(el - 2);
}

arr.forEach(ivaCallBack);
console.log(arr2);

let a = [6, 8, 9, 3, 1, -10, -5];

let maxVr = (niz) => {
  let max = niz[0];
  niz.forEach((el) => {
    if (el > max) {
      max = el;
    }
  });
  return max;
};
console.log(maxVr(a));
