import { PostCard } from "./Postcard.js";
import { Ajax } from "../helpers/ajax.js";
import api from "../helpers/wp_api.js";

export async function Router() {
  const d = document,
    w = window,
    $main = d.getElementById("main");

  let { hash } = w.location;
  console.log(hash);

  $main.innerHTML=null;
  if (!hash || hash === "#/") {
    await Ajax({
      url: api.POSTS,
      cbSuccess: (posts) => {
        console.log(posts);
        let html = "";
        posts.forEach((post) => {
          html += PostCard(post);
        });
        $main.insertAdjacentHTML("beforeend", html);
      },
    });
  } else if (hash.includes("#/search")) {
    $main.innerHTML = "<h2>Sección de Busqueda</h2>";
  } else if (hash === "#/contacto") {
    $main.innerHTML = "<h2>Sección de Contaco</h2>";
  } else {
    $main.innerHTML = "<h2>Sección de cada Post</h2>";
  }

  d.querySelector(".loader").style.display = "none";
}
