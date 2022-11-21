export function PostCard(props) {
  let { date, slug, title, _embedded } = props,
    dateFormat = new Date(date).toLocaleDateString(),
    urlPoster = _embedded["wp:featuredmedia"]
      ? _embedded["wp:featuredmedia"][0].source_url
      : "app/assets/favicon.png";

  return `
  <article class="post-card">
    <img src="${urlPoster}" alt="${title.rendered}">
    <h2>${title.rendered}</h2>
    <p>
    <time datetime="${dateFormat}">Fecha: ${dateFormat}</time>
    <a href="#/${slug}">Ver Publicación</a>
    </p>
  </article>
  `;
}
