const d = document,
  $table = d.querySelector(".crud-table"),
  $form = d.querySelector(".crud-form"),
  $title = d.querySelector(".crud-title"),
  $template = d.getElementById("crud-template").content,
  $fragmento = d.createDocumentFragment();

const getAll = async () => {
  try {
    let res = await fetch("http://localhost:5555/santos"),
      json = await res.json();
      if (!res.ok) throw { status: res.status, statusText: res.statusText };

    json.forEach((el) => {
      $template.querySelector(".name").textContent = el.nombre;
      $template.querySelector(".constellation").textContent = el.constelacion;
      $template.querySelector(".edit").dataset.id = el.id;
      $template.querySelector(".edit").dataset.name = el.nombre;
      $template.querySelector(".edit").dataset.constellation = el.constelacion;
      $template.querySelector(".delete").dataset.name = el.nombre;
      $template.querySelector(".delete").dataset.id = el.id;

      let $clone = d.importNode($template, true);

      $fragmento.appendChild($clone);
    });
    $table.querySelector("tbody").appendChild($fragmento);
  } catch (err) {
    let message = err.statusText || "Ocurrio un error";
    $table.insertAdjacentHTML(
      "afterend",
      `<p><b>Error ${err.status}: ${message}</b></p>`
    );
  }
};

d.addEventListener("DOMContentLoaded", getAll());

d.addEventListener("submit", async (e) => {
  if (e.target === $form) {
    e.preventDefault();
    if (!e.target.id.value) {
      try {
        let options = {
          method: "POST",
          headers: {
            "Content-type": "application/json; charset=utf-8",
          },
          body: JSON.stringify({
            nombre: e.target.nombre.value,
            constelacion: e.target.constelacion.value,
          }),
        };
        let res = await fetch("http://localhost:5555/santos", options),
          json = await res.json();
          alert(`El santo ${e.target.nombre.value} fue creado con éxito`);
          if (!res.ok) throw { status: res.status, statusText: res.statusText };
          location.reload();
      } catch (err) {
        let message = err.statusText || "Ocurrio un error";
        $form.insertAdjacentHTML(
          "afterend",
          `<p><b>Error ${err.status}: ${message}</b></p>`
        );
      }
    } else {
      try {
        let options = {
          method: "PUT",
          headers: {
            "Content-type": "application/json; charset=utf-8",
          },
          body: JSON.stringify({
            nombre: e.target.nombre.value,
            constelacion: e.target.constelacion.value,
          }),
        };
        let res = await fetch(
            `http://localhost:5555/santos/${e.target.id.value}`,
            options
          ),
          json = await res.json();
          alert(`El santo ${e.target.nombre.value} fue editado con éxito`);
          if (!res.ok) throw { status: res.status, statusText: res.statusText };
          location.reload();
      } catch (err) {
        let message = err.statusText || "Ocurrio un error";
        $form.insertAdjacentHTML(
          "afterend",
          `<p><b>Error ${err.status}: ${message}</b></p>`
        );
      }
    }
  }
});

d.addEventListener("click", async (e) => {
  if (e.target.matches(".edit")) {
    $form.nombre.value = e.target.dataset.name;
    $form.constelacion.value = e.target.dataset.constellation;
    $form.id.value = e.target.dataset.id;
    $title.textContent = "Editar Santo";
  }
  if (e.target.matches(".delete")) {
    let isDelete = confirm(`Se eliminara a ${e.target.dataset.name}`);
    if (isDelete) {
      try {
        let options = {
          method: "DELETE",
          headers: {
            "Content-type": "application/json; charset=utf-8",
          }
        };
        let res = await fetch(
            `http://localhost:5555/santos/${e.target.dataset.id}`,
            options
          ),
          json = await res.json();
          alert(`El santo ${e.target.dataset.name} ha sido eliminado`);
        if (!res.ok) throw { status: res.status, statusText: res.statusText };
        location.reload();
      } catch (err) {
        let message = err.statusText || "Ocurrio un error";
        $table.insertAdjacentHTML(
          "afterend",
          `<p><b>Error ${err.status}: ${message}</b></p>`
        );
      }
    }
  }
});
