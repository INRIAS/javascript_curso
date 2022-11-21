const d = document,
  $main = d.querySelector("main"),
  $files = d.getElementById("files");

const uploader = (file) => {
  console.log(file);

  const xhr = new XMLHttpRequest(),
    formData = new FormData();

  formData.append("file", file);

  xhr.addEventListener("readystatechange", (e) => {
    if (xhr.readyState !== 4) return;
    if (xhr.status >= 200 && xhr.readyState < 300) {
      let json = JSON.parse(xhr.responseText);
      // console.log(json);
    } else {
      let message = xhr.statusText || "Ha ocurrido un error";
      error(`Error ${xhr.status}: ${message}`);
    }
  });
  xhr.open("POST", "./assets/uploader.php");
  xhr.setRequestHeader("enc-type", "multipart/form-data");
  xhr.send(formData);
};

const progressUpload = (file) => {
  const $progress = d.createElement("progress"),
    $span = d.createElement("span");

  $progress.value = 0;
  $progress.max = 100;

  $main.insertAdjacentElement("beforeend", $progress);
  $main.insertAdjacentElement("beforeend", $span);

  const fileReader=new FileReader();//captura el progreso
  fileReader.readAsDataURL(file)//lee los datos del archivo

  fileReader.addEventListener("progress",e=>{
    console.log(e);
    let progress=parseInt((e.loaded*100)/e.total);
    $progress.value=progress;
    $span.innerHTML=`<b>${file.name} - ${progress}%</b>`;
  });
  fileReader.addEventListener("loadend",e=>{
    uploader(file);
    setTimeout(() => {
      $main.removeChild($progress);
      $main.removeChild($span);
      $files.value=""
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
