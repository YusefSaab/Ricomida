var enviar = document.getElementById("enviarCorreo");
enviar.onclick = popup;
function popup() {
    alert("El correo fue enviado correctamente...");
}

function textorojo(){
    document.getElementById("ingrediente").classList.toggle("rojo");
}

function textorojo1(){
    document.getElementById("preparacion").classList.toggle("rojo");
}

function shazam(){
    document.getElementById("card1").classList.toggle("shazam");
    document.getElementById("card2").classList.toggle("shazam");
    document.getElementById("card3").classList.toggle("shazam");
}

