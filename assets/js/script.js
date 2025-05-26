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
  navLinks[0].classList.add('active');

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
  navLinks1[0].classList.add('active');

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
    dropdownIcon.classList.remove('fa-angle-down');
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
    roomDropIcon.classList.remove('fa-angle-down');
  } else {
     roomsDropdown.classList.add('show2');
    roomDropTogle.classList.add('active');
    roomDropIcon.classList.add('fa-angle-down');
  }
}) ;


// home-Image slider carrousel images
let carouselImages = document.querySelector('.element-home-section-container');
let images = document.querySelectorAll('.element-home-section  img');
let slideIndex = 0;

function nextSlide() {
  slideIndex = (slideIndex + 1) % images.length;
  updateCarousel()
}

function gotoSlide(i) {
  slideIndex = i;
   updateCarousel();
}

function updateCarousel(){
  carouselImages.style.transform = `translateX(-${slideIndex * 100}%)`;
}

setInterval(nextSlide,  8000)



// 
  document.querySelectorAll('.faq-question').forEach(button => {
  button.addEventListener('click', () => {
    const isActive = button.classList.contains('active');
    const answer = button.nextElementSibling;

    // Close all open answers
    document.querySelectorAll('.faq-answer').forEach(ans => {
      ans.style.maxHeight = null;
    });
    document.querySelectorAll('.faq-question').forEach(btn => {
      btn.classList.remove('active');
    });


    if (!isActive) {
      button.classList.add('active');
      answer.style.maxHeight = answer.scrollHeight + 'px';
    }
  });
});


// 
// let currentIndex = 0;
// const track = document.querySelector(".slider-track");
// const slides = document.querySelectorAll(".slide");
// const totalSlides = slides.length;
// const carousel = document.getElementById("carousel");

// function updateSlider() {
//   const offset = -currentIndex * 100;
//   track.style.transform = `translateX(${offset}%)`;
// }

// function changeSlide(direction) {
//   currentIndex += direction;
//   if (currentIndex < 0) currentIndex = totalSlides - 1;
//   if (currentIndex >= totalSlides) currentIndex = 0;
//   updateSlider();
// }

// // Auto slide every 4 seconds
// let autoSlide = setInterval(() => {
//   changeSlide(1);
// }, 4000);



// // Initial load
// document.addEventListener("DOMContentLoaded", updateSlider);


















  








    

