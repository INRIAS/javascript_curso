const d = document;

export default function scrollSpy() {
  const $sections = d.querySelectorAll("section[data-scroll-spy]"); //a quien va a observas

  const cb = (entries) => {
    //la callback con lo eventos
    // console.log("entries", entries);

    entries.forEach((entry) => {
        const id = entry.target.getAttribute("id");// en la porpiedad entri pedimos el atributo que enlaza
      // console.log(entry);
      if (entry.isIntersecting) {
        d.querySelector(`a[data-scroll-spy][href="#${id}"]`).classList.add(
          "active"
        );
      } else {
        d.querySelector(`a[data-scroll-spy][href="#${id}"]`).classList.remove(
          "active"
        );
      }
    });
  };

  const observer = new IntersectionObserver(cb, {//intanciamos la propiedad observador
    //root es global en el documento
    // rootMargin :"-250px"//margen de lectura hacia adrento en las coordenadas
    threshold:[0.5, 0.75]
  }); 
  // console.log("observer",observer);

  $sections.forEach((el) => observer.observe(el)); //aplicamos el observador a cada tag que encuentre
}
