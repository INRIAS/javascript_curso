const d = document,
  $main = d.querySelector("main");

const getHTML = async () => {
  try {
    let options = {
      method: "GET",
      headers: {
        "Content-type": "text/html; charset=utf-8",
      },
    };
    let res = await fetch("assets/home.html", options),
      text = await res.text();
      console.log(res);
    if (!res.ok) throw { status: res.status, statusText: res.statusText };
    // console.log(text);
    $main.innerHTML = text;
  } catch (err) {
    let message = err.statusText || "Ha ocurrido un error";
    $main.insertAdjacentHTML(
      "beforebegin",
      `<p><b>Error ${err.status}: ${message}</b></p>`
    );
  }
};

d.addEventListener("DOMContentLoaded", getHTML());

d.addEventListener("click", async (e) => {
  if(e.target.matches(".menu a")){
    e.preventDefault();
    try {
      let options = {
        method: "GET",
        headers: {
          "Content-type": "text/html; charset=utf-8",
        },
      };
      let res = await fetch(e.target.href, options),
        text = await res.text();
      if (!res.ok) throw { status: res.status, statusText: res.statusText };
      console.log(text);
      $main.innerHTML = text;
    } catch (err) {
      let message = err.status || "Ha ocurrido un error";
      $main.insertAdjacentHTML(
        "beforebegin",
        `<p><b>Error ${err.status}: ${message}</b></p>`
      );
    }
  }
});
