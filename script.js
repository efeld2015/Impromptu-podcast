//Document Object Model DOM. Selecting elements thru ID
var contactForm = document.querySelector('#contact-form');
var nameInput = document.querySelector('#name');
var emailInput = document.querySelector('#email');
var messageInput = document.querySelector('#message');
//form submit, prevents page refresh
function formSubmit(event) {
  event.preventDefault()
  
  //assigned the user input into a JS variable
  var nameValue = nameInput.value
  var emailValue = emailInput.value 
  var messageValue = messageInput.value

  console.log({nameText, emailValue, messageText});

}
//adding Event Listener to form. Actively listens for when the submit button is clicked. Runs the form submit function
contactForm.addEventListener('submit', formSubmit)
