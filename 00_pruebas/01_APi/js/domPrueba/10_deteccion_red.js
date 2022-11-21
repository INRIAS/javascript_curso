const d = document,
    n = navigator,
    w = window;

export default function systemOnlineP() {
    const onlineP = () => {
        const $divP = d.createElement("div");
        if (n.onLine) {
            $divP.textContent = "System Online";
            $divP.classList.add("online");
            $divP.classList.remove("offline");
        } else {
            $divP.textContent = "System offline";
            $divP.classList.remove("online");
            $divP.classList.add("offline");
        };
        
        d.body.insertAdjacentElement("beforeend", $divP)
        setTimeout(() => {
            d.body.removeChild($divP)
        }, 2000);
    };

    w.addEventListener("online", e => onlineP());
    w.addEventListener("offline", e => onlineP());
}