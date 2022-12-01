export function PostCard(props) {
  let { id, title, date, slug, _embedded } = props,
    dateFormat = new Date(date).toLocaleDateString(),
    img = _embedded["wp:featuredmedia"]
      ? _embedded["wp:featuredmedia"][0].source_url
      : "./app/assets/favicon.png";

  document.addEventListener("click",e=>{
    if (!e.target.matches(".post-card a")) return false;
    localStorage.setItem("wpPostId",e.target.dataset.id)
  })

  return `<article class="post-card">
    <img src="${img}" alt="${slug}">
    <h2>${title.rendered}</h2>
    <p>
    <time datetime="${dateFormat}">Fecha: ${dateFormat}</time>
    <a href="#/${slug}" data-id="${id}">Ver publicación</a>
    </p>
        
    </article>
    `;
}
