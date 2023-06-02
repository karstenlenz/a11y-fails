window.onload = init;

function init() {
  const menuButton = document.querySelector('#menu-btn');
  const teaserButton = document.querySelector('#teaser-button');
  menuButton.addEventListener('click', toggleMenu);

  const formElement = document.getElementById('contact-form');

  const submitButton = document.getElementById('submit-button');
  submitButton.addEventListener('click', (event) => handleSubmit(formElement));
  teaserButton.addEventListener('click', (event) => navigateToUrl('https://www.iteratec.com'));
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

function navigateToUrl(url) {
window.location.href = url
}
