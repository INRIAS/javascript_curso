const d = document;

//------XMLHTTPREQUIRE
(() => {
  const xhrP = new XMLHttpRequest(),
    $xhrP = d.getElementById("xhr"),
    $fragP = d.createDocumentFragment();

  xhrP.addEventListener("readystatechange", (e) => {
    if (xhrP.readyState !== 4) return;
    if (xhrP.status >= 200 && xhrP.status < 300) {
      // console.log(xhrP);
      // console.log("éxitoso");

      let jsonP = JSON.parse(xhrP.responseText);
      // console.log(jsonP);

      jsonP.forEach((el) => {
        const $li = d.createElement("li");
        $li.textContent = `${el.name} /--/ ${el.phone} /--/ ${el.email}`;
        $fragP.appendChild($li);
      });
      $xhrP.appendChild($fragP);
    } else {
      // console.log("Error");
      let messageP = xhrP.statusText || "Ha ocurrido un error";
      $xhrP.innerHTML = `Error ${xhrP.status}: ${messageP}`;
    }
  });

  //   xhrP.open("GET", "https://jsonplaceholder.typicode.com/users");
  xhrP.open("GET", "assets/users.json");

  xhrP.send();
})();

//------API FETCH
(() => {
  const $fetchP = d.getElementById("fetch"),
    $fragP = d.createDocumentFragment();

  fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => {
      return res.ok ? res.json() : Promise.reject(res);
    })
    .then((json) => {
      json.forEach((el) => {
        const $li = d.createElement("li");
        $li.innerHTML = `${el.name} /--/ ${el.email} /--/ ${el.phone}`;
        $fragP.appendChild($li);
      });
      $fetchP.appendChild($fragP);
    })
    .catch((err) => {
      let messageP = err.statusText || "Ha ocurrido un error en la consulta";
      $fetchP.innerHTML = `<b>Error ${err.status}: </b> ${messageP}`;
    })
    .finally(() => {
      console.log("Esto independientemente se ejecuta");
    });
})();

//------API FETCH ASYNC
(() => {
  const $fetchAsync = d.getElementById("fetch-async"),
    $fragP = d.createDocumentFragment();

  async function getData() {
    try {
      let res = await fetch("https://jsonplaceholder.typicode.com/users"),
        json = await res.json();

      if (!res.ok) throw { status: res.status, statusText: res.statusText };

      json.forEach((el) => {
        const $li = d.createElement("li");
        $li.textContent = `${el.name} /--/ ${el.phone} /--/ ${el.email}`;
        $fragP.appendChild($li);
      });
      $fetchAsync.appendChild($fragP);
    } catch (err) {
      let messageP = err.statusText || "Ha ocurrido un error";
      $fetchAsync.innerHTML = `<b>Error ${err.status}: </b>${messageP}`;
    } finally {
      console.log("Estoy independientemente se ejecuta del try catch");
    }
  }

  getData();
})();

//------AXIOS
(() => {
  const $axiP = d.getElementById("axios"),
    $fragP = d.createDocumentFragment();

  axios
    .get("https://jsonplaceholder.typicode.com/users")
    .then((res) => {
      console.log(res);
      let json = res.data;
      json.forEach((el) => {
        const $li = d.createElement("li");
        $li.textContent = `${el.name} /--/ ${el.phone} /--/ ${el.email}`;
        $fragP.appendChild($li);
      });
      $axiP.appendChild($fragP);
    })
    .catch((err) => {
      let messageP = err.response.statusText || "Ha ocurrido un error";
      $axiP.innerHTML = `<b>Error ${err.response.status}: </b>${messageP}`;
    })
    .finally(console.log("Esto se ejecuta indepnedientemente del try catch"));
})();

//------AXIOS Async

(() => {
  const $axiAsync = d.getElementById("axios-async"),
    $fragP = d.createDocumentFragment();

  const getDataP = async () => {
    try {
      let res = await axios.get("https://jsonplaceholder.typicode.com/users"),
        json = await res.data;

      json.forEach((el) => {
        const $li = d.createElement("li");
        $li.textContent = `${el.name} /--/ ${el.phone} /--/ ${el.email}`;
        $fragP.appendChild($li);
      });
      $axiAsync.appendChild($fragP);
    } catch (err) {
      let messageP = err.response.statusText || "Ha ocurrido un error";
      $axiAsync.innerHTML = `<b>Error ${err.response.status}: </b>${messageP}`;
    } finally {
      console.log("Esto se ejecuta indepnedientemente del try catch");
    }
  };

  getDataP();
})();
