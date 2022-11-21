import STRIPE_KEYS from "./stripe-keys.js";

const d = document,
  $tacos = d.getElementById("tacos"),
  $template = d.getElementById("taco-template").content,
  $fragment = d.createDocumentFragment(),
  fetchOptions = {
    headers: {
      Authorization: `Bearer ${STRIPE_KEYS.secret}`,
    },
  };

let products, prices;

Promise.all([
  fetch("https://api.stripe.com/v1/products", fetchOptions),
  fetch("https://api.stripe.com/v1/prices", fetchOptions),
])
  .then((responses) => Promise.all(responses.map((res) => res.json())))
  .then((json) => {
    console.log(json);
    products = json[0].data;
    prices = json[1].data;

    prices.forEach((el) => {
      let productsData = products.filter(
        (product) => product.id === el.product
      );
      console.log(productsData);
      $template.querySelector(".taco").dataset.price = el.id;
      $template.querySelector("img").dataset.name = productsData[0].name;
      $template.querySelector("figcaption").dataset.name = productsData[0].name;
      $template.querySelector("img").src = productsData[0].images[0];
      $template.querySelector("img").alt = productsData[0].name;
      $template.querySelector("figcaption").innerHTML = `
      ${productsData[0].name}<br>
      $ ${el.unit_amount / 100} ${el.currency}
      `;

      let $clone = d.importNode($template, true);
      $fragment.appendChild($clone);
    });
    $tacos.appendChild($fragment);
  })
  .catch((err) => {
    let message =
      err.statustext || "ha ocurrido un error en la conexión de la API";
    $tacos.innerHTML = `<p><b>Err ${err.status}: ${message}</b></p>`;
  });

d.addEventListener("click", (e) => {
  console.log(e.target);
  if (e.target.matches(".taco *")) {
    let isOk = confirm(`Deseas comprar ${e.target.dataset.name}...?`);
    let price = e.target.parentElement.getAttribute("data-price");
    // console.log(price);
    if (isOk) {
      Stripe(STRIPE_KEYS.public)
        .redirectToCheckout({
          lineItems: [{ price, quantity: 1 }],
          mode: "subscription",
          successUrl:
            "http://127.0.0.1:5500/03_ejercicios_ajax/assets/stripe-success.html",
          cancelUrl:
            "http://127.0.0.1:5500/03_ejercicios_ajax/assets/stripe-cancel.html",
        })
        .then((res) => {
          // console.log(res);
          if (res.error) {
            $tacos.insertAdjacentHTML("afterend".res.error.message);
          }
        });
    }
  }
});
