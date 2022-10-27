// DOM selectors
var aboutImage = document.querySelector("#about-image");
var aboutText = document.querySelector("#about-text");
var firstButton = document.querySelector("#btn-1");
var secondButton = document.querySelector("#btn-2");

// create a variable to store current carousel index
var carouselInfoIndex = 0;

// card info will reflect current carousel index
function backButton() {
  if (carouselInfoIndex === 0) {
    carouselInfoIndex = 2;
  } else {
    carouselInfoIndex = carouselInfoIndex - 1;
  }
  updateInfo();
}

function forwardButton() {
  if (carouselInfoIndex === 2) {
    carouselInfoIndex = 0;
  } else {
    carouselInfoIndex = carouselInfoIndex + 1;
  }
  updateInfo();
}

function updateInfo() {
  if (carouselInfoIndex === 0) {
    aboutImage.src = "https://dummyimage.com/600x400/000/fff";
    aboutText.textContent =
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt ut laboriosam error atque quis, dolorem minus quaerat neque sapiente mollitia, ad eos sint est a! Magnam, nesciunt! Distinctio, quaerat quisquam.";
  } else if (carouselInfoIndex === 1) {
    aboutImage.src = "https://dummyimage.com/600x400/000/0011ff&text=EMILY";
    aboutText.textContent = "Emily's info";
  } else {
    aboutImage.src = "https://dummyimage.com/600x400/000/0011ff&text=SHAWN";
    aboutText.textContent = "Shawn's info";
  }
}

// when a button is pressed current index is changed
firstButton.addEventListener("click", backButton);
secondButton.addEventListener("click", forwardButton);
