
let currentscrollposition = 0;
let scrollamount = 320;

const scont = document.querySelector(".scrollcontainer");
const hscroll = document.querySelector(".scroll");
const btnscrollleft= document.querySelector("#btnleft")
const btnscrollright= document.querySelector("#btnright")

btnscrollleft.style.opacity = "0";

let maxscroll = -scont.offsetWidth + hscroll.offsetWidth;

function scrollhorizontally(val){currentscrollposition += (val*scrollamount);

    if(currentscrollposition>0){currentscrollposition=0
        btnscrollleft.style.opacity = "0";}
        else{btnscrollleft.style.opacity = "1";}

    if(currentscrollposition<maxscroll){currentscrollposition=maxscroll;
        btnscrollright.style.opacity = "0";}
    else{btnscrollright.style.opacity = "1";}

scont.style.left = currentscrollposition + "px";
}