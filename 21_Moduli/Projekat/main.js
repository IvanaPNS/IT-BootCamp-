// import {
//   generateList,
//   generateItem as generateListItem,
// } from "./modules/list.js";
// import {
//   generateTable,
//   generateTableRow,
//   generateItem as generateTableItem,
// } from "./modules/table.js";

// let ul = generateList(document.body);
// generateListItem(ul, "images/p1.jpg");
// generateListItem(ul, "images/p2.jpg");
// generateListItem(ul, "images/p3.jpg");

// let table = generateTable(document.body);
// let tr = generateTableRow(table);
// generateTableItem(tr, "images/p1.jpg");
// generateTableItem(tr, "images/p2.jpg");
// generateTableItem(tr, "images/p3.jpg");

import * as List from "./modules/list.js";
import * as Table from "./modules/table.js";

let ul = List.generateList(document.body);
List.generateItem(ul, "images/p1.jpg");
List.generateItem(ul, "images/p2.jpg");
List.generateItem(ul, "images/p3.jpg");

let table = Table.generateTable(document.body);
let tr = Table.generateTableRow(table);
Table.generateItem(tr, "images/p1.jpg");
Table.generateItem(tr, "images/p2.jpg");
Table.generateItem(tr, "images/p3.jpg");
