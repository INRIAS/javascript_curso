import { Header } from "./components/Header.js";
import { Loader } from "./components/Loader.js";
import { PostCard } from "./components/Postcard.js";
import { Posts } from "./components/Posts.js";
import { Ajax } from "./helpers/ajax.js";
import api from "./helpers/wp_api.js";

export function App() {
  const $root = document.getElementById("root");
  $root.insertAdjacentElement("beforeend", Header());
  $root.insertAdjacentElement("beforeend", Posts());
  $root.insertAdjacentElement("beforeend", Loader());

  Ajax({
    url: api.POSTS,
    cbSuccess: (posts) => {
      console.log(posts);
      let html = "";
      posts.forEach((post) => {
        html += PostCard(post);
      });
      document.querySelector(".loader").style.display="none";
      document.getElementById("posts").insertAdjacentHTML("beforeend",html);
    },
  });
}
