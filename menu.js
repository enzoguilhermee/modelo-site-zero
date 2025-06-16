document.addEventListener("DOMContentLoaded", () => {
    let btnMenu = document.getElementById("btn-menu");
    let menu = document.getElementById("menu-mobile");
    let overlay = document.getElementById("overlay-menu");

    btnMenu.addEventListener('click', () => {
        menu.classList.add('abrir-menu');
    });

    menu.addEventListener('click', () => {
        menu.classList.remove('abrir-menu');
    });

    overlay.addEventListener('click', () => {
        menu.classList.remove('abrir-menu');
    });
});



// Função para aplicar smooth scrolling
function smoothScroll(target, duration) {
    var targetSection = document.querySelector(target);
    var targetPosition = targetSection.offsetTop;
    var startPosition = window.pageYOffset;
    var distance = targetPosition - startPosition;
    var startTime = null;

    function animation(currentTime) {
        if (startTime === null) startTime = currentTime;
        var timeElapsed = currentTime - startTime;
        var run = ease(timeElapsed, startPosition, distance, duration);
        window.scrollTo(0, run);
        if (timeElapsed < duration) requestAnimationFrame(animation);
    }

    function ease(t, b, c, d) {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t + b;
        t--;
        return -c / 2 * (t * (t - 2) - 1) + b;
    }

    requestAnimationFrame(animation);
}

// Adiciona evento de clique para as âncoras
var links = document.querySelectorAll('nav a','.btn-contato');

links.forEach(function(link) {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        var target = this.getAttribute('href');
        smoothScroll(target, 1000); // 1000 milliseconds = 1 segundo, ajuste conforme necessário
    });
});

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
  },
});
