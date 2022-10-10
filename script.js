window.onload = () => {
  const slider = document.querySelector(".slider");
  const twentyFourButton = document.querySelector(".twenty-four-months");
  const twelveButton = document.querySelector(".twelve-months");
  const carousel = document.querySelector(".carousel-container-wrap");

  twentyFourButton.onclick = () => {
    slider.style.transform = "translateX(0%)";
    twelveButton.classList.remove("active");
    twentyFourButton.classList.add("active");
    carousel.style.transform = "translateX(0%)"
  };

  twelveButton.onclick = () => {
    slider.style.transform = "translateX(100%)";
    twentyFourButton.classList.remove("active");
    twelveButton.classList.add("active");
    carousel.style.transform = "translateX(-100%)"
  };
};
