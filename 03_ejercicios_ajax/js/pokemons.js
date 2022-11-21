const d = document,
  $main = d.querySelector("main"),
  $links = d.querySelector(".links");

let pokeAPI = "https://pokeapi.co/api/v2/pokemon/";

const loadPokemons = async (url) => {
  try {
    $main.innerHTML = `<img class="loader" src="assets/loader.svg" alt="loader">`;

    let res = await fetch(url),
      json = await res.json(),
      $template = "",
      $preLink,
      $nextLink;

    console.log(json);
    if (!res.ok) throw { status: res.status, statusText: res.statusText };
    // $preLink=json.previous;
    // $nextLink=json.next;
    // console.log($preLink,$nextLink);

    for (let i = 0; i < json.results.length; i++) {
      // console.log(json.results[i]);
      try {
        let res = await fetch(json.results[i].url),
          pokemon = await res.json();

        // console.log(res, pokemon);
        if (!res.ok) throw { status: res.status, statusText: res.statusText };
        $template += `
        <figure>
          <img src=${pokemon.sprites.front_default} alt=${pokemon.name}>
          <figcaption>${pokemon.name}</figcaption>
        </figure>
        `;
      } catch (err) {
        let message = err.statusText || "ha ocurrido un error";
        $template += `
        <figure>
          <figcaption>Error ${err.status}: ${message}</figcaption>
        </figure>
        `;
      }
    }
    $main.innerHTML = $template;
    $preLink = json.previous ? `<a href="${json.previous}">⏮️</a>` : "";
    $nextLink = json.next ? `<a href="${json.next}">⏭️</a>` : "";
    $links.innerHTML=$preLink + " " + $nextLink;
  } catch (err) {
    let message = err.statusText || "ha ocurrido un error";
    $main.innerHTML = `<p><b>Error ${err.status}: ${message}</b></p>`;
  }
};

d.addEventListener("DOMContentLoaded", (e) => loadPokemons(pokeAPI));

d.addEventListener("click",e=>{
  if (e.target.matches(".links a")) {
    e.preventDefault();
    loadPokemons(e.target.href)
  }
})
