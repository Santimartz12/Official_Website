var botonmenu = document.querySelector(".menuicon");
var fondo = document.querySelector(".backmenu");
var menuvertical = document.querySelector("#headermenu");

botonmenu.addEventListener("click",function(){
    menuvertical.style.transition = "all 300ms";
    fondo.style.display="block";
    menuvertical.style.right = "0px";

})

fondo.addEventListener("click",function(){
    menuvertical.style.transition = "all 300ms";
    menuvertical.style.right = "-400px";
    fondo.style.display="none";
})