let abrir = document.querySelectorAll(".uil-bars")[0];
let cerrar = document.querySelectorAll(".uil-multiply")
[0];
let contenedor = document.querySelectorAll(".nav")[0];

abrir.addEventListener("click", function(e){
    e.preventDefault(); 
    contenedor.style.right = "0";
    setTimeout(function(){

    },900)
})

cerrar.addEventListener("click",function(e){
    e.preventDefault();
    contenedor.style.right = "100%"
})