//import {userData} from './baseData.js';

document.getElementById('userForm').addEventListener('submit', function (e) {
  e.preventDefault();
  let login = document.getElementById('login');
  let password = document.getElementById('password');


  //проверка логина и пароля к требованиям
  console.log(login.value);
  console.log(password.value);
  login.style.backgroundColor = login.value.match(/[a-z]+/) ? '#008000' : '#F9D0C4';
  password.style.backgroundColor = password.value.match(/\d+/) ? '#008000' : '#F9D0C4';


  //база днных пользователей
  let userDataMassive = [0];

  let idUser = userDataMassive.length;
  let userData = {
    id: idUser,
    login: login.value,
    password: password.value,
  }

  userDataMassive.push(userData);

  console.log(userDataMassive);
  console.log(userDataMassive[idUser]);

  if (login.style.backgroundColor === 'rgb(0, 128, 0)' && password.style.backgroundColor === 'rgb(0, 128, 0)') {
    window.location.href = './src/html/main_page.html';
  }

});