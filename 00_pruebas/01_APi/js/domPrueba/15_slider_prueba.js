const d = document;

export default function sliderPrueba() {
  const $prevBtn = d.querySelector(".slides-btn .prev"),
    $nextBtn = d.querySelector(".slides-btn .next"),
    $slides = d.querySelectorAll(".slider-slide");

  let i = 0;
  d.addEventListener("click", (e) => {
    if (e.target === $prevBtn) {
      e.preventDefault();
      $slides[i].classList.remove("active");
      i--;

      if (i < 0) {
        i = $slides.length - 1;
      }
      $slides[i].classList.add("active");
    }
    if (e.target === $nextBtn) {
      e.preventDefault();
      $slides[i].classList.remove("active");
      i++;
      if (i >= $slides.length) {
        i = 0;
      }
      $slides[i].classList.add("active");
    }
  });

}
