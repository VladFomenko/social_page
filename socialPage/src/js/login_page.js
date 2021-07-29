import {addStickyNote, db, loginCheckDuplicates, authorizationCheck} from './baseData.js';

let checkNameTrue = 1;


document.getElementById('registration').addEventListener('click', function (e) {
  e.preventDefault();

  userNameBusy.setAttribute('hidden', true);
  checkLogPassСorrectly.setAttribute('hidden', true);
  authorizationErr.setAttribute('hidden', true);

  let login = document.getElementById('login');
  let password = document.getElementById('password');

  let loginCheckCorrectly = login.value.match(/^[a-z]+$/gi) ? true : false;
  let passwordCheckCorrectly = password.value.match(/^\d+$/) ? true : false;

  // проверка на регулярки и существующий логин
  if (loginCheckCorrectly === false || passwordCheckCorrectly === false) {
    checkLogPassСorrectly.removeAttribute('hidden');
  } else {
    const p = new Promise((resolve, reject) => {
      checkNameTrue = loginCheckDuplicates(db, login.value, checkNameTrue);
      resolve(checkNameTrue);
    })
    p.then((y) => {
      if (y > 0) {
        addStickyNote(db, login.value, password.value);
        alert("add user profile");
        //window.location.href = './src/html/main_page.html';
      } else {
        userNameBusy.removeAttribute('hidden');
      }
    })
  }
});

document.getElementById('authorization').addEventListener('click', function (e) {
  e.preventDefault();

  userNameBusy.setAttribute('hidden', true);
  authorizationErr.setAttribute('hidden', true);
  checkLogPassСorrectly.setAttribute('hidden', true);

  let login = document.getElementById('login');
  let password = document.getElementById('password');

  let loginCheckCorrectly = login.value.match(/^[a-z]+$/gi) ? true : false;
  let passwordCheckCorrectly = password.value.match(/^\d+$/) ? true : false;

  // проверка на регулярки и существующий логин
  if (loginCheckCorrectly === false || passwordCheckCorrectly === false) {
    chechLogPassСorrectly.removeAttribute('hidden');
  } else {
    const p = new Promise((resolve, reject) => {
      checkNameTrue = authorizationCheck(db, login.value, password.value, checkNameTrue);
      resolve(checkNameTrue);
    })
    p.then((y) => {
      if (y > 0) {
        authorizationErr.removeAttribute('hidden');
        //window.location.href = './src/html/main_page.html';
      } else {
        alert("load profile");
      }
    })
  }
});