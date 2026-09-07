const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute(
    "class",
    isOpen ? "ri-close-line" : "ri-menu-4-line"
  );
});

navLinks.addEventListener("click", () => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-4-line");
});

const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

ScrollReveal().reveal(".header__container .section__header", {
  ...scrollRevealOption,
});

const swiper = new Swiper(".swiper", {
  loop: true,
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 0,
    depth: 0,
    modifier: 1,
    scale: 0.9,
    stretch: 0,
  },
});

ScrollReveal().reveal(".service__container .section__subheader", {
  ...scrollRevealOption,
});
ScrollReveal().reveal(".service__container .section__header", {
  ...scrollRevealOption,
  delay: 500,
});

ScrollReveal().reveal(".service__row:nth-child(2n-1) img", {
  ...scrollRevealOption,
  origin: "left",
});
ScrollReveal().reveal(".service__row:nth-child(2n) img", {
  ...scrollRevealOption,
  origin: "right",
});
ScrollReveal().reveal(".service__details h4", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".service__details p", {
  ...scrollRevealOption,
  delay: 1000,
});
ScrollReveal().reveal(".explore_service", {
  ...scrollRevealOption,
  delay: 1500,
});
ScrollReveal().reveal(".vehicle-category", {
  ...scrollRevealOption,
  delay: 1500,
});

const instagram = document.querySelector(".instagram__images");

const instagramContent = Array.from(instagram.children);

instagramContent.forEach((item) => {
  const duplicateNode = item.cloneNode(true);
  duplicateNode.setAttribute("aria-hidden", true);
  instagram.appendChild(duplicateNode);
});

// IMAGE SLIDER SCRIPT
const slider = document.querySelector('.slide-container');

if (slider) {
  const slides = slider.querySelectorAll('.slides img');
  const nextButton = slider.querySelector('.next');
  const prevButton = slider.querySelector('.prev');
  const dots = slider.querySelectorAll('.dot');
  let currentIndex = 0;
  let autoSlideTimer;
  let pointerStartX = null;

  function updateIndicators() {
    dots.forEach((dot, index) => {
      const isCurrent = index === currentIndex;
      dot.classList.toggle('active', isCurrent);
      dot.setAttribute('aria-current', isCurrent ? 'true' : 'false');
    });
  }

  function showSlide(nextIndex, direction = 'next') {
    const previousIndex = currentIndex;
    currentIndex = (nextIndex + slides.length) % slides.length;

    slides[previousIndex].style.animation = `${direction}1 0.5s ease-in forwards`;
    slides[currentIndex].style.animation = `${direction}2 0.5s ease-in forwards`;
    slides[currentIndex].classList.add('active');
    slides[previousIndex].classList.remove('active');
    updateIndicators();
  }

  function slideNext() {
    showSlide(currentIndex + 1, 'next');
  }

  function slidePrev() {
    showSlide(currentIndex - 1, 'prev');
  }

  function restartAutoSliding() {
    clearInterval(autoSlideTimer);
    autoSlideTimer = setInterval(slideNext, 3000);
  }

  nextButton.addEventListener('click', () => {
    slideNext();
    restartAutoSliding();
  });
  prevButton.addEventListener('click', () => {
    slidePrev();
    restartAutoSliding();
  });

  dots.forEach((dot) => {
    dot.addEventListener('click', () => {
      const targetIndex = Number(dot.dataset.slide);
      if (targetIndex !== currentIndex) {
        showSlide(targetIndex, targetIndex > currentIndex ? 'next' : 'prev');
      }
      restartAutoSliding();
    });
  });

  slider.addEventListener('pointerdown', (event) => {
    pointerStartX = event.clientX;
    slider.setPointerCapture(event.pointerId);
  });

  slider.addEventListener('pointerup', (event) => {
    if (pointerStartX === null) return;
    const swipeDistance = event.clientX - pointerStartX;
    pointerStartX = null;
    if (Math.abs(swipeDistance) < 50) return;

    if (swipeDistance < 0) slideNext();
    else slidePrev();
    restartAutoSliding();
  });

  slider.addEventListener('pointercancel', () => {
    pointerStartX = null;
  });

  slider.addEventListener('mouseenter', () => clearInterval(autoSlideTimer));
  slider.addEventListener('mouseleave', restartAutoSliding);
  updateIndicators();
  restartAutoSliding();
}


//BACK TO TOP BUTTON

const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", function () {

    if (window.scrollY > 300) {
        backToTop.classList.add("show");
    } else {
        backToTop.classList.remove("show");
    }

});


backToTop.addEventListener("click", function () {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});
