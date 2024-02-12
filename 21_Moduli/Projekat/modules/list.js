import generateImage from "./general.js";

let generateList = (parent) => {
  let ul = document.createElement("ul");
  ul.style.listStyle = "none";
  parent.append(ul);
  return ul;
};

let generateItem = (parent, src) => {
  let li = document.createElement("li");
  parent.append(li);
  let img = generateImage(src);
  li.append(img);
  return li;
};

export { generateList, generateItem };
