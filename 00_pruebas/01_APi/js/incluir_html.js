document.addEventListener("DOMContentLoaded", (e) => {
  const includeHTML = async (el, url) => {
    try {
      let options={
        method:"GET",
        headers:{
          "Content-type": "text/html; charset=utf-8"
        }
      }
      let res=await fetch(url,options);
      text=await res.text();
      
      if (!res.ok) throw {status:res.status, statusText:res.statusText}

      // console.log(text);

      el.outerHTML=text
    } catch (err) {
      let message=err.statusText||"Error al cargar el archivo, verificar la petición";
      el.outerHTML = `<div><p>Error ${err.status}: ${message}</p></div>`;
    }
  };

  document
    .querySelectorAll("[data-include]")
    .forEach((el) => includeHTML(el, el.getAttribute("data-include")));
});
