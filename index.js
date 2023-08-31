let firstName = document.getElementById('fName');
let lastName = document.getElementById('lName');
let email = document.getElementById('email');
let password = document.getElementById('pass');
let emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/g

let btn = document.getElementById('btn');
btn.addEventListener('click', () => {
  let firstNameValue = firstName.value;
  let lastNameValue = firstName.value;
  let emailValue = firstName.value;
  let passwordValue = firstName.value;

  if (emailRegex.test(emailValue) || emailValue === '') {
    emailErr.style.display = 'block';
    email.classList.add('borderErr');
  }

  if (firstNameValue === '') {
    fnErr.style.display = 'block';
    firstName.classList.add('borderErr');
  }

  if (lastNameValue === '') {
    lnErr.style.display = 'block';
    lastName.classList.add('borderErr');
  }

  if (passwordValue === '') {
    passErr.style.display = 'block';
    password.classList.add('borderErr');
  }

  firstName.value = '';
  lastName.value = '';
  email.value = '';
  password.value = '';
});