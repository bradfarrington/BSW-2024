window.addEventListener("scroll", function () {
  const header = document.querySelector("header");
  header.classList.toggle("scrolled", window.scrollY > 0);
});

      // Get the header button element
const headerButton = document.getElementById('header-button');

// Function to handle scroll event
function handleScroll() {
    // Get the scroll position of the window
    const scrollPosition = window.scrollY || window.pageYOffset;

    // Define a threshold to determine when to hide the header button
    const threshold = 200; // Adjust this value according to your design

    // Check if the scroll position is greater than the threshold
    if (scrollPosition > threshold) {
        // If scroll position is greater than the threshold, hide the header button
        headerButton.style.display = 'none';
    } else {
        // If scroll position is less than or equal to the threshold, show the header button
        headerButton.style.display = 'block';
    }
}

// Attach scroll event listener to the window
window.addEventListener('scroll', handleScroll);