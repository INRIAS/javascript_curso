const d = document;

//-------------XMLHTTPREQUIRE
(() => {
  const xhr = new XMLHttpRequest(), //#1 constructor
    $xhr = document.getElementById("xhr"),
    $fragment = document.createDocumentFragment();

  // console.log(xhr);

  xhr.addEventListener("readystatechange", (e) => {
    //#2 lectura Esto es una CallBack
    if (xhr.readyState !== 4) return;
    // console.log(xhr);

    if (xhr.status >= 200 && xhr.status < 300) {
      //   console.log("éxito");
      //   console.log(xhr.response); //lo que trae la consulta
      let json = JSON.parse(xhr.responseText);
      //   console.log(json);

      json.forEach((el) => {
        const $li = d.createElement("li");
        $li.innerHTML = `${el.name} -- ${el.email} -- ${el.phone}`;
        $fragment.appendChild($li);
      });

      $xhr.appendChild($fragment);
    } else {
      console.log("error");
      let message = xhr.statusText || "Ocurrio un error";
      $xhr.innerHTML = `Error ${xhr.status}: ${message} `;
    }
  });

  //GET es atravez de la URL
  //POST es atarvez de las cabeceras
  xhr.open("GET", "https://jsonplaceholder.typicode.com/users"); //#3 URL
  //   xhr.open("GET", "./assets/users.json"); //#3 URL

  xhr.send(); //#4 cambio en los datos
})();

//-------------API FETCH
(() => {
  const $fetch = document.getElementById("fetch"),
    $fragment = document.createDocumentFragment();

  //El metodo por defecto para fetch es GET por ende no se coloca si se va a usar
  //fetch es con promesas el then es los estados y catch los errores.finally para actividades
  fetch("https://jsonplaceholder.typicode.com/users")
    //el primer then hace el parceo y el segundo los manipula a gusto
    .then((res) => {
      //   console.log(res);
      //el retun permite que el segundo then pudea encontrarlos a modo de pasar datos
      //para ejecutar el catch hay que forzar el res
      return res.ok ? res.json() : Promise.reject(res);
    })
    .then((json) => {
      //   console.log(json);
      json.forEach((el) => {
        const $li = d.createElement("li");
        $li.innerHTML = `${el.name} -- ${el.email} -- ${el.phone}`;
        $fragment.appendChild($li);
      });
      $fetch.appendChild($fragment);
    })
    .catch((err) => {
      //   console.log("Estamos en el catch", err);
      let message = err.statusText || "Ha ocurrido un error";
      $fetch.textContent = `Error${err.status}: ${message}`;
    })
    .finally(() => {
      //   console.log("Esto se ejecuta independientemente ddel resultado de la promesa Fetch");
    });
})();

//-------------API FETCH Async
(() => {
  const $fetchAsync = d.getElementById("fetch-async"),
    $fragP = d.createDocumentFragment();

  async function getData() {
    try {
      // como es async puedo solicitar un await
      let res = await fetch("https://jsonplaceholder.typicode.com/users"),
        json = await res.json();
      // console.log(res, json);
      //el throw es un return que direcciona hacia el catch
      //   if(res.ok) throw new Error("Ocurrio un Error al solicitar los datos")
      if (!res.ok) throw { status: res.status, statusText: res.statusText };

      json.forEach((el) => {
        const $li = d.createElement("li");
        $li.innerHTML = `${el.name} -- ${el.email} -- ${el.phone}`;
        $fragP.appendChild($li);
      });
      $fetchAsync.appendChild($fragP);
    } catch (err) {
      // console.log(err);
      let message = err.statusText || "Ha ocurrido un error";
      $fetchAsync.innerHTML = `<b>Error${err.status}: </b> ${message}`;
    } finally {
      console.log("Esto se ejecuta independientemente del try catch");
    }
  }

  getData();
})();

//-------------AXIOS
(() => {
  const $axP = d.getElementById("axios"),
    $fragP = d.createDocumentFragment();

  axios
    .get("https://jsonplaceholder.typicode.com/users")
    .then((res) => {
      console.log(res);
      let json = res.data;
      json.forEach((el) => {
        const $li = d.createElement("li");
        $li.innerHTML = `${el.name} -- ${el.email} -- ${el.phone}`;
        $fragP.appendChild($li);
      });
      $axP.appendChild($fragP);
    })
    .catch((err) => {
      console.log("Estamos en el catch", err.response);
      let message = err.response.statusText || "Ha ocurrido un error";
      $axP.innerHTML = `<b>Error${err.response.status}: </b> ${message}`;
    })
    .finally(console.log("Esto se ejecutara independientemente del try catch"));
})();

//-------------AXIOS Async

(() => {
  const $axiosAsync = d.getElementById("axios-async"),
    $fragP = d.createDocumentFragment();
  const getData = async () => {
    try {
      let res = await axios.get("https://jsonplaceholder.typicode.com/user"),
        json = await res.data;
      json.forEach((el) => {
        const $li = d.createElement("li");
        $li.innerHTML = `${el.name} -- ${el.email} -- ${el.phone}`;
        $fragP.appendChild($li);
      });
      $axiosAsync.appendChild($fragP);
    } catch (err) {
      let message = err.response.statusText || "Ha ocurrido un error";
      $axiosAsync.innerHTML = `<b>Error${err.response.status}: </b> ${message}`;
    } finally {
      console.log("Esto se ejecutara independientemente del try catch");
    }
  };

  getData();
})();
