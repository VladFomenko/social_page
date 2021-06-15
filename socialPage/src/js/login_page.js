import {userDataMassive} from './baseData.js';


document.getElementById('userForm').addEventListener('submit', function (e) {
  e.preventDefault();
  userNameBusy.setAttribute('hidden', true);
  let login = document.getElementById('login');
  let password = document.getElementById('password');


  //проверка логина и пароля к требованиям
  login.style.backgroundColor = login.value.match(/^[a-z]+$/gi) ? '#008000' : '#F9D0C4';
  password.style.backgroundColor = password.value.match(/^\d+$/) ? '#008000' : '#F9D0C4';


  //создание данных пользователя
  let idUser = userDataMassive.length;
  let userData = {
    id: idUser,
    login: login.value,
    password: password.value,
  }



  //проверк на унильканость
  if (login.style.backgroundColor === 'rgb(0, 128, 0)' && password.style.backgroundColor === 'rgb(0, 128, 0)') {
    let sameLogin = userDataMassive.filter((abc) => abc.login === login.value);
    if (sameLogin.length > 0) {
      userNameBusy.removeAttribute('hidden');
      login.style.backgroundColor = '#F9D0C4';
      password.style.backgroundColor = '#F9D0C4';
    }
    else {
      userDataMassive.push(userData)
    }
  }

  console.log(userDataMassive.length);

  /*
    // переход на основную страницу
    if (login.style.backgroundColor === 'rgb(0, 128, 0)' && password.style.backgroundColor === 'rgb(0, 128, 0)') {
      window.location.href = './src/html/main_page.html';
    }

   */


});