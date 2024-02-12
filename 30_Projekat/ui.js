export class ChatUI {
  constructor(l) {
    this.list = l;
  }
  set list(l) {
    this._list = l;
  }
  get list() {
    return this._list;
  }

  // metode

  //Dodavanje 0 ispred jednocifrenih vrednosti
  formatDate(vreme) {
    const danasnjiDatum = new Date();
    if (danasnjiDatum.toDateString() === vreme.toDateString()) {
      // console.log(vreme.getHours(), " : ", vreme.getMinutes());
      return `${String(vreme.getHours()).padStart(2, "0")}:${String(
        vreme.getMinutes()
      ).padStart(2, "0")}`;
    } else {
      return `${String(vreme.getDate()).padStart(2, "0")}.${String(
        vreme.getMonth() + 1
      ).padStart(2, "0")}.${String(vreme.getFullYear()).padStart(
        2,
        "0"
      )}. - ${String(vreme.getHours()).padStart(2, "0")}:${String(
        vreme.getMinutes()
      ).padStart(2, "0")}`;
    }
  }
  templateLi(data) {
    console.log(data);
    if (Array.isArray(data)) {
      this.list.innerHTML = "";
      data.forEach((el) => {
        if (JSON.parse(localStorage.getItem("username")) === el.username) {
          this.list.innerHTML += `<li class="desno">${el.username}: ${
            el.message
          } <br> ${this.formatDate(el.created_at.toDate())} </li>`;
        } else {
          this.list.innerHTML += `<li class="levo">${el.username}: ${
            el.message
          } <br> ${this.formatDate(el.created_at.toDate())} </li>`;
        }
      });
    } else if (JSON.parse(localStorage.getItem("username")) === data.username) {
      this.list.innerHTML += `<li class="desno"><span>${
        data.username
      }:</span>  ${data.message} <br> ${this.formatDate(
        data.created_at.toDate()
      )} </li>`;
    } else {
      this.list.innerHTML += `<li class="levo" ><span>${
        data.username
      }:</span> ${data.message} <br> ${this.formatDate(
        data.created_at.toDate()
      )} </li>`;
    }
  }
  delete() {
    this.list.innerHTML = "";
  }
}
