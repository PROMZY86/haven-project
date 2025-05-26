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
  navLinks[3].classList.add('active');

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
  navLinks1[3].classList.add('active');

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
    dropdownIcon.classList.add('fa-angle-up');
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

  // 
  let carouselImages = document.querySelector('.element-menu-drinks-section-container');
  let imgSlider  = document.querySelectorAll(".element-menu-drinks-section img" );
  let slideIndex = 0;

  function nxtSlide(){
    slideIndex = (slideIndex + 1) % imgSlider.length
     updateCarousel()
  }

  function goSlide(i){
    slideIndex = i;
    updateCarousel()
  }

  function updateCarousel(){
      carouselImages.style.transform = `translateX(-${slideIndex * 100}%)`;
  }

setInterval(nxtSlide, 8000)

// 
function openDetails(title, description, price){
  document.getElementById('modal-title').textContent = title;
  document.getElementById('modal-description').textContent = description;
  document.getElementById('modal-price').textContent = price;
  document.getElementById('modal-title').style.fontSize = "14px"
  let moDal = document.getElementById('details-modal');
   moDal.style.display = "block" ;
   setTimeout(() =>  {moDal.classList.add("show"); }, 10)
}

function closeDetails(){
    let moDal = document.getElementById('details-modal');
    moDal.classList.remove("show");
    setTimeout(() => {moDal.style.display = "none"}, 500)
}
    


