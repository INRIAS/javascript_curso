const d = document,
  $form = d.querySelector(".crud-form"),
  $title = d.querySelector(".crud-title"),
  $table = d.getElementById("crud-tabla"),
  $template = d.getElementById("crud-template").content,
  $frag = d.createDocumentFragment();

const getAll = async () => {
  try {
    let res = await fetch("http://localhost:5555/karakura"),
      json = await res.json();
    if (!res.ok) throw { status: res.status, statusText: res.statusText };

    console.log(json);
    json.forEach((el) => {
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
    $table.querySelector("tbody").appendChild($frag);
  } catch (err) {
    let message = err.status || "Ha ocurrido un error";
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
            rango: e.target.rango.value,
          }),
        };
        let res = await fetch("http://localhost:5555/karakura", options),
          json = await res.json();
        alert(`El personaje ${e.target.nombre.value} se creo exitosamente`);
        if (!res.ok) throw { status: res.status, statusText: res.statusText };
        location.reload();
      } catch (err) {
        let message = err.status || "Ha ocurrido un error";
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
            rango: e.target.rango.value,
          }),
        };
        let res = await fetch(
            `http://localhost:5555/karakura/${e.target.id.value}`,
            options
          ),
          json = await res.json();
        alert(`El personaje ${e.target.nombre.value} se edito exitosamente`);
        if (!res.ok) throw { status: res.status, statusText: res.statusText };
        location.reload();
      } catch (err) {
        let message = err.status || "Ha ocurrido un error";
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
    $form.rango.value = e.target.dataset.range;
    $form.id.value = e.target.dataset.id;
    $title.textContent = "Editar personaje";
  }
  if (e.target.matches(".delete")) {
    let isDelete = confirm(
      `Deseas eliminar al personaje ${e.target.dataset.name}`
    );
    if (isDelete) {
      try {
        let options = {
          method: "DELETE",
          headers: {
            "Content-type": "application/json; charset=utf-8",
          },
        };
        let res = await fetch(
            `http://localhost:5555/karakura/${e.target.dataset.id}`,
            options
          ),
          json = await res.json();
        alert(`El personaje ${e.target.dataset.name} se ha eliminado`);
        if (!res.ok) throw { status: res.status, statusText: res.statusText };
        location.reload();
      } catch (err) {
        let message = err.status || "Ha ocurrido un error";
        $form.insertAdjacentHTML(
          "afterend",
          `<p><b>Error ${err.status}: ${message}</b></p>`
        );
      }
    }
  }
});
