const BACKGROUND_IMAGE = "background_image";

const images = ["0.jpg", "1.jpg", "2.jpg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImage}`;

bgImage.className = BACKGROUND_IMAGE;

document.body.appendChild(bgImage);