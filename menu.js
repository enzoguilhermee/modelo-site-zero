new Swiper('.card-wrapper', {
  loop: true,
  spaceBetween: 30,


  autoplay: {
    delay: 2500, // tempo entre os slides em ms (2.5 segundos)
    disableOnInteraction: false, // continua mesmo se o usuário interagir
  },

  // Pagination Bullets 
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // Breakpoints Responsivos
  breakpoints: {
    0:{
        slidesPerView: 1
    },

    768:{
        slidesPerView: 2
    },

    1024:{
        slidesPerView: 3
    },
  }
});

new Swiper('.parceiros card-wrapper', {
  loop: true,
  spaceBetween: 30,


  autoplay: {
    delay: 2500, // tempo entre os slides em ms (2.5 segundos)
    disableOnInteraction: false, // continua mesmo se o usuário interagir
  },
  
  // Pagination Bullets 
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // Breakpoints Responsivos
  breakpoints: {
    0:{
        slidesPerView: 1
    },

    768:{
        slidesPerView: 2
    },

    1024:{
        slidesPerView: 3
    },
  }
});