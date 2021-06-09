document.getElementById('user_form').addEventListener('submit', function (e) {
  e.preventDefault();
  let login = document.getElementById('login');
  let password = document.getElementById('password');

  console.log(login);
  console.log(password);
  login.style.backgroundColor = login.value.match(/(^[a-z\d\-]+@[a-z\d\-]+\.[a-z\d\-]+$)|(^[a-z\d\-]+[a-z\d.\-]*[a-z\d-]+@[a-z\d-]+[a-z\d.\-]*\.[a-z\d]+$)/gi) ? '#008000' : '#F9D0C4';

});