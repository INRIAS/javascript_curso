const d = document;
const $table = d.querySelector(".crud-table"),
  $form = d.querySelector(".crud-form"),
  $title = d.querySelector(".crud-title"),
  $template = d.getElementById("crud-template").content,
  $fragmento = d.createDocumentFragment();

const ajax = (options) => {
  let { url, method, success, error, data } = options;
  const xhr = new XMLHttpRequest();

  console.log(xhr);
  xhr.addEventListener("readystatechange", (e) => {
    if (xhr.readyState !== 4) return;

    if (xhr.status >= 200 && xhr.status < 300) {
      let json = JSON.parse(xhr.responseText);
      success(json);
    } else {
      let message = xhr.statusText || "Ocurrio un error";
      error(`Error ${xhr.status}: ${message} `);
    }
  });

  xhr.open(method || "GET", url);

  //la cabecera debe ir con formato adecudo para almacenar los datos
  xhr.setRequestHeader("Content-type", "application/json; charset=utf-8");

  //parse los datos de json a cadena de texto en el almacenamiento
  xhr.send(JSON.stringify(data));
};

const getAll = () => {
  ajax({
    method: "GET",
    url: "http://localhost:5555/santos",
    success: (res) => {
      console.log(res);
      res.forEach((el) => {
        $template.querySelector(".name").textContent = el.nombre;
        $template.querySelector(".constellation").textContent = el.constelacion;
        $template.querySelector(".edit").dataset.id = el.id;
        $template.querySelector(".edit").dataset.name = el.nombre;
        $template.querySelector(".edit").dataset.constellation =
          el.constelacion;
        $template.querySelector(".delete").dataset.name = el.nombre;
        $template.querySelector(".delete").dataset.id = el.id;

        let $clone = d.importNode($template, true);

        $fragmento.appendChild($clone);
      });
      $table.querySelector("tbody").appendChild($fragmento);
    },
    error: (err) => {
      console.error(err);
      $table.insertAdjacentHTML("afterend", `<p><b>${err}</b></p>`);
    },
  });
};

d.addEventListener("DOMContentLoaded", getAll);

d.addEventListener("submit", (e) => {
  if (e.target === $form) {
    e.preventDefault();

    if (!e.target.id.value) {
      ajax({
        url: "http://localhost:5555/santos",
        method: "POST",
        success: (res) => {
          location.reload();
          alert(`El santo ${e.target.nombre.value} ha sido creado con éxito`);
        },
        error: (err) =>
          $form.insertAdjacentHTML("afterend", `<p><b>${err}</b></p>`),
        data: {
          nombre: e.target.nombre.value,
          constelacion: e.target.constelacion.value,
        },
      });
    } else {
      ajax({
        url: `http://localhost:5555/santos/${e.target.id.value}`,
        method: "PUT",
        success: (res) => {
          location.reload();
          alert(`El santo ${e.target.nombre.value} ha sido editado con éxito`);
        },
        error: (err) =>
          $form.insertAdjacentHTML("afterend", `<p><b>${err}</b></p>`),
        data: {
          nombre: e.target.nombre.value,
          constelacion: e.target.constelacion.value,
        },
      });
    }
  }
});

d.addEventListener("click", (e) => {
  if (e.target.matches(".edit")) {
    $title.textContent = "Editar Santo";
    $form.nombre.value = e.target.dataset.name;
    $form.constelacion.value = e.target.dataset.constellation;
    $form.id.value = e.target.dataset.id;
  }
  if (e.target.matches(".delete")) {
    let isDelete = confirm(
      `Estas seguro de eliminar el santo ${e.target.dataset.name} ?`
    );

    if (isDelete) {
      ajax({
        url: `http://localhost:5555/santos/${e.target.dataset.id}`,
        method: "DELETE",
        success: (res) => {
          location.reload();
          alert(`El santo ${e.target.dataset.name} ha sido eliminado`);
        },
        error: (err) => alert(err),
      });
    }
  }
});
