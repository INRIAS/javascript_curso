import { Loader } from "./components/Loader.js";
import { Main } from "./components/Main.js";
import { Header } from "./components/Header.js";
import { Router } from "./components/Router.js";

export function App() {
  const d = document,
    $root = document.getElementById("root");
  $root.innerHTML=null;
  $root.insertAdjacentElement("afterbegin", Header());
  $root.insertAdjacentElement("beforeend", Main());
  $root.insertAdjacentElement("beforeend", Loader());

  Router();
}
