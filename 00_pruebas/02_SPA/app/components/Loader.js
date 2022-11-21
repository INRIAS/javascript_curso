export function Loader() {
    const $loader=document.createElement("img");
    $loader.classList.add("loader");
    $loader.src="app/assets/loader.svg";
    $loader.alt="Loader...";

    return $loader;
}