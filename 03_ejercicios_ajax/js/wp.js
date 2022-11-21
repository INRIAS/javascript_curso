const d = document,
  w = window,
  $site = d.getElementById("site"),
  $posts = d.getElementById("posts"),
  $loader = d.querySelector(".loader"),
  $template = d.getElementById("post-template").content,
  $fragment = d.createDocumentFragment(),
  DOMAIN = "https://css-tricks.com",
  // DOMAIN = "https://malvestida.com",
  SITE = `${DOMAIN}/wp-json`,
  API_WP = `${SITE}/wp/v2`,
  POSTS = `${API_WP}/posts?_embed`,
  PAGE = `${API_WP}/page`,
  CATEGORIES = `${API_WP}/categories`;

let page = 1,
  perPage = 5;

const getSiteData = async () => {
  try {
    let siteRes = await fetch(SITE),
      siteJson = await siteRes.json();
    if (!siteRes.ok)
      throw { status: siteRes.status, statusText: siteRes.statusText };
    console.log(siteJson);
    $site.innerHTML = `
    <h3>SITIO WEB</h3>
    <h2>
    <a href="${siteJson.url}" target="_blank">${siteJson.name}</a>
    </h2>
    <p>${siteJson.description}</p>
    <p>${siteJson.timezone_string}</p>
    `;
  } catch (err) {
    console.log(err);
    let message = err.statusText || "ha ocurrido un error";
    $site.innerHTML = `<p><b>Error ${err.status}: ${message}</b></p>`;
  }
};

const getPosts = async () => {
  $loader.style.display = "block";
  try {
    let postsRes = await fetch(`${POSTS}&page=${page}&per_page=${perPage}`),
      postsJson = await postsRes.json();
    if (!postsRes.ok)
      throw { status: postsRes.status, statusText: postsRes.statusText };
    console.log(postsJson);

    postsJson.forEach((el) => {
      let categories = "",
        tags = "";

      el._embedded["wp:term"][0].forEach(
        (el) => (categories += `<li> ${el.name}</li>`)
      );
      el._embedded["wp:term"][1].forEach(
        (el) => (tags += `<li> ${el.name}</li>`)
      );

      $template.querySelector(".post-image").src = el._embedded[
        "wp:featuredmedia"
      ]
        ? el._embedded["wp:featuredmedia"][0].source_url
        : "";
      $template.querySelector(".post-image").alt = el.title.rendered;
      $template.querySelector(".post-title").innerHTML = el.title.rendered;
      $template.querySelector(".post-author").innerHTML = `
      <img src="${el._embedded.author[0].avatar_urls["48"]}" alt="${el._embedded.author[0].name}">
      <figcaption>${el._embedded.author[0].name}</figcaption>`;
      $template.querySelector(".post-date").innerHTML = new Date(
        el.date
      ).toLocaleString();
      $template.querySelector(".post-link").href = el.link;
      $template.querySelector(".post-excerpt").innerHTML =
        el.excerpt.rendered.replace("[&hellip;]", "...");
      $template.querySelector(".post-categories").innerHTML = `
      <p>Categorías</p>
      <ul>${categories}</ul>
      `;
      $template.querySelector(".post-tags").innerHTML = `
      <p>Etiquetas</p>
      <ul>${tags}</ul>
      `;
      $template.querySelector(".post-content> article ").innerHTML =
        el.content.rendered;

      let $clone = d.importNode($template, true);
      $fragment.appendChild($clone);
    });
    $posts.append($fragment);
    $loader.style.display = "none";
  } catch (err) {
    console.log(err);
    let message = err.statusText || "ha ocurrido un error";
    $posts.innerHTML = `<p><b>Error ${err.status}: ${message}</b></p>`;
    $loader.style.display = "none";
  }
};

document.addEventListener("DOMContentLoaded", (e) => {
  getSiteData();
  getPosts();
});

w.addEventListener("scroll", (e) => {
  const { scrollTop, clientHeight, scrollHeight } = d.documentElement;

  if (scrollTop + clientHeight === scrollHeight) {
    page++;
    getPosts();
  }
});
