// ELEMENTI CATTURATI
let navbar = document.querySelector('.navbar')
let links = document.querySelectorAll('.nav-link')
let collapse = document.querySelector('#collapse')
let navbarLogo = document.querySelectorAll('.navbarLogo')
let logoQuery = document.querySelector('.logoQuery')
let titoloNav = document.querySelector('.titoloNav')
let dollar = document.getElementById('dollar');
let primoNumero = document.querySelector('#primoNumero')
let secondoNumero = document.querySelector('#secondoNumero')
let terzoNumero = document.querySelector('#terzoNumero')
let body = document.querySelector('body')
// ELEMENTI CATTURATI

// CURSORE PERSONALIZZATO
document.addEventListener('mousemove', (e) => {
  dollar.style.left = `${e.clientX}px`;
  dollar.style.top = `${e.clientY}px`;
});

document.addEventListener('click', () => {

  dollar.classList.add('hovered');
  setTimeout(() => {
    dollar.classList.remove('hovered');
  }, 300);
});


// CURSORE PERSONALIZZATO




// LOGICHE PER NAVBAR
window.addEventListener('scroll', () => {

  let scrolled = window.scrollY;

  if (scrolled > 0) {

    navbar.classList.remove('bg-4')
    navbar.classList.add('bg-2');
    titoloNav.classList.add('color-4');
    collapse.classList.remove('bg-4')
    collapse.classList.add('bg-2');
    navbar.style.height = '170px'
    navbar.style.border = 'solid 2px rgb(37, 55, 69)'

    links.forEach((link) => {
      link.style.color = 'var(--Blue-decoration)';
      link.classList.add('focus-on-scroll');
      link.classList.remove('nav-link-focus');



    });


    navbarLogo.forEach(logo => {
      logo.src = "http://127.0.0.1:5500/Media/logo3-b.png";
      logoQuery.src = "http://127.0.0.1:5500/Media/hamburger-b.png";


    logo.classList.add('newLogo')
      logoQuery.style.height = '50px'
      logoQuery.style.width = '50px'
      logo.classList.add('rotate');
      logoQuery.classList.add('rotate');

    });

  } else {

    navbar.classList.remove('bg-2')
    navbar.classList.add('bg-4')
    collapse.classList.remove('bg-2')
    collapse.classList.add('bg-4')
    navbar.style.height = '100px'
    titoloNav.classList.remove('color-4');
    titoloNav.classList.add('color-2')


    links.forEach((link) => {
      link.style.color = 'var(--Secondary-color)'
      link.classList.remove('focus-on-scroll');
      link.classList.add('nav-link-focus');


    });

    navbarLogo.forEach(logo => {
      logo.src = "http://127.0.0.1:5500/Media/logo-g.png";
      logo.classList.remove('newLogo');
    
      logoQuery.style.height = '50px';
      logoQuery.style.width = '50px';
      logo.classList.remove('rotate');
      logoQuery.classList.remove('rotate');

      logoQuery.src = "http://127.0.0.1:5500/Media/hamburger-g.png";

    });


  }

})
// LOGICHE PER NAVBAR



// LOGICHE PER HEADER

// LOGICHE PER HEADER


// LOGICHE PER SECTION 2


// LOGICHE PER SECTION 2
function creaIntervallo(n, e, i) {


  let counter = 0
  let interval = setInterval(() => {

    if (counter < n) {
      counter++
      e.innerHTML = counter



    } else {



      clearInterval(i)
    }


  },);

  setTimeout(() => {
    confirm = true;
  }, 8000)
}


let confirm = true;
let observer = new IntersectionObserver((entries) => {


  entries.forEach((entry) => {

    if (entry.isIntersecting && confirm) {



      creaIntervallo(500, primoNumero, 1)
      creaIntervallo(1500, secondoNumero, 1)
      creaIntervallo(1700, terzoNumero, 1)
      confirm = false
    }


  })



});

observer.observe(primoNumero)


// prove personali

window.addEventListener('click', () => {
  console.log('ciao');

})
console.dir(document)

// prove personali




