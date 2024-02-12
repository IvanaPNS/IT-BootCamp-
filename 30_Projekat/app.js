import { Chatroom } from "./chat.js";
import { ChatUI } from "./ui.js";
// let chatroom2 = new Chatroom("#homework", "pedja");
// let chatroom3 = new Chatroom("#js", "ana");
// console.log(chatroom1);
// console.log(chatroom2);
// console.log(chatroom3);

//DOM
let listaPodaci = document.getElementById(`lista`);
// let btnSend = document.getElementById(`btnSend`);
let btnUpdate = document.getElementById(`btnUpdate`);
let inputMessage = document.getElementById(`inputMessage`);
let inputUsername = document.getElementById(`inputUsername`);
let formMessage = document.getElementById(`formMessage`);
let updateUserName = document.getElementById(`poruka`);
let navRooms = document.querySelector("nav");

//Lokalna memorija
let username = "anonymus";
if (localStorage.username) {
  username = JSON.parse(localStorage.getItem("username"));
}

//Objekti
let chatroom = new Chatroom("#js", username);
let chatui = new ChatUI(listaPodaci);

console.log(chatroom.room);

// console.log(chatroom);

// Prikaz poruke na stranici
chatroom.getChats((data) => {
  chatui.templateLi(data);
});

//Kada je Submit dugme Send posalji poruku
formMessage.addEventListener("submit", (e) => {
  e.preventDefault();

  if (inputMessage.value.trim() != "") {
    chatroom.addChat(inputMessage.value);
    formMessage.reset();
  }
});
//Kada se klikne na dugme Update realizovati da se promeni korisničko ime korisnika koji šalje poruku
async function getChatsList() {
  // const getDoc = db.getDoc
  const docsRef = await db.collection("chats").orderBy("created_at");
  const mainDocs = [];

  const docs = await docsRef.get();
  docs.forEach(async (doc) => {
    mainDocs.push({ ...doc.data(), _id: doc.id });
  });

  return mainDocs;
}

btnUpdate.addEventListener("click", (e) => {
  e.preventDefault();

  getChatsList().then((data) => chatui.templateLi(data));

  let updateUser = inputUsername.value;
  console.log(chatroom.room);
  chatroom.username = updateUser;
  if (
    updateUser.length > 2 &&
    updateUser.length < 10 &&
    updateUser.trim() != ""
  ) {
    localStorage.setItem("username", JSON.stringify(updateUser));
    updateUserName.innerHTML += JSON.parse(localStorage.getItem("username"));
    updateUserName.classList.add("prikaziPoruku");
    setTimeout(() => {
      updateUserName.classList.remove("prikaziPoruku");
      updateUserName.innerHTML = "<p>Novo korisnicko ime:</p>";
    }, 3000);
  }
  inputUsername.value = "";
});

// Dugmad za promenu soba
navRooms.addEventListener("click", (e) => {
  if (e.target.tagName == "BUTTON") {
    // 1. Uzimam ime sobe na koju je kliknuto
    let newRoom = e.target.textContent;
    // 2. Update sobe na koju je kliknuto
    chatroom.room = newRoom;

    // 3. Izbrisati sve poruke sa ekrana
    chatui.delete();
    // 4. Prikaži četove
    chatroom.getChats((data) => {
      chatui.templateLi(data);
    });
  }
});
