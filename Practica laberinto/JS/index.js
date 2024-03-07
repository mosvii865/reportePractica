function Creadiv() {
    nuevdiv = document.createElement("div");
    textonuev = document.createTextNode("Div creado con boton");

    nuevdiv.appendChild(textonuev);

    var actualdiv = document.getElementById("botoncrea");

    document.body.insertBefore(nuevdiv, actualdiv);
}