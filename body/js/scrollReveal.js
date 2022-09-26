var imagem_aboutme = document.querySelector("#imagem_aboutme");
var revealArray = [document.querySelector(".article_aboutme"),]; 
ScrollReveal().reveal(revealArray, { delay: 375, reset: true,  mobile: true });
ScrollReveal().reveal(imagem_aboutme, { delay: 375, reset: true,  mobile: true, opacity: 0, distance: '250px', origin: 'left',duration: 2000 });





