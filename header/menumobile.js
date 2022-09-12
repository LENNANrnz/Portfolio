
function navbar() {

    var navbar = document.getElementById("navbarmobile");
    var btnmenu1 = document.getElementById("btnmenus1");
    var btnmenu2 = document.getElementById("btnmenus2");
    var btnmenu3 = document.getElementById("btnmenus3");

  if (navbar.style.top === "0px") {
    navbar.style.top = "-200px";
    btnmenu2.style.opacity="100";
    btnmenu1.style.rotate="0deg";
    btnmenu3.style.rotate="0deg";
    btnmenu1.style.transform="translateY(0px)";
    btnmenu3.style.transform="translateY(0px)";

  } else {
    navbar.style.top = "0px";
    btnmenu2.style.opacity="0";
    btnmenu1.style.rotate="-45deg";
    btnmenu3.style.rotate="45deg";
    btnmenu1.style.transform="translateX(-15px)";
    btnmenu3.style.transform="translateX(-15px)";
  }
}
