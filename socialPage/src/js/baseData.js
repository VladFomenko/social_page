export let db;
let userData = indexedDB.open("users", 1);


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


export let addStickyNote =  (db, log, pass) => {
  // Запустим транзакцию базы данных и получите хранилище объектов Notes
  let tx = db.transaction(['notes'], 'readwrite');
  let store = tx.objectStore('notes');
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

export let nameS = (db, arr, log, acc) => {

  // Запустим транзакцию базы данных и получите хранилище объектов Notes
  let tx = db.transaction(['notes'], 'readonly');
  let store = tx.objectStore('notes');


  return new Promise((resolve, reject) => {
    // Настройте запрос, чтобы получить заметку с ключом 1
    let req = store.getAll();

    req.onsuccess = (event) => {
      let note = event.target.result;


      for (let i = 0; i < note.length; i++) {
        let x = note[i].login;
        if (x === log) {
          acc = 0;
          break;
        } else {
          acc = 1;
        }
      }
      resolve(acc);
    }
// Если мы получим ошибку, например, заметка не существует в хранилище , мы обрабатываем ошибку в обработчике onerror
    req.onerror = (event) => {
      reject(alert('error getting note 1 ' + event.target.errorCode));
    }
  })
};


