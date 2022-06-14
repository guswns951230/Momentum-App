const images = ['city.jpg', 'ocean.jpg', 'santorini.jpg']

const chosenImage = images[Math.floor(Math.random() * images.length)];

const backgroundImage = document.createElement('img');

backgroundImage.src = `images/${chosenImage}`;

document.body.appendChild(backgroundImage);