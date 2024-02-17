let slideIndex = 0;
showSlides();

function showSlides() {
  let slides = document.getElementsByClassName("mySlides");
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
    slides[i].style.left = "100%"; // Start from the right side
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex - 1].style.display = "block";
  slides[slideIndex - 1].style.left = "0"; // Slide to the left
  setTimeout(showSlides, 3000); // Change image every 3 seconds
}
