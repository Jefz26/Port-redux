
// modal box 
const modalImages = document.querySelectorAll('.modal-img');

// Get the modal box and modal image elements
const modalBox = document.getElementById('modal-box');
const modalImg = document.getElementById('modal-img');

// Add click event listener to each modal image
modalImages.forEach(image => {
    image.addEventListener('click', onClick);
});

// Function to handle the click event on the modal images
function onClick(event) {
    // Get the clicked image source
    const src = event.target.getAttribute('data-src');

    // Set the modal image source
    modalImg.src = src;

    // Display the modal box
    modalBox.style.display = 'block';
}