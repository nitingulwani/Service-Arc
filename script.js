document.addEventListener("DOMContentLoaded", function() {
    // Function to change the color of the circle
    function changeColor(circleElement, color) {
      circleElement.style.backgroundColor = color;
    }
  
    // Get the circle elements
    const circles = document.querySelectorAll('.circle');
  
    // Change the color of the circles after 3 seconds
    setTimeout(() => {
      changeColor(circles[0], 'green');  // Change color of the first circle to green
      changeColor(circles[1], 'red');    // Change color of the second circle to red
      changeColor(circles[2], 'yellow'); // Change color of the third circle to yellow
    }, 5000); // 3000 milliseconds (3 seconds)
  });
  