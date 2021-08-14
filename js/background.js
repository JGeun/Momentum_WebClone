const images = [
    "image0.jpg", "image1.jpg", "image2.jpg"
]

const chosenImage = images[Math.floor(Math.random()*images.length)];

const bgImage = document.createElement("img");
bgImage.src = `/images/${chosenImage}`;

document.body.appendChild(bgImage);