const button = document.getElementById('colorButton'); // Get the button element by its id
button.addEventListener('click', function() { // Add a click event listener
    const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16); // Generate a random color
    button.style.backgroundColor = randomColor; // Change the background color of the button

});