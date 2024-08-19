document.addEventListener('DOMContentLoaded', () => {
  const menuButton = document.getElementById('open-menu');
  const mobileNav = document.querySelector('.mobile-nav'); // Assuming you only need the first element
  const heroBg = document.getElementById('hero-container');
  const heroTextDisplay = document.getElementById('hero-text'); // Corrected typo
  const testimonials = document.querySelectorAll('.testimonials');
  const dots = document.querySelectorAll('.dots');
  const prevBtn = document.querySelector('.prev');
  const nextBtn = document.querySelector('.next');

  const heroTexts = [
    "We help you make smart investments",
    "We help you find the perfect property",
    "We help you find your dream home"
  ];

  menuButton.addEventListener('click', () => {
    mobileNav.classList.toggle('active');
  });

  let currentIndex = 0;

  function rotateHeroText() {
    if (heroTexts.length > 0) {
      heroTextDisplay.innerText = heroTexts[currentIndex];
      currentIndex = (currentIndex + 1) % heroTexts.length
    }
  }

  rotateHeroText();
  setInterval(rotateHeroText, 3000);
  
  
let slideIndex = 0;


function showSlide(n) {
  if (n >= testimonials.length) {
    slideIndex = 0;
  }
  if (n < 0) {
    slideIndex = testimonials.length - 1;
  }
  for (let i = 0; i < testimonials.length; i++) {
    testimonials[i].style.display = 'none';
  }
  testimonials[slideIndex].style.display = 'block'; 

  // Update active dot
  for (let i = 0; i < dots.length; i++) {
    dots[i].classList.remove('active-dot');
  }
  dots[slideIndex].classList.add('active-dot');
} 

prevBtn.addEventListener('click', () => {
  showSlide(slideIndex -= 1);
});

nextBtn.addEventListener('click', () => {
  showSlide(slideIndex += 1);
});

// Automatic slide change
let autoSlideInterval = setInterval(() => {
  showSlide(slideIndex += 1);
}, 3000); // Change slide every 3 seconds

showSlide(slideIndex);

});
