// ELEMENTI CATTURATI
let navbar = document.querySelector('.navbar')
let links = document.querySelectorAll('.nav-link')
let collapse = document.querySelector('#collapse')
let navbarLogo = document.querySelectorAll('.navbarLogo')
let logoQuery = document.querySelector('.logoQuery')
let titoloNav = document.querySelector('.titoloNav')
let dollar = document.getElementById('dollar');
let collapseCustom = document.querySelector('.collapseCustom')
// ELEMENTI CATTURATI



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


      logo.style.height = '150px'
      logo.style.width = '150px'
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
      logo.style.height = ' 70px';
      logo.style.width = '40px';
      logoQuery.style.height = '50px';
      logoQuery.style.width = '50px';
      logo.classList.remove('rotate');
      logoQuery.classList.remove('rotate');

      logoQuery.src = "http://127.0.0.1:5500/Media/hamburger-g.png";

    });


  }

})
// LOGICHE PER NAVBAR



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



// chiamata asincrona fetch

fetch('./prodotti.json').then((response) => response.json()).then((data) => {

data.sort((a,b) => a.price - b.price) ;

  let radioWrapper = document.querySelector('#radioWrapper');
  let cardAccordionCustomWrapper = document.querySelector('#cardAccordionCustomWrapper')


  // funzione per i radio button

  function radioCreate() {

    let categorie = data.map((annuncio) => annuncio.category);


    let categoria = [];

    categorie.forEach(category => {

      if (!categoria.includes(category)) {
        categoria.push(category)


      }


    });

    categoria.forEach((category) => {

      let div = document.createElement('div');
      div.classList.add('form-check');
      div.innerHTML = `
      <input class="form-check-input" type="radio" name="Categorie" id="${category}">
      <label class="form-check-label" for="${category}">
      ${category}
      </label>
      `

      radioWrapper.appendChild(div)

    })

  }
  // fine funzione per i radio button



  radioCreate();

  // funzione per tagliare le parole delle card
  function troncateWord(string) {

    if (string.length > 15) {

      return string.split(' ')[0] + '...';

    } else {

      return string;
    }

  }
  //Fine funzione per tagliare le parole delle card



  // funzione che crea una card per ogni oggetto del'json

  function showCard(array) {
    cardAccordionCustomWrapper.innerHTML = ''
    array.forEach((annuncio, i) => {

      let div = document.createElement('div');
      div.classList.add('cardAccordionCustom', 'col-12','col-md-6');
      

      
      div.innerHTML = `
                    <p class="h2" title = "${annuncio.name}">${troncateWord(annuncio.name)}</p>
                    <img src="https://picsum.photos/${250 + i}" alt="">
                <p class="h3" title = "${annuncio.category}">${annuncio.category}</p>
                <p class="h4" title = "${annuncio.price}">${annuncio.price} $</p>
    `;
      cardAccordionCustomWrapper.appendChild(div)
    })

  }
  //Fine funzione che crea una card per ogni oggetto del'json


  showCard(data)




  // funzione che filtra per categorie

  function filterByCategory(cat) {

    if (cat != 'all') {

      let filtered = data.filter((annuncio) => annuncio.category == cat);
      console.log(filtered);
      showCard(filtered)

    } else {
      showCard(data)
    }

  }

  //Fine funzione che filtra per categorie




  // forEach che filtrea per categorie al click dei radio button
  let radioButtons = document.querySelectorAll('.form-check-input');

  radioButtons.forEach((button) => {

    button.addEventListener('click', () => {

      filterByCategory(button.id)



    })
  })
  // forEach che filtrea per categorie al click dei radio button


// inizio logiche per filtro range

let myRange = document.querySelector('#myRange')
let priceValue = document.querySelector('#priceValue')


function filterForRage () {

let price = data.map(  (annuncio) => +annuncio.price );

price.sort((a,b) => a - b);

let maxPrice = Math.ceil(price.pop())
console.log(maxPrice);
myRange.max = maxPrice
myRange.value = maxPrice
priceValue.innerHTML = maxPrice;


}

filterForRage()

// Fine logiche per filtro range

function filterForPrice () {

  let filter = data.filter((annuncio) => +annuncio.price <= myRange.value);
  
  showCard(filter)
  
  
  }
  
  myRange.addEventListener('input' , ( ) => { 

priceValue.innerHTML = myRange.value;

    filterForPrice()

  })

});
// Fine chiamata asincrona fetch


