document.getElementById('userForm').addEventListener('submit', function (e) {
  e.preventDefault();
  let login = document.getElementById('login');
  let password = document.getElementById('password');

  console.log(login);
  console.log(password);
  login.style.backgroundColor = login.value.match(/[a-z]+/) ? '#008000' : '#F9D0C4';
  password.style.backgroundColor = password.value.match(/\d+/) ? '#008000' : '#F9D0C4';

});