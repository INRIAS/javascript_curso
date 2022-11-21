const d = document;

export default function responsiveTester(form) {
    const $form = d.getElementById(form);
    let tester;

    d.addEventListener("submit", (e) => {
        if (e.target === $form) {
            e.preventDefault();
            tester = window.open(
                $form.direccion.value,//donde se ingresa la url
                "tester",//referencia de la variable
                `innerWidth=${$form.ancho.value}, innerheight=${$form.alto.value}`//Carateristicas deseadas
            )
        }
    })

    d.addEventListener("click", e => {
        if (e.target === $form.cerrar) tester.close();
    })

}