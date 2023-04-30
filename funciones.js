/*e - enter;
o - ober;
i - imes;
a - ai;
u - ufat;*/

function encriptar() {
  var texto = document.getElementById("texto-input").value;

  /* i es para afectar mayusculas como minisculas -- e else
    g es para toda linea u oracion
    m es para queafecte a multiples lineas de parrafo*/

  var txtCifrado = texto.replace(/e/gim, "enter");
  var txtCifrado = txtCifrado.replace(/o/gim, "ober");
  var txtCifrado = txtCifrado.replace(/i/gim, "imes");
  var txtCifrado = txtCifrado.replace(/a/gim, "ai");
  var txtCifrado = txtCifrado.replace(/u/gim, "ufat");
  
  document.getElementById("imgDer").style.display = "none";
  document.getElementById("texto").style.display = "none";
  document.getElementById("texto-2").innerHTML = txtCifrado;
  document.getElementById("copiar").style.display = "show";
  document.getElementById("copiar").style.display = "inherit";
}

function desencriptar() {
    var texto = document.getElementById("texto-input").value;
  
    /* i es para afectar mayusculas como minisculas -- e else
      g es para toda linea u oracion
      m es para queafecte a multiples lineas de parrafo*/
  
    var txtCifrado = texto.replace(/enter/gim, "e");
    var txtCifrado = txtCifrado.replace(/ober/gim, "o");
    var txtCifrado = txtCifrado.replace(/imes/gim, "i");
    var txtCifrado = txtCifrado.replace(/ai/gim, "a");
    var txtCifrado = txtCifrado.replace(/ufat/gim, "u");
    
    document.getElementById("imgDer").style.display = "none";
    document.getElementById("texto").style.display = "none";
    document.getElementById("texto-2").innerHTML = txtCifrado;
    document.getElementById("copiar").style.display = "show";
    document.getElementById("copiar").style.display = "inherit";
  }

  function copiar() {
    var contenido = document.querySelector("#texto-2")
    contenido.select();
    document.execCommand("copy");
    alert("Se copio!!");
  }