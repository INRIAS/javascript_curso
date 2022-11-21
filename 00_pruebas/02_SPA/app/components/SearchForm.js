export function SearchForm() {
    const $searchForm=document.createElement("form"),
    $input=document.createElement("input");
    $searchForm.classList.add("form-search");
    $input.name="search";
    $input.type="search";
    $input.placeholder="Buscar...";

    $searchForm.appendChild($input);
    return $searchForm;
}