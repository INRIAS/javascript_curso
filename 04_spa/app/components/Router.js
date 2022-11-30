import api from "../helpers/wp_api.js";
import { ajax } from "../helpers/ajax.js";
import { PostCard } from "./PostCard.js";
import { Post } from "./Post.js";

export async function Router() {
  const d = document,
    w = window,
    $main = d.getElementById("main");

  let { hash } = w.location;
  console.log(hash);

  $main.innerHTML = null;

  if (!hash || hash === "#/") {
    $main.innerHTML = "<h2>Sección del Home</h2>";
    await ajax({
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
    let query=localStorage.getItem("wpSearch");

    if(!query) return false;

    await ajax({
      url: `${api.SEARCH}${query}`,
      cbSuccess: (search) => {
        console.log(search);
        if(!search){
          $main.innerHTML=`<h2>"La busqueda de <b>${localStorage.getItem("wpSearch")}</b> no encontro resultados en sistema"}</h2>`
        } else{
          let html = "";
          search.forEach(search=>{
            html +=PostCard(search);
            $main.innerHTML = html;
          })
        }
      },
    });
  } else if (hash === "#/contacto") {
    $main.innerHTML = "<h2>Sección de Contacto</h2>";
  } else {
    await ajax({
      url: `${api.POST}/${localStorage.getItem("wpPostId")}`,
      cbSuccess: (post) => {
        console.log(post);
        let html = "";
        html=Post(post)
        $main.innerHTML = html;
      },
    });

  }
  d.querySelector(".loader").style.display = "none";
}
