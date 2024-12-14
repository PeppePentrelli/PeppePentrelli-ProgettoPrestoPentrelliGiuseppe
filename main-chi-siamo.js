// ELEMENTI CATTURATI
let navbar = document.querySelector('.navbar');
let links = document.querySelectorAll('.nav-link');
let collapse = document.querySelector('#collapse');
let navbarLogo = document.querySelectorAll('.navbarLogo');
let logoQuery = document.querySelector('.logoQuery');
let titoloNav = document.querySelector('.titoloNav');
let dollar = document.getElementById('dollar');
let opener = document.querySelector('.opener')


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

// logiche opener

let staff = [
    {name : 'Les' , description : `Titolare del banco dei pegni piu famoso al mondo, padre di un figlio che poteva morire, e ti vendero una cosa in questa vita o nell altra` , url : 'Media/les-profile.png'},
    {name : 'Seth' , description : ` Seth Gold è il figlio di Les e lavora al banco dei pegni insieme al padre. Seth è spesso coinvolto in competizioni con sua sorella Ashley e cerca di dimostrare il suo valore come gestore del negozio1. Ha un carattere forte e a volte conflittuale, ma è anche molto determinato e ambizioso.` , url : 'Media/seth-profile.png'},
    {name : 'Ashley ' , description : `Ashley Broad è la figlia di Les e lavora anche lei al banco dei pegni. Ashley spesso si sente controllata dal padre e dal fratello, e ciò la porta a ribellarsi e cercare di imporre le sue idee1. Ha un carattere deciso e non esita a confrontarsi con Seth e Les quando non è d accordo con le loro decisioni.` , url : 'Media/ashley-profile.png'},
    {name : 'Rick' , description : `Rick è un altro personaggio importante del negozio, spesso coinvolto nelle operazioni quotidiane e nelle interazioni con i clienti. È noto per il suo atteggiamento calmo e professionale, che contrasta con i conflitti interni della famiglia Gold.` , url : 'Media/rick-profile.png'},
    
    
    
]
let circle = document.querySelector('.circle')

staff.forEach((docente) => {
    
    let div = document.createElement('div');

   div.classList.add('moved')
   div.style.backgroundImage= `url(${docente.url})`
    circle.appendChild(div)


})  
let movedDivs = document.querySelectorAll('.moved');

let check = false
let staffCard = document.querySelector('.staffCard')

opener.addEventListener('click' , ( ) => { 

if (check === false) {

    movedDivs.forEach((moved, i) => { 
        opener.style.transform =`rotate(45deg)`
            let angle = 360 * i / movedDivs.length;
            moved.style.transform= `rotate(${angle}deg) translate(150px) rotate(-${angle}deg)`;
            
        })
        check=true
    
} else {

    movedDivs.forEach((moved, i) => { 
        opener.style.transform =`rotate(0deg)`
            let angle = 360 * i / movedDivs.length;
            moved.style.transform= `rotate(0deg) translate(0px)`;
    check=false

        })

staffCard.classList.add('d-none')

}

})

let face = document.querySelector('.face')
let  cardName = document.querySelector('#cardName')
let cardDescription = document.querySelector('#cardDescription')

movedDivs.forEach( (moved , i) => { 

    moved.addEventListener('click' , () => { 
        console.log(staff[i]);
        
        staffCard.classList.remove('d-none')
        let personale = staff[i]
        
        face.style.backgroundImage = `url(${personale.url})`
        cardName.innerHTML = personale.name
        cardDescription.innerHTML = personale.description

    })

})

// logiche opener

