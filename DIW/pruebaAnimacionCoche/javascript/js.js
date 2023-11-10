function iniciar()
{
    var iniciaAnimacion=document.getElementById("iniciaAnimacion");
    iniciaAnimacion.addEventListener("click", accIniciaAnimacion, false);
}
function accIniciaAnimacion() {
    var coche=document.getElementById("coche");
    coche.className = "aCoche";
}
window.addEventListener("load", iniciar, false);