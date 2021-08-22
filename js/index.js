window.addEventListener('load' ,function(){
    new Glider(document.querySelector('.carousel__lista'), {
        slidesToShow: 1,
      
        dots: '.carousel__indicadores',
        draggable: false,
        rewind: true,
        arrows: {
          prev: '.carousel__anterior',
          next: '.carousel__siguiente'
        },
       
      });
});
 
// Menu despeglable movil

const navToggle = document.querySelector(".nav__toggle");
const navMenu = document.querySelector(".nav__menu");

navToggle.addEventListener("click" , () => {
  navMenu.classList.toggle("nav-menu_visible");
})