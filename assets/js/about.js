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
    aboutImage.src = "https://www.sidehustlenation.com/wp-content/uploads/2019/04/podcast-production-process-fb-1.jpg";
    aboutText.textContent = "Impromptu is a podcast for music nerds! We are classically trained, work as conductors, composers, and performers, and we love all types of music;" 
  } else if (carouselInfoIndex === 1) {
    aboutImage.src = "https://i.pinimg.com/736x/1b/17/58/1b1758db44922fc156544c85b989c75c.jpg";
    aboutText.textContent = "Emily's info";
  } else {
    aboutImage.src = "https://upload.wikimedia.org/wikipedia/en/f/fc/Paul_Bettany_as_Vision.jpg";
    aboutText.textContent = "Shawn's info";
  }
}

// run udpate info function on page load
updateInfo();

// when a button is pressed current index is changed
firstButton.addEventListener("click", backButton);
secondButton.addEventListener("click", forwardButton);
