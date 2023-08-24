let header = document.querySelector('header');
let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

window.addEventListener('scroll',()=>{
  header.classList.toggle('shadow', window.scrollY > 0)
});


menu.onclick = ()=>{
  menu.classList.toggle('bx-x');
  navbar.classList.toggle('active')
}


menu.onscroll = ()=>{
  menu.classList.remove('bx-x');
  navbar.classList.remove('active')
}




var swiper = new Swiper(".home", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
 
  });



//   document.querySelector('.menu-icon').addEventListener('click', function () {
//     document.querySelector('.nav-links').classList.toggle('active');
// });

$(document).ready(function() {
  $(window).on('scroll', function() {
      if ($(window).scrollTop() > 20) {
          $('.marvel-header').addClass('scrolled');
      } else {
          $('.marvel-header').removeClass('scrolled');
      }
  });
});



