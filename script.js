window.onload = init;

function init() {
  const menuButton = document.querySelector('#menu-btn');
  menuButton.addEventListener('click', toggleMenu);

  const formElement = document.getElementById('contact-form');

  const submitButton = document.getElementById('submit-button');
  submitButton.addEventListener('click', (event) => handleSubmit(formElement));
}

async function handleSubmit(formElement) {

  const formData = new FormData(formElement);
  for (var [key, value] of formData.entries()) {
    console.log(key, value);
  }

  // await fetch('/contact', {
  //   method: 'post',
  //   body: formData,
  // })
  //   .then((response) => response.json())
  //   .then((data) => showResult(data.message));

  formElement.classList.add('hidden');
  alert('submitting form')
}

function showResult(text) {
  const responseElement = document.createElement('div');
  responseElement.innerHTML = text;

  const mainElement = document.querySelector('main');
  mainElement.appendChild(responseElement);
}

function toggleMenu() {
  const navElement = document.querySelector('.navigation');
  navElement.classList.toggle('menu-open');
}
