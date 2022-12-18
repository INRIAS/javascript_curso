import scrollTopBotton from "../../02_Apis/js/dom/04_boton_scroll.js";
import conuntDown from "../../02_Apis/js/dom/06_cuenta_regresiva.js";
import userDevideInfo from "../../02_Apis/js/dom/09_deteccion_dispositivos.js";
import networkStatus from "../../02_Apis/js/dom/10_deteccion_red.js";
import webCam from "../../02_Apis/js/dom/11_Detección _WebCam.js";
import hamburgerMenu from "../../02_Apis/js/dom/01_menu_hamburguesa.js";
import responsiveMedia from "../../02_Apis/js/dom/07_objeto_responsive.js";
import responsiveTester from "../../02_Apis/js/dom/08_prueba_resposive.js";
import { digitalClock, alarm } from "../../02_Apis/js/dom/02_reloj.js";
import { shorCuts, moveBall } from "../../02_Apis/js/dom/03_teclado.js";
import darkTheme from "../../02_Apis/js/dom/05_tema_oscuro.js";
import getGeolocation from "../../02_Apis/js/dom/12_geolocalizacion.js";
import searchFilter from "../../02_Apis/js/dom/13_filtro_busquedas.js";
import draw from "../../02_Apis/js/dom/14_sorteo.js";
import slider from "../../02_Apis/js/dom/15_carrucel.js";
import scrollSpy from "../../02_Apis/js/dom/16_scroll_espia.js";
import smartVideo from "../../02_Apis/js/dom/17_video_inteligente.js";
import contactFormValidations from "../../02_Apis/js/dom/18_validaciones_formulario.js";
import speechReader from "../../02_Apis/js/dom/19_narrador.js";

const d = document;

//Al documento o pagina web le agregamos a la carga la funcionalidad
d.addEventListener("DOMContentLoaded", (e) => {
    hamburgerMenu(".panel-btn", ".panel", ".menu a");
    digitalClock("#reloj", "#activar-reloj", "#desactivar-reloj");
    alarm("assets/alarma.mp3", "#activar-alarma", "#desactivar-alarma");
    moveBall(e, ".ball", ".stage")
    conuntDown("countdown", "Aug 25,2023 23:39:30", "Llego la hora del evento RED BULL😎");
    scrollTopBotton(".scroll-top-btn");
    responsiveMedia("youtube",
        "(min-width:1024px)",
        `<a href="https://youtu.be/6IwUl-4pAzc" target="_blank" rel="noopener">Ver Video</a>`,
        `<iframe width="560" height="315" src="https://www.youtube.com/embed/6IwUl-4pAzc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`);

    responsiveMedia("gmaps",
        "(min-width:1024px)",
        `<a href="https://goo.gl/maps/eZFRTgTf7VsAsN5KA" target="_blank" rel="noopener">Ver Mapa</a>`,
        `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63538.98873269864!2d-73.356241!3d5.539294!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e6a7c2e897fba5b%3A0xac9fda7e6b9aa68c!2zVHVuamEsIEJveWFjw6E!5e0!3m2!1ses!2sco!4v1661821595199!5m2!1ses!2sco" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`);

    responsiveTester("responsive-tester");
    userDevideInfo("user-device");
    webCam("webcam");
    getGeolocation("geolocation");
    searchFilter(".card-filter", ".card");
    draw("#winner-btn", ".player");
    slider();
    scrollSpy();
    smartVideo();
    contactFormValidations();

})

d.addEventListener("keydown", e => {
    shorCuts(e);
})
darkTheme(".dark-theme-btn", "dark-mode") //Se saca del DOM porque no se puede usar un DOM dentro de otro DOM
networkStatus();

speechReader();

/* d.addEventListener("keyup",e=>{
    shorCuts(e)
}) */
/* d.addEventListener("keypress", e => {
    shorCuts(e)
}) */