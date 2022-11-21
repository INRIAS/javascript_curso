const d = document;

export default function filtersP(inputP, selectorP) {
  d.addEventListener("keyup", (e) => {
    if (e.target.matches(inputP)) {
      if (e.key === "Escape") e.target.value = "";
      d.querySelectorAll(selectorP).forEach((el) => {
        el.textContent.toLowerCase().includes(e.target.value)
          ? el.classList.remove("filter")
          : el.classList.add("filter");
      });
    }
  });
}
