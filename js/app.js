window.addEventListener("load",function() {
  var iconoTexto = document.getElementById("icTexto");
  var iconoCita= document.getElementById("icCita");
  var iconoEnlace = document.getElementById("icEnlace");
  var iconoNotas = document.getElementById("icNotas");
  var iconosTumblr = document.getElementById("iconosTumblr");
  var container = document.getElementById("container");
  var  cajas = document.createElement("section");
  cajas.setAttribute("id", "cajas");
  cajas.classList.add("cajas");
  container.insertBefore(cajas, container.childNodes[8]);
  // document.body.appendChild(cajas);
  // iconosTumblr.appendChild(cajas);

  iconoTexto.addEventListener("click", boxTexto);
  iconoCita.addEventListener("click", boxCita);
  iconoEnlace.addEventListener("click", boxEnlace);
  iconoNotas.addEventListener("click", boxNotas);
});

function boxTexto(){
  var contenedor = document.createElement("div");
    contenedor.classList.add("contenedor");
    cajas.insertBefore(contenedor,cajas.childNodes[0]);
  var contenedorTexto = document.createElement("div");
    contenedorTexto.classList.add("box","col-9", "hvr-curl-top-right");
    contenedor.insertBefore(contenedorTexto, contenedor.childNodes[0]);
  var titulo = document.createElement("input");
    titulo.classList.add("tituloBox");
    titulo.placeholder= "Título";
    contenedorTexto.insertBefore(titulo, contenedorTexto.childNodes[1]);
  var btnCerrar = document.createElement("button");
    btnCerrar.classList.add("cerrar");
    btnCerrar.innerHTML= "Cerrar";
    contenedorTexto.insertBefore(btnCerrar, contenedorTexto.childNodes[3]); 
  var btnPublicar = document.createElement("button");
    btnPublicar.classList.add("publicar");
    btnPublicar.innerHTML= "Publicar";
    contenedorTexto.insertBefore(btnPublicar, contenedorTexto.childNodes[3]);        
  var textArea = document.createElement("textarea");
    textArea.classList.add("textArea");
    textArea.setAttribute("rows", 10);
    textArea.setAttribute("cols", 60);
    textArea.placeholder="Aquí va el texto";
    contenedorTexto.insertBefore(textArea, contenedorTexto.childNodes[1]);
  var nombreCompleto = document.createElement("p");
    nombreCompleto.classList.add("nombreCompleto");
    nombreCompleto.innerHTML= "CarolMadeleineJuárez";
    contenedorTexto.insertBefore(nombreCompleto, contenedorTexto.childNodes[0]);
  var imagenPerfil= document.createElement("img");
    imagenPerfil.classList.add("imagenPerfil","col-3");
    imagenPerfil.setAttribute("src", "image/fotoPerfil.png")
    contenedor.insertBefore(imagenPerfil, contenedor.childNodes[0]);

    btnCerrar.addEventListener("click", function(){
      this.parentElement.parentElement.remove();
    });

    btnPublicar.addEventListener("click",function() {
      
      var contenedor = document.createElement("div")
      contenedor.classList.add("box");
      cajas.insertBefore(contenedor, cajas.childNodes[0]);

      var nombreCompleto = document.createElement("div")
      nombreCompleto.classList.add("nombreCompleto");
      nombreCompleto.innerText = "CarolMadeleineJuárez";
      contenedor.insertBefore(nombreCompleto, contenedor.childNodes[1])

      var mensajeTitulo = document.createElement("div")
      mensajeTitulo.classList.add("mensajeTitulo");
      mensajeTitulo.innerText = titulo.value;
      contenedor.insertBefore(mensajeTitulo, contenedor.childNodes[2]);

      var mensajeTextArea= document.createElement("div");
      mensajeTextArea.classList.add("mensajeTextArea");
      mensajeTextArea.innerText = textArea.value;
      contenedor.insertBefore(mensajeTextArea, contenedor.childNodes[2]);

      var horaActual = new Date ();
      var hora = horaActual.getHours();
      var minuto = horaActual.getMinutes();
      var horaContenedor = document.createElement("span");
      horaContenedor.classList.add("hora")
      horaContenedor.innerHTML= hora + ":"+ minuto;
      contenedor.insertBefore(horaContenedor, contenedor.childNodes[3]);

      this.parentElement.parentElement.remove();
    });
}
function boxCita(){
  var contenedor = document.createElement("div");
      contenedor.classList.add("contenedor");
      cajas.insertBefore(contenedor,cajas.childNodes[0]);
  var contenedorCita = document.createElement("div");
    contenedorCita.classList.add("box" ,"col-9","hvr-curl-top-right");
    contenedor.insertBefore(contenedorCita, contenedor.childNodes[0]);
  var titulo = document.createElement("textArea");
    titulo.classList.add("tituloBox");
    titulo.setAttribute("rows", 4);
    titulo.setAttribute("cols", 26);
    titulo.placeholder="Cita";
    contenedorCita.insertBefore(titulo, contenedorCita.childNodes[1]);
  var btnCerrar = document.createElement("buttom");
    btnCerrar.classList.add("cerrar");
    btnCerrar.innerHTML= "Cerrar";
    contenedorCita.insertBefore(btnCerrar, contenedorCita.childNodes[3]); 
  var btnPublicar = document.createElement("buttom");
    btnPublicar.classList.add("publicar");
    btnPublicar.innerHTML= "Publicar";
    contenedorCita.insertBefore(btnPublicar, contenedorCita.childNodes[3]);        
  var textArea = document.createElement("input");
    textArea.classList.add("textArea");
    textArea.placeholder="Aquí va el Autor";
    contenedorCita.insertBefore(textArea, contenedorCita.childNodes[1]);
  var nombreCompleto = document.createElement("p");
    nombreCompleto.classList.add("nombreCompleto");
    nombreCompleto.innerHTML= "CarolMadeleineJuárez";
    contenedorCita.insertBefore(nombreCompleto, contenedorCita.childNodes[0]);
  var imagenPerfil= document.createElement("img");
    imagenPerfil.classList.add("imagenPerfil", "col-3");
    imagenPerfil.setAttribute("src", "image/fotoPerfil.png")
    contenedor.insertBefore(imagenPerfil, contenedor.childNodes[0]);

    btnCerrar.addEventListener("click", function(){
      this.parentElement.parentElement.remove();
    });

    btnPublicar.addEventListener("click", function(){
      var contenedor = document.createElement("div")
      contenedor.classList.add("box");
      cajas.insertBefore(contenedor, cajas.childNodes[0]);

      var nombreCompleto = document.createElement("div")
      nombreCompleto.classList.add("nombreCompleto");
      nombreCompleto.innerText = "CarolMadeleineJuárez";
      contenedor.insertBefore(nombreCompleto, contenedor.childNodes[1])

      var mensajeTitulo = document.createElement("div")
      mensajeTitulo.classList.add("mensajeTitulo");
      mensajeTitulo.innerText = titulo.value;
      contenedor.insertBefore(mensajeTitulo, contenedor.childNodes[2]);

      var mensajeTextArea= document.createElement("div");
      mensajeTextArea.classList.add("mensajeTextArea");
      mensajeTextArea.innerText = "Autor : " + textArea.value;
      contenedor.insertBefore(mensajeTextArea, contenedor.childNodes[2]);

      var horaActual = new Date ();
      var hora = horaActual.getHours();
      var minuto = horaActual.getMinutes();
      var horaContenedor = document.createElement("span");
      horaContenedor.classList.add("hora")
      horaContenedor.innerHTML= hora + ":"+ minuto;
      contenedor.insertBefore(horaContenedor, contenedor.childNodes[3]);

      this.parentElement.parentElement.remove();
    });
}
function boxEnlace(){
  var contenedor = document.createElement("div");
    contenedor.classList.add("contenedor");
    cajas.insertBefore(contenedor,cajas.childNodes[0]);
  var contenedorEnlace = document.createElement("div");
    contenedorEnlace.classList.add("box","col-9", "hvr-curl-top-right");
    contenedor.insertBefore(contenedorEnlace, contenedor.childNodes[0]);
  var nombreCompleto = document.createElement("p");
    nombreCompleto.classList.add("nombreCompleto");
    nombreCompleto.innerHTML= "CarolMadeleineJuárez";
    contenedorEnlace.insertBefore(nombreCompleto, contenedorEnlace.childNodes[1]);
  var textArea = document.createElement("textarea");
    textArea.classList.add("enlaceURL");
    textArea.setAttribute("rows", 2);
    textArea.setAttribute("cols", 68.1);
    textArea.placeholder="Escribe o pega un URL";
    contenedorEnlace.insertBefore(textArea, contenedorEnlace.childNodes[2]);
  var btnCerrar = document.createElement("buttom");
    btnCerrar.classList.add("cerrar");
    btnCerrar.innerHTML= "Cerrar";
    contenedorEnlace.insertBefore(btnCerrar, contenedorEnlace.childNodes[3]); 
  var btnPublicar = document.createElement("buttom");
    btnPublicar.classList.add("publicar");
    btnPublicar.innerHTML= "Publicar";
    contenedorEnlace.insertBefore(btnPublicar, contenedorEnlace.childNodes[3]);        
  var imagenPerfil= document.createElement("img");
    imagenPerfil.classList.add("imagenPerfil", "col-3");
    imagenPerfil.setAttribute("src", "image/fotoPerfil.png")
    contenedor.insertBefore(imagenPerfil, contenedor.childNodes[0]);

    btnCerrar.addEventListener("click", function(){
      this.parentElement.parentElement.remove();
    });

    btnPublicar.addEventListener("click", function(){
      var contenedor = document.createElement("div")
      contenedor.classList.add("box");
      cajas.insertBefore(contenedor, cajas.childNodes[0]);

      var nombreCompleto = document.createElement("div")
      nombreCompleto.classList.add("nombreCompleto");
      nombreCompleto.innerText = "CarolMadeleineJuárez";
      contenedor.insertBefore(nombreCompleto, contenedor.childNodes[1])

      var imagen= document.createElement("img");
      imagen.classList.add("mensajeTextArea");
      imagen.setAttribute("src", textArea.value);
      contenedor.insertBefore(imagen, contenedor.childNodes[2]);

      var horaActual = new Date ();
      var hora = horaActual.getHours();
      var minuto = horaActual.getMinutes();
      var horaContenedor = document.createElement("span");
      horaContenedor.classList.add("hora")
      horaContenedor.innerHTML= hora + ":"+ minuto;
      contenedor.insertBefore(horaContenedor, contenedor.childNodes[3]);

      this.parentElement.parentElement.remove();
    });
}
function boxNotas(){
  var contenedor = document.createElement("div");
    contenedor.classList.add("contenedor");
    cajas.insertBefore(contenedor,cajas.childNodes[0]);
  var contenedorNotas = document.createElement("div");
    contenedorNotas.classList.add("box","col-9", "hvr-curl-top-right");
    contenedor.insertBefore(contenedorNotas, contenedor.childNodes[1]);
  var nombreCompleto = document.createElement("p");
    nombreCompleto.classList.add("nombreCompleto");
    nombreCompleto.innerHTML= "CarolMadeleineJuárez";
    contenedorNotas.insertBefore(nombreCompleto, contenedorNotas.childNodes[1]);
  var textArea = document.createElement("textarea");
    textArea.classList.add("textArea");
    textArea.setAttribute("rows", 10);
    textArea.setAttribute("cols", 60);
    textArea.placeholder="Aquí va el texto";
    contenedorNotas.insertBefore(textArea, contenedorNotas.childNodes[2]);
  var inputColor = document.createElement("input");
    inputColor.classList.add("cerrar");
     inputColor.setAttribute("id", "inputColor");
    inputColor.placeholder="Ingrese el color que quiera";
    contenedorNotas.insertBefore(inputColor, contenedorNotas.childNodes[3]); 
  var btnPublicar = document.createElement("buttom");
    btnPublicar.classList.add("publicar");
    btnPublicar.innerHTML= "Publicar";
    contenedorNotas.insertBefore(btnPublicar, contenedorNotas.childNodes[3]);        
  var btnCerrar = document.createElement("buttom");
    btnCerrar.classList.add("cerrar");
    btnCerrar.innerHTML= "Cerrar";
    contenedorNotas.insertBefore(btnCerrar, contenedorNotas.childNodes[6]); 
  var imagenPerfil= document.createElement("img", "col-3");
    imagenPerfil.classList.add("imagenPerfil");
    imagenPerfil.setAttribute("src", "image/fotoPerfil.png")
    contenedor.insertBefore(imagenPerfil, contenedor.childNodes[0]);

  btnCerrar.addEventListener("click", function(){
    this.parentElement.parentElement.remove();
  });

  btnPublicar.addEventListener("click", function(){
      var contenedor = document.createElement("div")
      contenedor.classList.add("box" );
      contenedor.setAttribute("id", "contenedor")
      cajas.insertBefore(contenedor, cajas.childNodes[0]);

      var nombreCompletoNotas = document.createElement("div")
      nombreCompletoNotas.classList.add("nombreCompletoNotas");
      nombreCompletoNotas.innerText = "CarolMadeleineJuárez";
      contenedor.insertBefore(nombreCompletoNotas, contenedor.childNodes[1])

      var mensajeNotas= document.createElement("div");
      mensajeNotas.classList.add("mensajeNotas");
      mensajeNotas.innerText = textArea.value;
      contenedor.insertBefore(mensajeNotas, contenedor.childNodes[2]);

      var horaActual = new Date ();
      var hora = horaActual.getHours();
      var minuto = horaActual.getMinutes();
      var horaContenedor = document.createElement("span");
      horaContenedor.classList.add("horaNotas")
      horaContenedor.innerHTML= hora + ":"+ minuto;
      contenedor.insertBefore(horaContenedor, contenedor.childNodes[3]);

      var color = document.getElementById("inputColor").value;
      var resultado = document.getElementById("contenedor").style.backgroundColor = color;
      this.parentElement.parentElement.remove();
    });
}