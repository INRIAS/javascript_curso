import { Menu } from "./Menu.js";
import { SearchForm } from "./SearchForm.js";
import { Title } from "./Title.js";

export function Header() {
  const $header = document.createElement("header");
  $header.classList.add("header")
  $header.insertAdjacentElement("beforeend", Title());
  $header.insertAdjacentElement("beforeend", Menu());
  $header.insertAdjacentElement("beforeend", SearchForm());
  return $header;
}
