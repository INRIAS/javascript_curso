const d = document,
  $form = d.querySelector(".crud-form"),
  $title = d.querySelector(".crud-title"),
  $table = d.getElementById("crud-table"),
  $template = d.getElementById("crud-template").content,
  $fragmento = d.createDocumentFragment();

const getAll = async () => {
  try {
    let res = await axios.get("http://localhost:5555/santos"),
      json = await res.data;
    console.log(res);
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
    console.log(err.response);
    let message = err.response.statusText || "Ha ocurrido un error";
    $table.insertAdjacentHTML(
      "afterend",
      `<p><b>Error ${err.response.status}: ${message}</b></p>`
    );
  }
};

d.addEventListener("DOMContentLoaded", getAll());

d.addEventListener("submit", async (e) => {
  if (e.target === $form) {
    e.preventDefault();
    if (!e.target.id.value) {
      try {
        let res = await axios({
            method: "POST",
            url: "http://localhost:5555/santos",
            data: {
              nombre: e.target.nombre.value,
              constelacion: e.target.constelacion.value,
            },
          }),
          json = await res.data;
        alert(`El santo ${e.target.nombre.value} se creo con éxito`);
      } catch (err) {
        console.log(err.response);
        let message = err.response.statusText || "Ha ocurrido un error";
        $form.insertAdjacentHTML(
          "afterend",
          `<p><b>Error ${err.response.status}: ${message}</b></p>`
        );
      }
    } else {
      try {
        let res = await axios({
            method: "PUT",
            url: `http://localhost:5555/santos/${e.target.id.value}`,
            data: {
              nombre: e.target.nombre.value,
              constelacion: e.target.constelacion.value,
            },
          }),
          json = await res.data;
        alert(`El santo ${e.target.nombre.value} se edito correctamente`);
      } catch (err) {
        console.log(err.response);
        let message = err.response.statusText || "Ha ocurrido un error";
        $form.insertAdjacentHTML(
          "afterend",
          `<p><b>Error ${err.response.status}: ${message}</b></p>`
        );
      }
    }
  }
});

d.addEventListener("click",async (e) => {
  if (e.target.matches(".edit")) {
    $form.nombre.value=e.target.dataset.name;
    $form.constelacion.value=e.target.dataset.constellation;
    $form.id.value=e.target.dataset.id;
    $title.textContent="Editar Santo"
  }

  if (e.target.matches(".delete")) {
    let isDelete=confirm(`Desea eliminar el santo ${e.target.dataset.name}`);
    if (isDelete) {
      try {
        let res = await axios({
            method: "DELETE",
            url: `http://localhost:5555/santos/${e.target.dataset.id}`,
          }),
          json = await res.data;
        alert(`El santo ${e.target.dataset.name} se ha eliminado`);
      } catch (err) {
        console.log(err.response);
        let message = err.response.statusText || "Ha ocurrido un error";
        $form.insertAdjacentHTML(
          "afterend",
          `<p><b>Error ${err.response.status}: ${message}</b></p>`
        );
      }
    }
  }
});
