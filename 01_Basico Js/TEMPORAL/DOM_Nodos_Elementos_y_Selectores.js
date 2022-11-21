/* //Colecciones de Html
console.log(document.getElementsByTagName("li"));//llamar etiquetas
console.log(document.getElementsByClassName("card"));//llamar por clases
console.log(document.getElementsByName("nombre"));//llamar por name
console.log(document.getElementById("menu"));//llamar por id

//Remplazos lista de nodos
console.log(document.querySelector("#menu"));//selector rapido All One pero es mas lento
console.log(document.querySelector("a"));//Me trae el primero se encuentre
console.log(document.querySelectorAll("a"));//Me trae todos
console.log(document.querySelectorAll("a").length);//Me trae todos
console.log(document.querySelectorAll("a").length);//Me trae todos

document.querySelectorAll("a").forEach((el)=>console.log(el))
console.log(document.querySelectorAll(".card"));
console.log(document.querySelectorAll(".card")[2]);//Llama algun elemento []Como si fuese un array
console.log(document.querySelectorAll("#menu li")); */

/* console.log(document.documentElement.lang);
console.log(document.documentElement.getAttribute("Lang"));
console.log(document.querySelector(".link-dom").href);
console.log(document.querySelector(".link-dom").getAttribute("href"));//get es similar a obtener en programacion

// -----------------------------------------------------
//alterar las etiquetas
document.documentElement.lang ="en"
console.log(document.documentElement.getAttribute("Lang"));
//Forma Nueva
document.documentElement.setAttribute("lang","es-MX")//get trae un valor y set lo modifica o agrega
console.log(document.documentElement.getAttribute("Lang"));

//trabajar con variables
const $linkDOM = document.querySelector(".link-dom");//$ para variables del DOM
$linkDOM.setAttribute("target","_blank");
$linkDOM.setAttribute("rel","noopener");//quita la relacion de una pestaña con otra
$linkDOM.setAttribute("href","https://youtube.com//jonmircha");
console.log($linkDOM.hasAttribute("rel"));//booleano true o false
//para remover
$linkDOM.removeAttribute("rel")//quita una etiqueta existente
console.log($linkDOM.hasAttribute("rel")); */

// -----------------------------------------
/* //Data-Attributes

//pide dato por consola
console.log($linkDOM.getAttribute("data-description"));
//pide dato por consola con notacion del punto
console.log($linkDOM.dataset);
//solicitar un data en particular
console.log($linkDOM.dataset.description);
//cambia el valor de una atributo en la clase $linkDOM
$linkDOM.setAttribute("data-id","2")
//pide dato por consola con notacion del punto
console.log($linkDOM.dataset.id);

//cambia el valor de una atributo en la clase $linkDOM
$linkDOM.dataset.description="Suscribete al canal"
//pide dato por consola con notacion del punto
console.log($linkDOM.dataset.description);
//pregunta si esta el atributo
console.log($linkDOM.hasAttribute("data-id"));
//remueve el atributo
$linkDOM.removeAttribute("data-id")
//pregunta si esta el atributo
console.log($linkDOM.hasAttribute("data-id")); */



// -----------------------Agregar Stylos-----------------------------
/* const $linkDOM = document.querySelector(".link-dom")
console.log($linkDOM.style);//Me traen un map ccs con todas las propiedades y las usadas
console.log($linkDOM.getAttribute("style")); //me trae solo info relevante

console.log($linkDOM.style.backgroundColor);
console.log($linkDOM.style.color);

console.log(window.getComputedStyle($linkDOM));//Forma con notacion de punto
console.log(getComputedStyle($linkDOM).getPropertyValue("color"));

$linkDOM.style.setProperty("text-decoration","none")
$linkDOM.style.setProperty("display","block")
// Notacion del punto
$linkDOM.style.width="50%";
$linkDOM.style.textAlign="center";
$linkDOM.style.marginLeft="auto";
$linkDOM.style.marginRight="Auto";
$linkDOM.style.padding="1rem";
$linkDOM.style.borderRadius="5rem";

//Variables CSS - Custom Property

//Cargamos el html
const $html=document.documentElement,
    $body=document.body;

//asignamos a una variable las propiedades css del Html
let varDarkColor=getComputedStyle($html).getPropertyValue("--dark-color")
let varYellowColor=getComputedStyle($html).getPropertyValue("--yellow-color")


console.log(varDarkColor,varYellowColor);
//y las variable se las asignamos a la etiqueta deseada
$body.style.backgroundColor=varDarkColor;
$body.style.color=varYellowColor;

//Cambia el valor
$html.style.setProperty("--dark-color","#000")
//Asigna el valor
varDarkColor=getComputedStyle($html).getPropertyValue("--dark-color")
//Actualiza el valor
$body.style.backgroundColor=varDarkColor; */


/* // -------Agregar clases a un tag--------
const $card=document.querySelector(".card");
console.log($card);
console.log($card.className);//Propiedad de la clase o nombre asignado
console.log($card.classList);//Ver de que esta compuesta la clase DOMLIST

//----MANIPULAR----
//Pregunta
console.log($card.classList.contains("rotate-45"));//Pregunta si hay una clase
// --Agregar
$card.classList.add("rotate-45");//asigan una clase existente
console.log($card.classList.contains("rotate-45"));
console.log($card.className);
console.log($card.classList);
// --remover
$card.classList.remove("rotate-45");
console.log($card.classList.contains("rotate-45"));
//Toggle  interruptor, si esta la quita y sino esta la agrega
$card.classList.toggle("rotate-45");
console.log($card.classList.contains("rotate-45"));
//Reemplazar clase
$card.classList.replace("rotate-45","rotate-135");//Clase a cambiar- clase a poner
console.log($card.classList); */
//


/* //------------------- AGREGAR O REEMPLAZR TEXTO HTML
const $whatIsDOM=document.querySelector("#que_es");
let texto=`
<p>
        El modelo de Objetos delDocumento <b><i>DOM</i></b> es una API para html y xml
    </p>
    <p>
        Este provee una representacion estructural del documento
    </p>
    <p>
        <mark>
            El DOM no es parte de la especificacion
        </mark>
    </p>
`;

$whatIsDOM.innerText=texto;//Lo remplaza tal cual
$whatIsDOM.textContent=texto;//Lo remplaza forma lineal
$whatIsDOM.innerHTML=texto;//Lo reemplaza con estilo HTML al contenido
$whatIsDOM.outerHTML=texto;//Reemplaza todo y contenedor */

/* //------DOM TRAVERSING--Recorriendo el DOM----
const $cards = document.querySelector(".cards")

console.log($cards);
console.log($cards.children);//Childre: busqueda hacia adentro
console.log($cards.children[2]);//Childre: busqueda hacia adentro de posicion 3
console.log($cards.parentElement); //bloque padre body
console.log($cards.firstElementChild);//Primer hijo
console.log($cards.lastElementChild);//ultimo hijo
console.log($cards.previousElementSibling);//previous:bloque anterio mas cercano
console.log($cards.nextElementSibling);//next:bloque siguientemas cercano
console.log($cards.closest("div"));
console.log($cards.closest("body"));//ancestro del padre mas cercano
console.log($cards.children[3].closest("section"));//Padre mas cercano

$cards.children[2].style.color="pink"
$cards.children[3].style.backgroundColor="blue" */

/* //--------CREAR ELEMENTOS y FRAGMENTOS EN HTML------


const $figure = document.createElement("figure"),
    $img = document.createElement("img"),
    $figcaption = document.createElement("figcaption"),
    $figcaptioText = document.createTextNode("Sepia"),
    $cards = document.querySelector(".cards"),
    $figure2 = document.createElement("figure")

$img.setAttribute("src", "https://placeimg.com/200/200/any/sepia");
$img.setAttribute("alt", "Sepia");
$figure.classList.add("card");

$figcaption.appendChild($figcaptioText);
$figure.appendChild($img);
$figure.appendChild($figcaption);
$cards.appendChild($figure);

$figure2.innerHTML = `
<img src="https://placeimg.com/200/200/any/grayscale" alt="grayscale">
<figcaption>Gray Scale</figcaption>
`;

$figure2.classList.add("card");
$cards.appendChild($figure2);
//--------------------------------------
const estaciones = ["Primavera", "Verano", "Otoño", "Invierno"],//Arreglo
    $ul = document.createElement("ul");//Creamos un elemento

document.write("<h3>ESTACIONES DEL AÑO</h3>");//Generamos un titulo
document.body.appendChild($ul);//agregamos el ul al body

estaciones.forEach(el => {//un foreach para egenrar un elemento por cada valor en el arreglo
    const $li = document.createElement("li");//Creamos un li
    $li.textContent = el;//agregamos el texto que haya en el valor del arreglo
    $ul.appendChild($li);//Agregamos el hijo li al ul
});

const continentes = ["África", "America", "Europa", "Asias"],
    $ul2 = document.createElement("ul");

document.write("<h3>CONTINENTES</h3>");
document.body.appendChild($ul2);

// $ul2.innerHTML="";
continentes.forEach((el) => ($ul2.innerHTML += `<li>${el}</li>`));

const meses = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
],
    $ul3 = document.createElement("ul"),
    $fragmen = document.createDocumentFragment();

document.write("<h3>MESE DEL AÑO</h3>");
meses.forEach(el => {
    const $li = document.createElement("li"),
    $link_a2=document.createElement("a");
    $link_a2.href="#";
    $link_a2.style.textDecoration="none";
    $link_a2.style.color="blue";
    $link_a2.innerHTML = el;
    $li.appendChild($link_a2)
    $fragmen.appendChild($li);
});

$ul3.appendChild($fragmen);
document.body.appendChild($ul3); */


/* //---------------TEMPLATE HTML----------
const $cards=document.querySelector(".cards"), //cargamos la clase cards la cual le insertaremos todo
$template=document.getElementById("template-card").content,//apuntar al contenido de una etiqueta con el id
$fragm=document.createDocumentFragment(),//fragmento para almacenar
cardContent=[//Array que funciona como carga de datos
    {
        title:"Tech",
        img:"https://placeimg.com/200/200/tech"
    },
    {
        title:"Animals",
        img:"https://placeimg.com/200/200/animals"
    },
    {
        title:"People",
        img:"https://placeimg.com/200/200/people"
    }
];

cardContent.forEach(el=>{
    //no creamos las tag sino asignamos ya que la etiqueta esta creada
    //$template es donde cargamos la etiqueta completa en este caso un template
    $template.querySelector("img").setAttribute("src",el.img);//Asignamos url de el array img
    $template.querySelector("img").setAttribute("alt",el.title);//Asignamos alt de el array titulo
    $template.querySelector("figcaption").textContent=el.title;//asignamos nombre del array titulo

    let $clone=document.importNode($template,true);//true copia el tag y su contenido, el false solo el tag
    $fragm.appendChild($clone);
});

$cards.append($fragm);
 */

/* //------MODIFICADOR DE ELEMENTOS(OLD STYLE)-----

const $cards=document.querySelector(".cards"),
$newCard=document.createElement("figure"),
$cloneCards=$cards.cloneNode(true);


$newCard.classList.add("card")
$newCard.innerHTML=`
<img src="https://placeimg.com/200/200/any" alt="any">
            <figcaption>Any</figcaption>
`;
// $cards.replaceChild($newCard,$cards.children[2]);
// $cards.insertBefore($newCard,$cards.children[0]);
// $cards.insertBefore($newCard,$cards.firstChild);
// $cards.removeChild($cards.lastElementChild);
document.body.appendChild($cloneCards); */



/* //------MODIFICADOR DE ELEMENTOS(COOL STYLE)-----


//insertAdjacent...
//.insertAdjacentElement(position,el)
//.insertAdjacentHTML(position,html)
//.insertAdjacentText(position,text)

//Posiciones:
//beforebegin(hermano anterior)
//afterbegin(primer hijo)
//beforeend(ultimo hijo)
//afterend(hermano hijo)

const $cards = document.querySelector(".cards"),
    $newCard = document.createElement("figure"),
    $cloneCards = $cards.cloneNode(true);


$newCard.classList.add("card")
let contentCard = `
<img src="https://placeimg.com/200/200/any" alt="any">
            <figcaption></figcaption>
`;

// $cards.insertAdjacentElement("beforebegin",$newCard);
// $cards.insertAdjacentElement("afterbegin",$newCard);
// $cards.insertAdjacentElement("beforeend",$newCard);
// $cards.insertAdjacentElement("afterend",$newCard);

$newCard.insertAdjacentHTML("afterbegin", contentCard);
$newCard.querySelector("figcaption").insertAdjacentText("beforeend", "Any")
// $cards.insertAdjacentElement("beforeend",$newCard);

// $cards.before($newCard); //Agrega antes del hermano
// $cards.after($newCard); //Agrega despues del hermano
// $cards.append($newCard); //Agrega despues del inicio hijo
// $cards.prepend($newCard); //Agrega antes del final hijo
 */

/*




*/

/*
//----------EVENTOS------

//Even Handler:funcion que se ejecuta en ese evento
//--Manejador HTML
function holaMundo(){
    alert("Probando evento dentro de html");
    console.log(event);
}

//--Manejador Semantico-- Secuencia que este maneja
const $eventoSemantico=document.getElementById("evento-semantico");

//El elemento html al que le vamos a asignar el evento
//.nombre del evento
//=la funcion que quiero utilizar sin parentecis, porque se ejecuta al cargar sin el click
$eventoSemantico.onclick=holaMundo;
// Defecto
//--Solo permite asignar un solo evento utilizando no permite mas de dos con una funcion diferente, este solo toma el ultimo que esta en el orden de la jerarquia
$eventoSemantico.onclick=function(e){
    alert("Hola mundo Manejador de Eventos Semánticos")
    console.log(e);
    console.log(event);
};

//--MANEJADORES MULTIPLES-- Permite infinidad de llamar funciones con un mismo manejador de eventos
$eventoMultiple=document.getElementById("evento-multiple");

//El elemento html al que le vamos a asignar el evento
//.addEventListetener
//("",parametro) "el evento a realizar", y luego lo que llama o se ejecutaraigual sin parentesis

$eventoMultiple.addEventListener("click",holaMundo);
$eventoMultiple.addEventListener("click",(e)=>{
    alert("Hola Mundo Manejador de Eventos Multiples");
    console.log(e);
    console.log(e.type);
    console.log(e.target);
    console.log(event);
});
//Como no podemos pasar datos a un Event - Handler, se asigna una funcion manejadora directa y a esta se le asigna la funcion declarada con su dato

function saludar(nombre="Desconocid@"){
    alert(`Hola ${nombre}`)
};
$eventoMultiple.addEventListener("click",()=>saludar("Stiven"))

//--Remover Eventos--
const $eventoRemover=document.getElementById("evento-remover");

function removerDobleClick(e) {
    alert(`Se va a remover el evento ${e.type}`);
    $eventoRemover.removeEventListener("dblclick",removerDobleClick);
    $eventoRemover.disabled="True";
}

$eventoRemover.addEventListener("dblclick",removerDobleClick)
 */

//----------FLUJO DE  EVENTOS(Face de burbuja)-------


/* const $divsEventos = document.querySelectorAll(".eventos-flujo div");
$linkEventos = document.querySelector(".eventos-flujo a");

function flujoEventos(e) {
  console.log(
    `Hola te saluda ${this.className}, el click lo origino ${e.target.className}`//el this a punta a la funcion donde se ejecuta
  );
  e.stopPropagation(); //detener la propagacion
};

//Metodo de Burbuja
$divsEventos.forEach((div) => {
  //El div tiene un tercer valor ya sea true o false para invertir o no la burbuja
  div.addEventListener("click", flujoEventos);
  div.addEventListener("click", flujoEventos, {
    capture: false,//Metodo de Captura
    once: false,//Metodo que hace que solo se active una unica vez
  })
});

// $divsEventos.forEach((div) => {
//   //burbuja
//   div.addEventListener("click", flujoEventos);
// });


//----stopPropagation y prevenDefault-------
$linkEventos.addEventListener("click", (e) => {
  alert("Hola soy... Stiven AS");
  e.preventDefault();//Anula la caracteristica Default
  e.stopPropagation();//Detiene la propagacion
})


document.addEventListener("click",(e)=>{
  console.log("Click en", e.target);

  if (e.target.matches(".eventos-flujo a")) {
    alert("Hola Stiven");
    e.preventDefault();
  }
}) */

/* //---ASIGNACION DE EVENTOS---
function flujoEventos(e) {
  console.log(
    `Hola te saluda ${this.className}, el click lo origino ${e.target.className}`//el this a punta a la funcion donde se ejecuta
  );
  e.stopPropagation(); //detener la propagacion
};

document.addEventListener("click",(e)=>{
  console.log("Click en", e.target);

  if (e.target.matches(".eventos-flujo div")) {
    flujoEventos(e);
  }

  if (e.target.matches(".eventos-flujo a")) {
    alert("Hola Stiven");
    e.preventDefault();
  }
}); */


/* /// BOM
//windos hace referencia a todo el navegador
//document hace referencia donde se proyecta el contenido

window.addEventListener("resize",e=>{
  console.clear();
  console.log("------Evento Resize");
  console.log(window.innerWidth);
  console.log(window.innerHeight);
  console.log(window.outerWidth);
  console.log(window.outerHeight);
});

window.addEventListener("scroll",e=>{
  console.clear();
  console.log("------Evento Scroll");
  console.log(window.scrollX);
  console.log(window.scrollY);
  console.log(e);
});

window.addEventListener("load", e=>{
  //console.clear();
  console.log("-------Evento Load");
  console.log(window.screenY);
  console.log(window.screenX);
  console.log(e);
});

window.addEventListener("DOMContentLoaded", e=>{
  console.clear();
  console.log("-------Evento DOMContentLoaded");
  console.log(window.screenY);
  console.log(window.screenX);
  console.log(e);
});
 */

/* //-------METODOS BOM-----
// //Window
// alert("Alerta");
// confirm("Confirmacion");
// prompt("Aviso");

const $btnAbrir = document.getElementById("abrir-ventana"),
  $btnCerrar = document.getElementById("cerrar-ventana"),
  $btnImprimir = document.getElementById("imprimir-ventana");

let ventana;

$btnAbrir.addEventListener("click", (e) => {
  ventana = open("https://jonmircha.com")
});
$btnCerrar.addEventListener("click", (e) => {
  ventana.close();
});
$btnImprimir.addEventListener("click", (e) => {
  window.print()
});
 */

/* console.log("------Objeto URL (Location))-------");

console.log(location);//
console.log(location.origin);//Ruta de la cual se origina
console.log(location.protocol);//protocolo http
console.log(location.host);//host y puerto
console.log(location.hostname);//solo host
console.log(location.port);//puerto por donde escucha
console.log(location.href);//direccion con diagonal
console.log(location.hash);//#locacion despues de un hash
console.log(location.search);//Valores pasados por la url
console.log(location.pathname);//archivo al que consultas
// location.reload()
// console.log(location.);
// console.log(location.); */

/* console.log("------Objeto URL (Location))-------");

console.log(history);
console.log(history.length);//conteo de paginas hacia atras
console.log(history.back());//Navegar # pag atras
console.log(history.forward());//Navegar # pag adelante
console.log(history.go());//Navecion antes o despues + o - */

/* console.log("------Objeto URL (Location))-------");
console.log(navigator);
console.log(navigator.connection);//Info de la RED
console.log(navigator.geolocation);//Geolocalizacion
console.log(navigator.mediaDevices);//Camaras, microfonos
console.log(navigator.mimeTypes);//formatos que acepta el navegador
console.log(navigator.onLine);// conecion o desconeccion de la red
console.log(navigator.serviceWorker);//APi para crear WEB Progresive
console.log(navigator.storage);//Api de almacenamiento
console.log(navigator.usb);// Conectado un dispositivo usb
console.log(navigator.userAgent);//Info del navegador en curso */