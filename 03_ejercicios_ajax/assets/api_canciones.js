const d = document,
  $form = d.getElementById("song-search"),
  $loader = d.querySelector(".loader"),
  $error = d.querySelector(".error"),
  $artist = d.querySelector(".artist"),
  $song = d.querySelector(".song");

$form.addEventListener("submit", async (e) => {
  e.preventDefault();
  try {
    $loader.style.display = "block";

    let artist = e.target.artist.value.toLowerCase(),
      // song = e.target.song.value.toLowerCase(),
      $artistTemplate = "",
      $songTemplate = "",
      artistAPI = `https://theaudiodb.com/api/v1/json/2/search.php?s=${artist}`,
      // songAPI = `https://api.lyrics.ovh/v1/${artist}/${song}`,
      artistFetch = fetch(artistAPI),
      // songFetch = fetch(songAPI),
      [artistRes] = await Promise.all([artistFetch]),
      artistData = await artistRes.json();
    // songData = await songRes.json();

    console.log(artistData);
    console.log(artistRes);

    if(!artistRes.ok)throw{status:artistRes.status, statusText:artistRes.statusText}

    if (artistData.artists === null) {
      $artistTemplate = `<h2>No existe el interprete ${artist}</h2>`;
    } else {
      let artist = artistData.artists[0];
      $artistTemplate = `
      <h2>${artist.strArtist}</h2>
      <img src="${artist.strArtistThumb}" alt="${artist.strArtist}">
      <p>${artist.intBornYear} - ${artist.intDiedYear || "Presente"}</p>
      <p>${artist.strCountry}</p>
      <p>${artist.strGenre} - ${artist.strStyle}</p>
      <a href="https://${artist.strWebsite}" target="_blank">Sitio Web</a>
      <p>${artist.strBiographyES}</p>
      `;
    }

    $loader.style.display="none";
    $artist.innerHTML=$artistTemplate;
  } catch (err) {
    console.log(err);
    let message = err.statusText || "Ha ocurrido un error";
    $error.innerHTML = `<p>Error ${err.status}: ${message}</p>`;
    $loader.style.display = "none";
  }
});
