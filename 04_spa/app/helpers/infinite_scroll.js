import { SearchCard } from "../components/SearchCard";
import api from "./wp_api.js";

export function infiniteScroll(){
  const d=document,
  w=window;

  let query= localStorage.getItem("wpSearch"),
  apiURL,
  component;

  w.addEventListener("scroll", (e) => {
    let { scrollTop, clientHeight, scrollHeight } = d.documentElement,
    {hash}=w.location;
  
    if (scrollTop + clientHeight === scrollHeight) {
      api.page++;
      if(!hash||hash==="#/"){
        apiURL=`${api.POSTS}&page=${api.page}`;
        component=SearchCard;
      };
    }
  });
};