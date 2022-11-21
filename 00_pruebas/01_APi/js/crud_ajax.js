const d = document,
  $form = d.querySelector(".crud-form"),
  $title = d.querySelector(".crud-title"),
  $tabla = d.getElementById("crud-tabla"),
  $template = d.getElementById("crud-template").content,
  $frag = d.createDocumentFragment();
const xhr = new XMLHttpRequest();
// console.log(xhr);

const ajax = (options) => {
  let { url, method, success, error, data } = options;
  const xhr = new XMLHttpRequest();
  //   console.log(xhr);
  xhr.addEventListener("readystatechange", (e) => {
    if (xhr.readyState !== 4) return;

    if (xhr.status >= 200 && xhr.status < 300) {
      let json = JSON.parse(xhr.responseText);
      success(json);
    } else {
      //   console.error(err);
      let message = xhr.statusText || "Ocurrio un error";
      error(`Error ${xhr.status}: ${message}`);
    }
  });

  xhr.open(method || "GET", url);
  xhr.setRequestHeader("Content-type", "application/json; charset=UTF-8");
  xhr.send(JSON.stringify(data));
};

const getAll = () => {
  ajax({
    url: "http://localhost:5555/karakura",
    method: "GET",
    success: (res) => {
      console.log(res);

      res.forEach((el) => {
        $template.querySelector(".name").textContent = el.nombre;
        $template.querySelector(".range").textContent = el.rango;
        $template.querySelector(".edit").dataset.id = el.id;
        $template.querySelector(".edit").dataset.name = el.nombre;
        $template.querySelector(".edit").dataset.range = el.rango;
        $template.querySelector(".delete").dataset.id = el.id;
        $template.querySelector(".delete").dataset.name = el.nombre;

        let $clone = d.importNode($template, true);
        $frag.appendChild($clone);
      });
      $tabla.querySelector("tbody").appendChild($frag);
    },
    error: (err) => {
      console.error(err);
      $tabla.insertAdjacentHTML("afterend", `<p><b>${err}</b></p>`);
    },
    data: null,
  });
};

d.addEventListener("DOMContentLoaded", getAll());

d.addEventListener("submit", (e) => {
  if (e.target === $form) {
    e.preventDefault();
    if (!e.target.id.value) {
      ajax({
        url: "http://localhost:5555/karakura",
        method: "POST",
        success: (res) => {
          // location.reload();
          alert(
            `El personaje ${e.target.nombre.value} ha sido creado con éxito`
          );
        },
        error: (err) => {
          $form.insertAdjacentHTML("afterend", `<p><b>${err}</b></p>`);
        },
        data: {
          nombre: e.target.nombre.value,
          rango: e.target.rango.value,
        },
      });
    }else{
      ajax({
        url: `http://localhost:5555/karakura/${e.target.id.value}`,
        method: "PUT",
        success: (res) => {
          // location.reload();
          alert(
            `El personaje ${e.target.nombre.value} ha sido editado con éxito`
          );
        },
        error: (err) => {
          $form.insertAdjacentHTML("afterend", `<p><b>${err}</b></p>`);
        },
        data: {
          nombre: e.target.nombre.value,
          rango: e.target.rango.value,
        },
      });

    }
  }
});

d.addEventListener("click", (e) => {
  if (e.target.matches(".edit")) {
    $title.textContent = "Editar Personaje";
    $form.nombre.value = e.target.dataset.name;
    $form.rango.value = e.target.dataset.range;
    $form.id.value = e.target.dataset.id;
  }
  if (e.target.matches(".delete")) {
    let isDelete=confirm(`Deseas eliminar al personaje ${e.target.dataset.name}`);
    if (isDelete) {
      ajax({
        url: `http://localhost:5555/karakura/${e.target.dataset.id}`,
        method: "DELETE",
        success: (res) => {
          // location.reload();
          alert(
            `El personaje ${e.target.dataset.name} ha sido eliminado`
          );
        },
        error: (err) => {
          $form.insertAdjacentHTML("afterend", `<p><b>${err}</b></p>`);
        },
      });
    }
  }
});
