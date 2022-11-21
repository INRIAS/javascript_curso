const d = document,
  n = navigator;

export default function getGeolocationP(id) {
  const $id = d.getElementById(id),
    options = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0,
    };

  const success = (position) => {
    console.log(position);
    let coords = position.coords;

    $id.insertAdjacentHTML(
      "beforebegin",
      `
        <h3>Tu posicion actual es:</h3>
        <ul>
            <li><b>Latitud: </b>${coords.altitude}</li>
            <li><b>Longitud: </b>${coords.longitude}</li>
            <li><b>Precisión: </b>${coords.accuracy} metros</li>
        </ul>
        <p><a href="https://google.com/maps/@${coords.altitude},${coords.longitude},15z" target="_blank" rel="noopener">Ver en Google Maps</a></p>
        `
    );
  };

  const error = (err) => {
    console.log(`Error: ${err.code}:${err.message}`);
    $id.insertAdjacentHTML(
      "beforebegin",
      `
        <p><b><mark>Error presentado:<br>${err.code}:${err.message}</mark></b></p>
        `
    );
  };

  n.geolocation.getCurrentPosition(success, error, options);
}
