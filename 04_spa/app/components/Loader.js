export function Loader(){
  const $Loader=document.createElement("img");
  $Loader.src="app/assets/loader.svg";
  $Loader.alt="Cargando...";
  $Loader.classList.add("loader");
  return $Loader;

}