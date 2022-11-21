export function PostCard(props) {
  let { title, date, slug, _embedded } = props,
    dateFormat = new Date(date).toLocaleDateString(),
    img = _embedded["wp:featuredmedia"]
      ? _embedded["wp:featuredmedia"][0].source_url
      : "./app/assets/favicon.png";

  return `<article class="post-card">
    <img src="${img}" alt="${slug}">
    <h2>${title.rendered}</h2>
    <p>
    <time datetime="${dateFormat}">Fecha: ${dateFormat}</time>
    <a href="#/${slug}">Ver publicación</a>
    </p>
        
    </article>
    `;
}
