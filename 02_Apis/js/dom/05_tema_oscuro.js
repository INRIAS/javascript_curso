const d = document,
    ls = localStorage;

export default function darkTheme(btn, classDark) {
    const $themeBtn = d.querySelector(btn),
        $selectors = d.querySelectorAll("[data-dark]");

    let moon = "🌙",
        sun = "☀️";
    //Creamos funciones para operar por separado para el local storage

    const lightMode = () => {
        $selectors.forEach(el => el.classList.remove(classDark));
        $themeBtn.textContent = moon;
        ls.setItem("theme", "light")
    };

    const darkMode = () => {
        $selectors.forEach(el => el.classList.add(classDark));
        $themeBtn.textContent = sun;
        ls.setItem("theme", "dark")
    };

    d.addEventListener("click", e => {
        if (e.target.matches(btn)) {
            if ($themeBtn.textContent === moon) {
                darkMode();
            } else {
                lightMode();
            }
        }
    })
    
    //Cargamos 3 if al DOM de la pagina
    //1. preguntando si hay un key cargado
    //2 y 3 preguntado que tema esta cargado y con base a este que cargar
    //getItem=preguntar que hay en el key y valor
    //setItem= carga o guarda el valor deseado
    d.addEventListener("DOMContentLoaded", (e) => {
        //si es por primera vez evaluamos el valor y que le inserte el predeterminado
        if (ls.getItem("theme") === null) ls.setItem("theme", "light");
    
        if (ls.getItem("theme") === "light")lightMode();
    
        if (ls.getItem("theme") === "dark") darkMode();
    })
};
