// ELEMENTI CATTURATI
let navbar = document.querySelector('.navbar')
let links = document.querySelectorAll('.nav-link')
let collapse = document.querySelector('#collapse')
let navbarLogo = document.querySelectorAll('.navbarLogo')
let logoQuery = document.querySelector('.logoQuery')
let titoloNav = document.querySelector('.titoloNav')
let dollar = document.getElementById('dollar');
let collapseCustom = document.querySelector('.collapseCustom')
let inputCerca = document.querySelector('#inputCerca')

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
    navbar.style.border = 'solid 20px rgb(37, 55, 69)'

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
      div.classList.add('col-12','col-md-4');
      

      
      div.innerHTML = `
<div class="cardAccordionCustom">
                    <p class="h2" title = "${annuncio.name}">${troncateWord(annuncio.name)}</p>
                    <img src="https://picsum.photos/${250 + i}" alt="">
                <p class="h3" title = "${annuncio.category}">${annuncio.category}</p>
                <p class="h4" title = "${annuncio.price}">${annuncio.price} $</p>
                <button id="buttonBuy">Aggiungi al carrello</button>
                </div>
    `;
      cardAccordionCustomWrapper.appendChild(div)
    })

  }
  //Fine funzione che crea una card per ogni oggetto del'json


  showCard(data)




  // funzione che filtra per categorie
  let radioButtons = document.querySelectorAll('.form-check-input');

  function filterByCategory(array) {

let categoria = Array.from(radioButtons).find((button) =>  button.checked).id
console.log(categoria);


    if (categoria != 'all') {

      let filtered = array.filter((annuncio) => annuncio.category == categoria);
      console.log(filtered);
      
      return filtered

    } else {
      return array
      
    }

  }

  //Fine funzione che filtra per categorie




  // forEach che filtrea per categorie al click dei radio button


  radioButtons.forEach((button) => {

    button.addEventListener('click', () => {
      filterForRage()

      globalFilter()



    })
  })
  // forEach che filtrea per categorie al click dei radio button


// inizio logiche per filtro range

let myRange = document.querySelector('#myRange')
let priceValue = document.querySelector('#priceValue')


function filterForRage () {

let price = filterByCategory(data).map(  (annuncio) => +annuncio.price );

price.sort((a,b) => a - b);

let maxPrice = Math.ceil(price.pop())
console.log(maxPrice);
myRange.max = maxPrice
myRange.value = maxPrice
priceValue.innerHTML = maxPrice;


}

filterForRage()

// Fine logiche per filtro range

function filterForPrice (array) {

  let filter = array.filter((annuncio) => +annuncio.price <= myRange.value);
  
  return filter;
  
  
  }
  
  myRange.addEventListener('input' , ( ) => { 

priceValue.innerHTML = myRange.value;

globalFilter()


  })

// logica filtro per parola

function filtraPerParola (array) {

  let filtered = array.filter((annuncio) => annuncio.name.toLowerCase().includes(inputCerca.value.toLowerCase())) ;

return filtered

}


inputCerca.addEventListener('input' , () => { 

  globalFilter()
})
//fine logica filtro per parola


// filtro generale

function globalFilter() {

  let categoryFiltered = filterByCategory(data);
  let priceFiltered = filterForPrice(categoryFiltered);
  let filteredByWord = filtraPerParola(priceFiltered);
  
  showCard(filteredByWord);
}

// filtro generale


// logica prova carrello

let buttonBuy = document.querySelectorAll('#buttonBuy')
let prova = document.querySelector('.prova')
let cartSection = document.querySelector('.cartSection')
let cartCase = document.querySelector('.cartCase')

// Assicurati che questi elementi siano definiti correttamente


let accumulatore = 0

buttonBuy.forEach( button => { 

  button.addEventListener('click' , ( ) => { 
    
     accumulatore++;
      prova.innerHTML = accumulatore
      let prova2 = 'il bottone e stato cliccato'
      console.log(prova2);
      let div = document.createElement('div');

cartCase.style = 'transform: scale(1.5)'

setTimeout(() => { cartCase.style.transform = 'scale(1)'; 

}, 300);

setTimeout(() => { cartCase.style.transform = 'scale(1.5)'; 

}, 600);

setTimeout(() => { cartCase.style.transform = 'scale(1)'; 

}, 900);

});
  
})
// logica prova carrello



});
// Fine chiamata asincrona fetch

