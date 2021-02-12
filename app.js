

/* Nav */
const burger = document.querySelector('.burger');
const nav = document.querySelector('.lista');
const navLi = document.querySelectorAll('.lista li');
const navLink = document.querySelectorAll('.lista li a');

const navSlide = ()=> {
  //Listener de boton apretado
  burger.addEventListener('click', ()=> {
    nav.classList.toggle('nav-activada');
  
    //Animaciones de los links
    navLi.forEach((link, index)=> {
      if(link.style.animation) 
        link.style.animation = '';
      else
        link.style.animation = `navCelFade 0.5s ease forwards ${index / 5 + 0.5}s`;
    });
    
    //Animacion a X del menu hamburguesa
    burger.classList.toggle('toggle');
  }); 
}; 

//INTENTO FALLIDO (por ahora) DE CERRAR EL MENU AL TOCAR UN LINK CON EL MENU DESPLEGADO
const outSlide = ()=> {
  navLink.addEventListener('click', ()=> {
    nav.classList.toggle('nav-activada');
  })
}

const app = ()=> {
  navSlide();
  outSlide();
}

app();

/********** FLICKITY CAROUSEL SLIDER *********/
  let slidePosition = 0;
  const slides = document.getElementsByClassName('carousel__item');
  const totalSlides = slides.length;

  document.
    getElementById('carousel__button--next')
    .addEventListener("click", function() {
      moveToNextSlide();
    });
  document.
    getElementById('carousel__button--prev')
    .addEventListener("click", function() {
      moveToPrevSlide();
    });

  function updateSlidePosition() {
    for (let slide of slides) {
      slide.classList.remove('carousel__item--visible');
      slide.classList.add('carousel__item--hidden');
    }

    slides[slidePosition].classList.add('carousel__item--visible');
  }

  function moveToNextSlide() {
    if (slidePosition === totalSlides - 1) {
      slidePosition = 0;
    } else {
      slidePosition++;
    }

    updateSlidePosition();
  }

  function moveToPrevSlide() {
    if (slidePosition === 0) {
      slidePosition = totalSlides - 1;
    } else {
      slidePosition--;
    }

    updateSlidePosition();
  }
  