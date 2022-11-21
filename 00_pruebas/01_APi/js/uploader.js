const d = document,
  $main = d.querySelector("main"),
  $files = d.getElementById("files");

const uploader = async (file) => {
  try {
    const formData = new FormData();
    formData.append("file", file);
    let options = {
        method: "POST",
        headers: {
          "enc-type": "multipart/form-data",
        },
        body: formData,
      },
      res = await fetch("./assets/uploader.php", options),
      fileC = await res.json();

    if (!res.ok) throw { status: res.status, statusText: res.statusText };
  } catch (err) {
    let message = err.status || "Ha ocurrido un error";
    $form.insertAdjacentHTML(
      "afterend",
      `<p><b>Error ${err.status}: ${message}</b></p>`
    );
  }
};

const progressUpload = (file) => {
  const $progress = d.createElement("progress"),
    $span = d.createElement("span");

  $progress.value = 0;
  $progress.max = 100;

  $main.insertAdjacentElement("beforeend", $progress);
  $main.insertAdjacentElement("beforeend", $span);

  const fileReader = new FileReader();
  fileReader.readAsDataURL(file);

  fileReader.addEventListener("progress", (e) => {
    let progress = parseInt((e.loaded * 100) / e.total);
    $progress.value = progress;
    $span.innerHTML = `<b>${file.name} - ${progress}%</b>`;
  });
  fileReader.addEventListener("loadend", (e) => {
    uploader(file);
    setTimeout(() => {
      $main.removeChild($progress);
      $main.removeChild($span);
      $files.value="";
    }, 3000);
  });
};

d.addEventListener("change", (e) => {
  if (e.target === $files) {
    console.log(e.target.files);

    const files = Array.from(e.target.files);

    files.forEach((el) => progressUpload(el));
  }
});
