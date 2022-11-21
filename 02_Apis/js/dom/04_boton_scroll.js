const d = document,
    w = window;
export default function scrollTopBotton(btn) {
    const scrollBtn = d.querySelector(btn)

    w.addEventListener("scroll", e => {
        // console.log(d.documentElement.scrollTop, w.pageYOffset);
        let scrollTop = d.documentElement.scrollTop || w.pageYOffset;
        (scrollTop > 500)
            ? scrollBtn.classList.remove("hidden")
            : scrollBtn.classList.add("hidden")
    })

    d.addEventListener("click", e => {
        if (e.target.matches(btn)) {
            w.scrollTo({
                behavior: "smooth",
                top: 0
            })
        }
    })
}