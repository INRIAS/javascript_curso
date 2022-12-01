import { Loader } from "./components/Loader.js";
import { Main } from "./components/Main.js";
import { Header } from "./components/Header.js";
import { Router } from "./components/Router.js";
import { infiniteScroll } from "./helpers/infinite_scroll.js";

export function App() {
  const $root = document.getElementById("root");
  $root.innerHTML=null;
  $root.insertAdjacentElement("afterbegin", Header());
  $root.insertAdjacentElement("beforeend", Main());
  $root.insertAdjacentElement("beforeend", Loader());

  Router();
  infiniteScroll();
}
