window.onload = () => {
  const header = document.querySelector("header");

  window.onscroll = () => {
    if (window.scrollY > 100) {
      header.style.backgroundColor = "#1d6a3f";
    } else {
      header.style.backgroundColor = "transparent";
    }
  };

  const mobileNav = document.querySelector(".mobile-nav");
  const menuButton = document.querySelector(".menu-button");
  const closeButton = document.querySelector(".close");

  menuButton.onclick = () => {
    mobileNav.style.display = "block";

    setTimeout(() => {
      mobileNav.style.opacity = "1";
    }, 100);
  };

  closeButton.onclick = () => {
    mobileNav.style.opacity = "0";
    setTimeout(() => {
      mobileNav.style.display = "none";
    }, 300);
  };

  const slider = document.querySelector(".slider");
  const twentyFourButton = document.querySelector(".twenty-four-months");
  const twelveButton = document.querySelector(".twelve-months");
  const carousel = document.querySelector(".carousel-container-wrap");

  twentyFourButton.onclick = () => {
    slider.style.transform = "translateX(0%)";
    twelveButton.classList.remove("active");
    twentyFourButton.classList.add("active");
    carousel.style.transform = "translateX(0%)";
  };

  twelveButton.onclick = () => {
    slider.style.transform = "translateX(100%)";
    twentyFourButton.classList.remove("active");
    twelveButton.classList.add("active");
    carousel.style.transform = "translateX(-100%)";
  };
};
