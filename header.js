window.addEventListener("scroll", function () {
  const header = document.querySelector("header");
  header.classList.toggle("scrolled", window.scrollY > 0);
});


  document.querySelector(".hamburger-menu").addEventListener("click", function () {
      console.log("Hamburger menu clicked");
      var dropdownContainers = document.querySelectorAll(".dropdown-container");
      dropdownContainers.forEach(function (container) {
        console.log("Toggling dropdown container visibility");
        container.classList.toggle("active");
      });
    });