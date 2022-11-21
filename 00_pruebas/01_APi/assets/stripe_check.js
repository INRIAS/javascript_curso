import stripe_keys from "./stripe_keys.js";
import STRIPE_KEYS from "./stripe_keys.js";

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

    console.log(products, prices);

    prices.forEach((el) => {
      let productsData = products.filter(
          (product) => product.id === el.product
        ),
        currency = el.currency;
      console.log(productsData);

      $template.querySelector(".taco").dataset.price = el.id;
      $template.querySelector("img").dataset.name = productsData[0].name;
      $template.querySelector("figcaption").dataset.name = productsData[0].name;

      $template.querySelector("img").src = productsData[0].images[0];
      $template.querySelector("img").alt = productsData[0].name;
      $template.querySelector("figcaption").innerHTML = `
      <p><b>${productsData[0].name}</b></p>
      $ ${el.unit_amount / 100} ${currency.toUpperCase()}
      `;

      let $clone = d.importNode($template, true);
      $fragment.appendChild($clone);
    });
    $tacos.appendChild($fragment);
  })
  .catch((err) => {
    let message=err.statusText||"Ha ocurrido un error";
    $tacos.innerHTML=`<p><b>Error ${err.status}: ${message}</b></p>`
  });

  d.addEventListener("click",e=>{
    if(e.target.matches(".taco *")){
      let isOk=confirm(`Desea realizar la compra de ${e.target.dataset.name}`),
      price=e.target.parentElement.getAttribute("data-price");
      if(isOk){
        Stripe(STRIPE_KEYS.public).redirectToCheckout({
          lineItems:[{price,quantity:1}],
          mode:"subscription",
          successUrl:"http://127.0.0.1:5501/assets/successUrl.html",
          cancelUrl:"http://127.0.0.1:5501/assets/cancelUrl.html"
        })
        .then(res=>{
          $tacos.querySelector(".taco").insertAdjacentHTML("afterend", res.error.message)
        })
      }
    }
  })