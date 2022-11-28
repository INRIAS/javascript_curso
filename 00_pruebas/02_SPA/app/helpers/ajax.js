import { App } from "../app.js";

const d=document;
export async function Ajax(props) {
  let { url, cbSuccess } = props;

  try {
    let res = await fetch(url),
      json = cbSuccess(await res.json());

    if (!res.ok) throw {status:res.status, statusText:res.statusText};
  } catch (err) {
    let message=err.statusText||"Ha ocurrido un error en la soicitud";
    d.getElementById("root").innerHTML=`
    <p><b>Error ${err.status}: ${message}</b></p>
    `;
    d.querySelector(".loader").style.display="none";
  }
}
