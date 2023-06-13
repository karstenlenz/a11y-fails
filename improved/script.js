window.onload = init

function init() {
    const menuButton = document.querySelector('#menu-btn')
    menuButton.addEventListener('click', toggleMenu)

    const formElement = document.getElementById('contact-form')
    formElement.addEventListener('submit', (event) => handleSubmit(event))

    const dialogElement = document.getElementById('modal')
    dialogElement.showModal()
}

async function handleSubmit(event) {
    event.preventDefault()
    const form = event.target

    const formData = new FormData(form)
    for (var [key, value] of formData.entries()) {
        console.log(key, value)
    }

    await fetch('/contact', {
        method: 'post',
        body: formData,
    })
        .then((response) => response.json())
        .then((data) => showResult(data.message))

    event.target.classList.add('hidden')
}

function showResult(text) {
    const responseElement = document.createElement('div')
    responseElement.innerHTML = text

    const mainElement = document.querySelector('main')
    mainElement.appendChild(responseElement)
}

function toggleMenu() {
    const navElement = document.querySelector('.navigation')
    navElement.classList.toggle('menu-open')
}
