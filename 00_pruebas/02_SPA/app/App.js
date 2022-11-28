import { Header } from "./components/Header.js";
import { Loader } from "./components/Loader.js";
import { Main } from "./components/Main.js";
import { Router } from "./components/Router.js";

export function App() {
  const $root = document.getElementById("root");
  $root.innerHTML=null;
  $root.insertAdjacentElement("beforeend", Header());
  $root.insertAdjacentElement("beforeend", Main());
  $root.insertAdjacentElement("beforeend", Loader());

  Router();
}
