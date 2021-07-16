
/*
let userDataObject = {};
let id000001 = {
  id: "1",
  login: "Ivan",
  password: 123456,
};
let  userDataMassive = [];

userDataMassive.push(id000001.id);
//console.log(userDataMassive[0].login);
console.log(userDataMassive);



export let userDataMassive = [
  {
    id: '0',
    login: '0',
    password: '0',
  }
];

 */

export let db;
export let userData = indexedDB.open("users", 1);

//on upgrade needed
userData.onupgradeneeded = e => {
  console.log("upgrade is called");
  db = e.target.result;
  let notes = db.createObjectStore('notes', {autoIncrement: true});
}

//on success
userData.onsuccess = e => {
  db = e.target.result;
}

//on error
userData.onerror = e => {
  alert('error opening database ' + e.target.errorCode);
}


export let addStickyNote = (db, log, pass) => {
  // Запустим транзакцию базы данных и получите хранилище объектов Notes
  let tx = db.transaction(['notes'], 'readwrite');
  let store = tx.objectStore('notes');
  console.log(store)
  // Добаляем заметку в хранилище объектов
  let note = {login: log, password: pass};
  store.add(note);
  // Ожидаем завершения транзакции базы данных
  tx.oncomplete = () => {
    console.log('stored note!')
  }
  tx.onerror = (event) => {
    alert('error storing note ' + event.target.errorCode);
  }
}