var imagem_aboutme = document.querySelector("#imagem_aboutme");
var aboutme_paragraph = document.querySelector(".article_aboutme"); 
var card12Array = [document.getElementById('card1'), document.getElementById('card2')]
var card34Array = [document.getElementById('card3'), document.getElementById('card4')]


ScrollReveal().reveal(aboutme_paragraph, { delay: 375, reset: true,  mobile: true });
ScrollReveal().reveal(imagem_aboutme, { delay: 375, reset: true,  mobile: true, opacity: 0, distance: '250px', origin: 'left',duration: 2000 });
ScrollReveal().reveal(card12Array, { delay: 375, reset: true,  mobile: true, opacity: 0, distance: '250px', origin: 'left',duration: 2000 });
ScrollReveal().reveal(card34Array, { delay: 375, reset: true,  mobile: true, opacity: 0, distance: '250px', origin: 'right',duration: 2000 });


afterReveal: function myCallback (el) {
    el.classList.remove('is-animating');
    el.classList.add('is-visible');
}

ScrollReveal().reveal({ afterReveal: myCallback });



