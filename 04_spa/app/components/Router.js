import api from "../helpers/wp_api.js";
import { ajax } from "../helpers/ajax.js";
import { PostCard } from "./PostCard.js";


export function Router() {
  const d = document,
  w=window;
  
  let {hash}=w.location;
  console.log(hash);

  ajax({
    url: api.POSTS,
    cbSuccess: (posts) => {
      // console.log(posts);
      let html = "";
      posts.forEach((post) => {
        html += PostCard(post);
      });
      d.querySelector(".loader").style.display = "none";
      d.getElementById("posts").innerHTML = html;
    },
  });
}
