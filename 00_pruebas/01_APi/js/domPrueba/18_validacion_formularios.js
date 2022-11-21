const d = document;

export default function validacionFormulario() {
  const $form = d.querySelector(".contact-form"),
    $inputs = d.querySelectorAll(".contact-form [required]");

  $inputs.forEach((inputP) => {
    const $spanP = d.createElement("span");
    $spanP.id = inputP.name;
    $spanP.textContent = inputP.title;
    $spanP.classList.add("contact-form-error", "none");
    inputP.insertAdjacentElement("afterend", $spanP);
  });

  d.addEventListener("keyup", (e) => {
    if (e.target.matches(".contact-form [required]")) {
      let $targ = e.target,
        pattern = $targ.pattern || $targ.dataset.pattern;
      if (pattern && $targ.value !=="") {
        let regexP = new RegExp(pattern);
        return !regexP.exec($targ.value)
          ? d.getElementById($targ.name).classList.add("is-active")
          : d.getElementById($targ.name).classList.remove("is-active");
      }
      if (!pattern) {
        return $targ.value === ""
          ? d.getElementById($targ.name).classList.add("is-active")
          : d.getElementById($targ.name).classList.remove("is-active");
      }
    }
  });

  d.addEventListener("submit",e=>{
    e.preventDefault();
    alert("Enviando formulario");

    const $loader=d.querySelector(".contact-form-loader"),
     $response=d.querySelector(".contact-form-response");

     $loader.classList.remove("none");

     setTimeout(() => {
      $loader.classList.add("none");
      $response.classList.remove("none");
      setTimeout(() => {
        $response.classList.add("none");
      }, 3000);
     }, 3000);

     $form.reset();
  })
}
