const d = document,
  $main = d.querySelector("main"),
  $links = d.querySelector(".links"),
  $count = d.querySelector(".count"),
  $previousApi = d.querySelector(".previous"),
  $nextApi = d.querySelector(".next");

let pokeAPI = "https://pokeapi.co/api/v2/pokemon/",
  $conteoInicial = 1,
  $conteoFinal = 20;

const loadPokemons = async (url) => {
  try {
    $main.innerHTML = `<img class="loader" src="assets/loaders.svg" alt="loader">`;

    let res = await fetch(url),
      json = await res.json(),
      $template = "";
    if (!res.ok) throw { status: res.status, statusText: res.statusText };
    console.log(json);

    for (let i = 0; i < json.results.length; i++) {
      // console.log(json.results[i]);

      try {
        let res = await fetch(json.results[i].url),
          pokemon = await res.json();
        if (!res.ok) throw { status: res.status, statusText: res.statusText };
        console.log(pokemon);
        $template += `
        <figure>
          <img src=${pokemon.sprites.front_default} alt=${pokemon.name}>
          <figcaption>${pokemon.name}</figcaption>
        </figure>
        `;
      } catch (err) {
        let message =
          err.statusText || "Ha ocurrido un error en la lectura del pokemon";
        $template.innerHTML = `
      <figure>
        <figcaption>${err.status}: ${message}</figcaption>
      </figure>
      `;
      }
    }

    $main.innerHTML = $template;

    if (json.previous) {
      $previousApi.href = json.previous;
      $previousApi.classList.remove("is-active");
    } else {
      $previousApi.href = "";
      $previousApi.classList.add("is-active");
    }

    if (json.next) {
      $nextApi.href = json.next;
      $nextApi.classList.remove("is-active");
    } else {
      $nextApi.href = "";
      $nextApi.classList.add("is-active");
    }

    $count.innerHTML = `
    <p><b>${$conteoInicial}-${$conteoFinal}</b> pókemones de <b>${json.count}</b></p>
    `;
  } catch (err) {
    let message =
      err.statusText || "Ha ocurrido un error en la lectura de la BD";
    $main.innerHTML = `<p><b>Error ${err.status}: ${message}</b></p>`;
  }
};

d.addEventListener("DOMContentLoaded", (e) => loadPokemons(pokeAPI));

d.addEventListener("click", (e) => {
  if (e.target.matches(".previous")) {
    e.preventDefault();
    loadPokemons(e.target.href);
    $conteoInicial -= 20;
    $conteoFinal -= 20;
  }

  if (e.target.matches(".next")) {
    e.preventDefault();
    loadPokemons(e.target.href);
    $conteoInicial += 20;
    $conteoFinal += 20;
  }
});
