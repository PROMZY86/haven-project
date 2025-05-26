const sideNav = document.getElementById('sideNav');
const hamburger = document.getElementById('hamburger');
const closeBtn = document.getElementById('closeBtn');
const overlay = document.getElementById('overlay');


hamburger.addEventListener('click', () => {
  sideNav.classList.add('active');
  overlay.classList.add('active');
  document.body.classList.add('no-scroll');  
});

closeBtn.addEventListener('click', () => {
  sideNav.classList.remove('active');
  overlay.classList.remove('active');
 document.body.classList.remove('no-scroll'); 
});

//navigation to other pages and loading of contents  
document.addEventListener("DOMContentLoaded", () => {
  let navLinks = document.querySelectorAll(".nav-links");
  navLinks[1].classList.add('active');

  navLinks.forEach(link => {
    link.addEventListener('click',  () =>  {
      navLinks.forEach(otherlink => otherlink.classList.remove('active'));
      link.classList.add('active');
    });
  });
});


// Side-nav
document.addEventListener("DOMContentLoaded", () => {
  let navLinks1 = document.querySelectorAll(".nav-links1");
  navLinks1[1].classList.add('active');

  navLinks1.forEach(link => {
    link.addEventListener('click',  () =>  {
      navLinks1.forEach(otherlink => otherlink.classList.remove('active'));
      link.classList.add('active');
    });
  });
});


// 
const dropdownToggle = document.getElementById('dropdownToggleIcon');
const pagesDropdown = document.getElementById('pagesDropdown');
const dropdownIcon = document.getElementById('dropdownIcon');

dropdownToggle.addEventListener('click', (e) => {
  e.preventDefault();

  const isOpen = pagesDropdown.classList.contains('show');

  if (isOpen) {
    pagesDropdown.classList.remove('show');
    dropdownToggle.classList.remove('active');
    dropdownIcon.classList.remove('fa-angle-up');
} else {
    pagesDropdown.classList.add('show');
    dropdownToggle.classList.add('active');
    dropdownIcon.classList.add('fa-angle-down');
  }
});

//
const roomDropTogle = document.getElementById('room_drop-down-toggle-icon');
const roomsDropdown = document.getElementById('roomsDropdown');
const roomDropIcon = document.getElementById('rooms-dropdownIcon');

roomDropTogle.addEventListener('click', (e) => {
   e.preventDefault();

   const isOpen2 = roomsDropdown.classList.contains('show2');

   if(isOpen2){
    roomsDropdown.classList.remove('show2');
    roomDropTogle.classList.remove('active');
    roomDropIcon.classList.remove('fa-angle-up');
  } else {
     roomsDropdown.classList.add('show2');
    roomDropTogle.classList.add('active');
    roomDropIcon.classList.add('fa-angle-down');
  }
}) ;

// 
let textElement = document.getElementById("element-about-us-section-content-h1-text");

let texts = [
  "Welcome To Luxury And Comfort",
  "Have a Great Stay with Us",
  "Your Welfare is Our Concern"
];

let textIndex = 0; 
let charIndex = 0; 
let isDeleting = false;

function typeText() {
  let currentText = texts[textIndex];
  
  if (!isDeleting) {
    charIndex++;
    textElement.textContent = currentText.substring(0, charIndex);
  } else {
    charIndex--;
    textElement.textContent = currentText.substring(0, charIndex);
  }

  if (!isDeleting && charIndex === currentText.length) {
      isDeleting = true;
    setTimeout(typeText, 1000); 
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    textIndex = (textIndex + 1) % texts.length; 
    setTimeout(typeText, 500); 
  } else {
    setTimeout(typeText, isDeleting ? 100 : 150);
  }
}

typeText();


// 
let sliderImages = document.querySelector('.element-about-us-vision-image-slider');
let slides = document.querySelectorAll('.element-about-us-vision-section-image-wrapper img');
let slideIndex = 0;

function nextSlide(){
  slideIndex = (slideIndex + 1) % slides.length
  updateCarouselSlider()
}

function goToSlide(i){
  slideIndex = i;
updateCarouselSlider()
}

function updateCarouselSlider() {
  sliderImages.style.transform = `translateX(-${slideIndex * 100}%)`;
 }

setInterval(nextSlide, 8000)


































 













 


