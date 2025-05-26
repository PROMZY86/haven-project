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
  navLinks[6].classList.add('active');

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
  navLinks1[6].classList.add('active');

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