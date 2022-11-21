const d = document,
  $shows = d.getElementById("shows"),
  $template = d.getElementById("show-template").content,
  $fragment = d.createDocumentFragment();

d.addEventListener("keypress", async (e) => {
  if (e.target.matches("#search")) {
    if (e.key === "Enter") {
      try {
        $shows.innerHTML = `<img class="loader" src="assets/loaders.svg" alt="loader">`;
        let query = e.target.value,
          api = `https://api.tvmaze.com/search/shows?q=${query}`,
          res = await fetch(api);
        json = await res.json();

        console.log(api, res, json);
        if (!res.ok) throw { status: res.status, statusText: res.statusText };

        if (json.length === 0) {
          $shows.innerHTML = `<p>La busqueda <b>${e.target.value}</b> no encontro ningun resultado</p>`;
        } else {
          json.forEach((el) => {
            $template.querySelector("h3").textContent = el.show.name;
            $template.querySelector("div").innerHTML = el.show.summary
              ? el.show.summary
              : "<b>Sin descripción</b>";
            $template.querySelector("img").src = el.show.image.medium
              ? el.show.image.medium
              : "http://static.tvmaze.com/images/no-img/no-img-portrait-text.png";
            $template.querySelector("img").alt = el.show.name;
            $template.querySelector("img").style.width = "100%";
            $template.querySelector("img").style.minheight = "60%";
            $template.querySelector("img").style.height = "auto";
            $template.querySelector("img").style.width = "100%";
            $template.querySelector("a").href = el.show.url ? el.show.url : "#";
            $template.querySelector("a").target = el.show.url ? "_blank": "_self";
            $template.querySelector("a").textContent = el.show.url ? "Ver más": "";

            let $clone = d.importNode($template, true);
            $fragment.appendChild($clone);
          });
          $shows.innerHTML = "";
          $shows.appendChild($fragment);
        }
      } catch (err) {
        let message = err.statusText || "Ha ocurrido un error";
        $shows.innerHTML = `<p><b>Error ${err.status}: ${message}</b></p>`;
      }
    }
  }
});
