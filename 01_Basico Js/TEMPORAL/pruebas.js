// Variables Custom Property

/* //Cargar las etiquetas a una variable
const $html = document.documentElement,
    $body = document.body;

//Cargar los estilos a variables
let varYellowColor = getComputedStyle($html).getPropertyValue("--yellow-color");
let varBlackBack = getComputedStyle($html).getPropertyValue("--black-back");

console.log(varYellowColor, varBlackBack);

//  asignamos la variable a la etiqueta
$body.style.color = varYellowColor;
$body.style.background = varBlackBack;

// Cambiar el varYellowColor
$html.style.setProperty("--yellow-color", "pink");
//Actualizar la variable nuevamente
varYellowColor = getComputedStyle($html).getPropertyValue("--yellow-color");
//Actualizar el estilo a la etiqueta
$body.style.color = varYellowColor;
 */
// ------------------------------------------
// Atributos y propiedades a una etiqueta
const $parrafo = document.querySelector(".parrafo"),
    $titulo = document.querySelector(".titulo");

$titulo.style.backgroundColor = "#fff";
$titulo.style.width = "30%";
$titulo.style.textAlign = "center";
$titulo.style.marginLeft = "Auto";
$titulo.style.marginRight = "Auto";
$titulo.style.padding = "0.5%";
$titulo.style.borderRadius = "12px";

$parrafo.style.backgroundColor = "#fff";
$parrafo.style.width = "30%";
$parrafo.style.textAlign = "center";
$parrafo.style.marginLeft = "Auto";
$parrafo.style.marginRight = "Auto";
$parrafo.style.padding = "0.5%";
$parrafo.style.borderRadius = "12px";
// ------------------------------------------------------
console.log(document.documentElement.lang);
document.documentElement.lang = "es";

const $linkDOM = document.querySelector(".link");
$linkDOM.style.backgroundColor = "#fff";
$linkDOM.style.textDecoration = "none";
$linkDOM.style.color = "Pink";
$linkDOM.style.width = "30%";
$linkDOM.style.marginLeft = "Auto";
$linkDOM.style.marginRight = "Auto";
$linkDOM.style.margin = "10px";
$linkDOM.style.padding = "10px";
$linkDOM.style.borderRadius = "5px";
$linkDOM.setAttribute("href", "https://youtube.com//jonmircha");
$linkDOM.setAttribute("target", "_blank");

const $aTexto = document.querySelector(".aTexto");
$aTexto.setAttribute("placeholder", "Nombre:");
$aTexto.setAttribute("name", "texto");
$aTexto.style.width = "10%";
$aTexto.style.color = "blue";
$aTexto.style.padding = "0.5rem";
$aTexto.style.margin = "10px 10px";
$aTexto.style.display = "block";
//Prguntar o ver un dato
console.log(document.querySelector(".aTexto"))
console.log(document.documentElement.lang);
console.log(document.documentElement.getAttribute("Lang"))

const $card = document.querySelector(".card")
// Preguntar
console.log($card);
console.log($card.className);
console.log($card.classList);

// agregar

$card.classList.add("rotate-45");
console.log($card.classList.contains("rotate-45"));

//remplazar
$card.classList.replace("rotate-45", "rotate-135");
console.log($card.classList.contains("rotate-45"));

//interruptor
$card.classList.toggle("rotate-135");
console.log($card.classList.contains("rotate-135"));


//agregar varias clases
$card.classList.add("sepia", "opacity-80")

//Reemplazar texto
let cambioTexto = `<p>
<mark>
    ESTE TEXTO HA SIDO CAMBIADO CON CLASSLIST
</mark>
</p>`;

$parrafo.innerHTML = cambioTexto;


//--------CREAR ELEMENTOS y FRAGMENTOS EN HTML------
const estaciones = ["Otoño", "Invierno", "Verano", "Primavera"],
    $ul = document.createElement("ul");

document.write("<H2>ESTACIONES DEL AÑO</H2>");
document.body.appendChild($ul)

estaciones.forEach(el => {
    const $li = document.createElement("li"),
        $link_a = document.createElement("a");
    $link_a.setAttribute("href", "#");
    $link_a.textContent = el;
    $link_a.style.textDecoration = "none";
    $link_a.style.color = "white";
    $li.appendChild($link_a)
    $ul.appendChild($li);
});


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
    "Diciembre"
],
    $ulP2 = document.createElement("ul"),
    $frag = document.createDocumentFragment();

document.write("<H2>Meses del año</H2>");
meses.forEach(el => {
    const $li = document.createElement("li"),
        $enlace = document.createElement("a");
    $enlace.href = "#";
    $enlace.innerHTML = el;
    $enlace.style.textDecoration = "none";
    $enlace.style.color = "purple";
    $li.appendChild($enlace);
    $frag.appendChild($li);
})

$ulP2.appendChild($frag);
document.body.appendChild($ulP2);

//---------------TEMPLATE HTML----------
const $cardsP = document.querySelector(".cards"),
    $template = document.getElementById("template-card").content,
    $fragP = document.createDocumentFragment(),
    cardContent = [
        {
            title: "Tech",
            img: "https://placeimg.com/200/200/tech"
        },
        {
            title: "Animals",
            img: "https://placeimg.com/200/200/animals"
        },
        {
            title: "People",
            img: "https://placeimg.com/200/200/people"
        }
    ];

cardContent.forEach(el => {
    $template.querySelector("img").setAttribute("src", el.img)
    $template.querySelector("img").setAttribute("alt", el.title);
    $template.querySelector("figcaption").textContent = el.title;

    let $cloneP = document.importNode($template, true);
    $fragP.appendChild($cloneP);
})
$cardsP.appendChild($fragP);

//--------------------------------
const $cardsP2 = document.querySelector(".cards"),
    $newCard = document.createElement("figure"),
    $cloneCardsP = $cardsP2.cloneNode(true);

$newCard.classList.add("card");

$newCard.innerHTML = `<img src="https://placeimg.com/200/200/any" alt="any">
<figcaption>Any</figcaption>
`;

// $cardsP2.replaceChildren($newCard,$cardsP2.firstElementChild);
// $cardsP2.insertBefore($newCard,$cardsP2.firstElementChild)
// $cardsP2.insertBefore($newCard,$cardsP2.lastElementChild)
// $cardsP2.insertBefore($newCard,$cardsP2.children[4])
// $cardsP2.removeChild($cardsP2.children[3]);
// document.body.appendChild($cloneCardsP)

//--------MANEJADORES DE EVENTOS

//Manejador directo en el atributo HTML
function holaMundoP() {
    $titulo.style.color = "pink";
    document.body.style.backgroundColor = "#000";
};

//--Manejador Semantico
const $eventoSemanP = document.getElementById("evento-semantico");
$eventoSemanP.onclick = holaMundoP;
$eventoSemanP.onclick = function () {
    $titulo.style.color = "blue";
    document.body.style.backgroundColor = "purple"
};

//--EVENTO MULTIPLE
const $eventoStyle = document.querySelector(".prueba"),
    $eventoMultipleB = document.getElementById("evento-multiple")

function pruebaColor() {
    $eventoStyle.classList.toggle("evento_color")
}

$eventoMultipleB.addEventListener("click", pruebaColor)


//------FLUJO DE EVENTOS----------

// const $flujoEventos = document.querySelectorAll(".eventos-flujo div");

function flujo(e) {
    console.log(
        `Hola te saluda ${this.className}, y el click lo ordeno ${e.target.className}`
    );
};

// $flujoEventos.forEach(div => {
//     div.addEventListener("click", flujo, {
//         capture: true,
//         once: false
//     })
// })

//---ASIGNACION DE EVENTOS---

document.addEventListener("click", (e) => {
    console.log("Click en", e.target);
    if (e.target.matches(".eventos-flujo div")) {
        flujo(e);
    };
    if (e.target.matches(".eventos-flujo a")) {
        alert("Hola Link");
        e.preventDefault();
    };

})


