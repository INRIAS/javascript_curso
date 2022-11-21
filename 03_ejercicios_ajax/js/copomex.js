import SELECT_KEYS from "./copomex_keys.js";
const d = document,
  $selectPrimary = d.getElementById("select-primary"),
  $selectSecondary = d.getElementById("select-secondary"),
  $selectTertiary = d.getElementById("select-tertiary");

async function loadStates() {
  try {
    let estadosRes = await fetch(
        `https://api.copomex.com/quey/get_estados?token=${SELECT_KEYS.public}`
      ),
      estadoJson = await estadosRes.json();

    console.log(estadoJson);

    if (!estadosRes.ok)
      throw { status: estadosRes.status, statusText: estadosRes.statusText };

    let $options = `<option value="">Elige un Estado</option>`;
    estadoJson.response.estado.forEach(
      (el) => ($options += `<option value="${el}">${el}</option>`)
    );
    $selectPrimary.innerHTML = $options;
  } catch (err) {
    console.log(err);
    let message = err.statusText || "Ha ocusrrido un error";
    $selectPrimary.nextElementSibling.innerHTML = `Error ${err.status}: ${message}`;
  }
}

async function loadTowns(state) {
  try {
    let municipioRes = await fetch(
        `https://api.copomex.com/query/get_municipio_por_estado/${state}?token=${SELECT_KEYS.public}`
      ),
      municipioJson = await municipioRes.json();

    console.log(municipioJson);

    if (!municipioRes.ok)
      throw { status: municipioRes.status, statusText: municipioRes.statusText };

    let $options = `<option value="">Elige un Municipio</option>`;
    municipioJson.response.municipios.forEach(
      (el) => ($options += `<option value="${el}">${el}</option>`)
    );
    $selectSecondary.innerHTML = $options;

  } catch (err) {
    console.log(err);
    let message = err.statusText || "Ha ocusrrido un error";
    $selectSecondary.nextElementSibling.innerHTML = `Error ${err.status}: ${message}`;
  }
}
async function loadSuburbs(suburb) {
  try {
    let coloniaRes = await fetch(
        `https://api.copomex.com/query/get_colonia_por_municipio/${suburb}?token=${SELECT_KEYS.public}`
      ),
      coloniaJson = await coloniaRes.json();

    console.log(coloniaJson);

    if (!coloniaRes.ok)
      throw { status: coloniaRes.status, statusText: coloniaRes.statusText };

    let $options = `<option value="">Elige un Municipio</option>`;
    coloniaJson.response.colonia.forEach(
      (el) => ($options += `<option value="${el}">${el}</option>`)
    );
    $selectTertiary.innerHTML = $options;

  } catch (err) {
    console.log(err);
    let message = err.statusText || "Ha ocusrrido un error";
    $selectTertiary.nextElementSibling.innerHTML = `Error ${err.status}: ${message}`;
  }
}

d.addEventListener("DOMContentLoaded", loadStates());

$selectPrimary.addEventListener("change", (e) => loadTowns(e.target.value));
$selectSecondary.addEventListener("change", (e) => loadSuburbs(e.target.value));
