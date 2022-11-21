const d = document,
    ls = localStorage;


export default function modeDark(btn, classDark) {
    const $themeDarkMode = d.querySelector(btn),
        $selectores = d.querySelectorAll("[data-dark]");

    let moon = "🌒",
        sun = "🌕";

    const lightMode = () => {
        $selectores.forEach(element => element.classList.remove(classDark));
        $themeDarkMode.textContent = moon;
        ls.setItem("theme", "light")
    };

    const darkMode = () => {
        $selectores.forEach(element => element.classList.add(classDark));
        $themeDarkMode.textContent = sun;
        ls.setItem("theme", "dark")
    }

    d.addEventListener("click", e => {
        if (e.target.matches(btn)) {
            if ($themeDarkMode.textContent === moon) {
                darkMode();
            } else {
                lightMode();
            }
        }
    })

    d.addEventListener("DOMContentLoaded", e => {
        if (ls.getItem("theme") === null) {
            ls.setItem("theme", "light")
        }
        if (ls.getItem("theme" === "light")) {
            lightMode();
        }
        if (ls.getItem("theme") === "dark") {
            darkMode();
        }
    })
}