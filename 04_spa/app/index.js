import { App } from "./App.js";

document.addEventListener("DOMContentLoaded", App());
window.addEventListener("hashchange", App);
//Parentesis invocacion inmediata
//Sin parentesis espera primero la carga del DOM
