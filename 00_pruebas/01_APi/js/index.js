import countBack from "./domPrueba/06_conteo_regresivo.js";
import systemOnlineP from "./domPrueba/10_deteccion_red.js";
import modeDark from "./domPrueba/05_lightdark.js";
import menuHamburger from "./domPrueba/01_menu_hamburger.js";
import { digitalClock, alarm } from "./domPrueba/02_reloj.js";
import responsiveEmbebido from "./domPrueba/07_responsive_embebido.js";
import scrollTop from "./domPrueba/04_scrolltop.js";
import { moverBall } from "./domPrueba/03_teclado.js";
import responsiveTesterP from "./domPrueba/08_tester_resposive.js";
import userAgentP from "./domPrueba/09_user_agent.js";
import camWebP from "./domPrueba/11_cam_web.js";
import getGeolocationP from "./domPrueba/12_geolocalizacion.js";
import filtersP from "./domPrueba/13_filtro_busqueda.js";
import drawP from "./domPrueba/14_sorteo_p.js";
import sliderPrueba from "./domPrueba/15_slider_prueba.js";
import spy from "./domPrueba/16_scroll_spy.js";
import videoSmartP from "./domPrueba/17_video_intelligent.js";
import validacionFormulario from "./domPrueba/18_validacion_formularios.js";
import speechVoices from "./domPrueba/19_narrador.js";

const d = document;

d.addEventListener("DOMContentLoaded", (e) => {
  menuHamburger(".panel", ".panel-btn", ".menu a");
  digitalClock("#reloj", "#iniciar-reloj", "#desactivar-reloj");
  alarm("assets/alarma.mp3", "#iniciar-alarma", "#detener-alarma");
  countBack(
    "conteo",
    "Aug 26,2023 12:06:00",
    "Finalizo el tiempo del proyecto"
  );
  scrollTop(".scrolltop");
  responsiveEmbebido(
    "youtube",
    "(min-width:800px)",
    `<a href="https://youtu.be/9uIcLSHgzrM">Ver Video</a>`,
    `<iframe width="560" height="315" src="https://www.youtube.com/embed/9uIcLSHgzrM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
  );
  responsiveEmbebido(
    "google-maps",
    "(min-width:800px)",
    `<a href="https://goo.gl/maps/eZFRTgTf7VsAsN5KA">Ver Mapa</a>`,
    `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63538.98873269864!2d-73.356241!3d5.539294!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e6a7c2e897fba5b%3A0xac9fda7e6b9aa68c!2zVHVuamEsIEJveWFjw6E!5e0!3m2!1ses!2sco!4v1661821595199!5m2!1ses!2sco" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`
  );
  responsiveTesterP("responsive-tester-p");
  userAgentP("user-agent-p");
  camWebP("camweb");
  getGeolocationP("geolocation");
  filtersP(".card-filter",".card");
  drawP("#winner-btn",".player");
  sliderPrueba();
  spy();
  videoSmartP();
  validacionFormulario();
});

d.addEventListener("keydown", (e) => {
  moverBall(e, ".ball", ".stage");
});

modeDark(".theme-dark", "dark-mode");
systemOnlineP();

speechVoices();
