import generateImage from "./general.js";

let generateTable = (parent) => {
  let table = document.createElement("table");
  table.style.border = "2px solid red";
  parent.append(table);
  return table;
};

let generateTableRow = (parent) => {
  let tr = document.createElement("tr");
  parent.append(tr);
  return tr;
};

let generateItem = (parent, src) => {
  let td = document.createElement("td");
  parent.append(td);
  let img = generateImage(src);
  td.append(img);
  return td;
};

export { generateTable, generateTableRow, generateItem };
