const swiper = new Swiper(".my-swiper", {

    loop: true,
    autoplay: {
    delay: 8000,
    disableOnInteraction: false  
    },
    
    slidesPerView: 1,
    spaceBetween: 30,
    // loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      600: {
        slidesPerView: 2,
      },
      992: {
        slidesPerView:3,
      },
    },
  });