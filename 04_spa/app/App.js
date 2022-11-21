import { Loader } from "./components/Loader.js";
import { Posts } from "./components/Posts.js";
import { Header } from "./components/Header.js";
import { Router } from "./components/Router.js";

export function App() {
  const d = document,
    $root = document.getElementById("root");

  $root.insertAdjacentElement("afterbegin", Header());
  $root.insertAdjacentElement("beforeend", Posts());
  $root.insertAdjacentElement("beforeend", Loader());

  Router();
}
