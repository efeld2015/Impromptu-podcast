//Document Object Model DOM. Selecting elements thru ID
var contactForm = document.querySelector("#contact");
var nameInput = document.querySelector("#name");
var emailInput = document.querySelector("#email");
var messageInput = document.querySelector("#message");

async function postData(nameValue, emailValue, messageValue) {
  response = await fetch("https://formsubmit.co/ajax/efeld2015@gmail.com", {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify({
      name: nameValue,
      email: emailValue,
      message: messageValue,
    }),
  });
  if (response.ok) {
    console.log(response);
    window.alert("It went through!");
  } else {
    console.log(response);
    window.alert("It didn't go through!");
  }
}

//form submit, prevents page refresh
function formSubmit(event) {
  event.preventDefault();

  //assigned the user input into a JS variable
  var nameValue = nameInput.value;
  var emailValue = emailInput.value;
  var messageValue = messageInput.value;

  console.log(
    "name value " +
      nameValue +
      " email value " +
      emailValue +
      " messageValue " +
      messageValue
  );

  if ((nameValue, emailValue, messageValue)) {
    // email form data
    postData(nameValue, emailValue, messageValue);

    // reset form values
    nameValue = "";
    emailValue = "";
    messageValue = "";
  }
}

//adding Event Listener to form. Actively listens for when the submit button is clicked. Runs the form submit function
contactForm.addEventListener("submit", formSubmit);
