const d = document,
    w = window;
export default function scrollTop(btn) {
    console.log(d.documentElement.scrollTop, w.pageYOffset);
    const $topBtn = d.querySelector(btn)

    w.addEventListener("scroll", e => {
        let scrollingY = w.pageYOffset || d.documentElement.scrollTop;
        (scrollingY > 500)
            ? $topBtn.classList.remove("hidden")
            : $topBtn.classList.add("hidden");
    })

    d.addEventListener("click", e => {
        if (e.target.matches(btn))
            w.scrollTo({
                behavior: "smooth",
                top: 0
            })
    })
}