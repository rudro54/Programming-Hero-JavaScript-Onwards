const images = [
    'images/pic-1.jpg',
    'images/pic-2.jpg',
    'images/pic-3.jpg',
    'images/pic-4.jpg',
    'images/pic-5.jpg',
    'images/pic-6.jpg',
    'images/pic-7.jpg',
    'images/pic-8.jpg',
    'images/pic-9.jpg',
];
let imageIndex = 0;
const image = document.getElementById('slider-image');
setInterval(() => {
    if (imageIndex === images.length) {
        imageIndex = 0;
    }
    const imageLink = images[imageIndex];
    image.setAttribute('src', imageLink);
    imageIndex++;

}, 2000)