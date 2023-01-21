const swiper = new Swiper('.swiper', {
  // Optional parameters
  loop: true,
  slidesPerView: 2.8,
  spaceBetween: 8,
  slidesPerGroup: 1,
   breakpoints: {
     720: {
       slidesPerView: 4.7,
       spaceBetween: 20,
       slidesPerGroup: 2,
     },
     200: {
       slidesPerView: 1.4,
       spaceBetween: 5,
       slidesPerGroup: 1,
       simulateTouch: true,
     },
   },
  // Navigation arrows
  navigation: {
    nextEl: '.button-next',
    prevEl: '.button-prev',
  },
  
});