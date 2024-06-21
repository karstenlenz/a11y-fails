
function validateForm(event) {
  event.preventDefault()
  event.stopPropagation()
  console.log('validating')
  let name = document.forms["contactForm"]["name"].value;
  let email = document.forms["contactForm"]["email"].value;
  if (name.length < 3) {
    document.forms["contactForm"]["name"].classList.add('error')
    return false;
  } else {
    document.forms["contactForm"]["name"].classList.remove('error')

  }
  if (validateEmail(email)) {
    document.forms["contactForm"]["email"].classList.add('error')
    return false;
  } else {
    document.forms["contactForm"]["email"].classList.remove('error')

  }

alert('Erfolgreich abgeschickt')
  return true
}




function validateEmail(email) {
  const emailRegEx =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  return !emailRegEx.test(email) 
}
