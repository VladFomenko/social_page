import {addStickyNote, db, nameS} from './baseData.js';

let arrNames = [{login: null, password: 123456}];
let checkNameTrue = 1;


document.getElementById('userForm').addEventListener('submit', function (e) {
  e.preventDefault();
  userNameBusy.setAttribute('hidden', true);
  arrNames.splice(0, arrNames.length);
  console.log('START    ' + arrNames)

  let login = document.getElementById('login');
  let password = document.getElementById('password');


  //проверка логина и пароля к требованиям
  login.style.backgroundColor = login.value.match(/^[a-z]+$/gi) ? '#008000' : '#F9D0C4';
  password.style.backgroundColor = password.value.match(/^\d+$/) ? '#008000' : '#F9D0C4';


  // добавление в базу данных если прошло регулярку
  if (login.style.backgroundColor === 'rgb(0, 128, 0)' && password.style.backgroundColor === 'rgb(0, 128, 0)') {
    const p = new Promise((resolve) => {
      return new Promise((resolve) => {
        checkNameTrue = nameS(db, arrNames, login.value, checkNameTrue);
        resolve(checkNameTrue);
      })
        .then((x) => resolve(x));
    })
    p.then((y) => {
      console.log(y)
      if (y > 0) {
        addStickyNote(db, login.value, password.value);
      } else {
        userNameBusy.removeAttribute('hidden');
        login.style.backgroundColor = '#F9D0C4';
        password.style.backgroundColor = '#F9D0C4';
      }
    })
  }
  /*
    // переход на основную страницу
    if (login.style.backgroundColor === 'rgb(0, 128, 0)' && password.style.backgroundColor === 'rgb(0, 128, 0)') {
      window.location.href = './src/html/main_page.html';
    }

   */
});

