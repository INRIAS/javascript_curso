import api from "../helpers/wp_api.js";
import { Ajax } from "../helpers/ajax.js";
import { PostCard } from "./PostCard.js";
import { Post } from "./Post.js";
import { SearchCard } from "./SearchCard.js";

export async function Router() {
  const d = document,
    w = window,
    $main = d.getElementById("main");

  let { hash } = w.location;
  console.log(hash);

  $main.innerHTML = null;

  if (!hash || hash === "#/") {
    await Ajax({
      url: api.POSTS,
      cbSuccess: (posts) => {
        console.log(posts);
        let html = "";
        posts.forEach((post) => {
          html += PostCard(post);
        });
        $main.innerHTML = html;
      },
    });

  } else if (hash.includes("#/search")) {
    let query = localStorage.getItem("wpSearch");

    if (!query){
      d.querySelector(".loader").style.display="none";
      return false;
    };

    await Ajax({
      url: `${api.SEARCH}${query}`,
      cbSuccess: (search) => {
        // console.log(search);
        let html = "";
        if (search.length === 0) {
          html = `<p class="error">"La busqueda de <b>${localStorage.getItem(
            "wpSearch"
          )}</b> no encontro resultados en sistema"</p>`;
        } else {
          search.forEach((search) => {
            html += SearchCard(search);
          });
        }
        $main.innerHTML = html;
      },
    });
    
  } else if (hash === "#/contacto") {
    $main.innerHTML = "<h2>Sección de Contacto</h2>";
  } else {
    await Ajax({
      url: `${api.POST}/${localStorage.getItem("wpPostId")}`,
      cbSuccess: (post) => {
        console.log(post);
        let html = "";
        html = Post(post);
        $main.innerHTML = html;
      },
    });
  }
  d.querySelector(".loader").style.display = "none";
}
