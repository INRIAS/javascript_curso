export async function ajax(props) {
  let { url, cbSuccess } = props;

  try {
    let res = await fetch(url),
      json = cbSuccess(await res.json())

    if (!res.ok) throw { status: res.status, statusText: res.statuText };

    
  } catch (err) {
    let message = err.statusText || "Ha ocurrido un error";
    document.getElementById("posts").innerHTML= `
    <div class="error">
      <p>Error ${err.status}: ${message}</p>

    </div>
    `;
    document.querySelector(".loader").style.display="none";

    console.log(err);
    
    
  }
}

/* export function ajax(props) {
  let { url, cbSuccess } = props;

fetch(url)
  .then((res)=>(res.ok?res.json():Promise.reject(res)))
  .then((json)=>cbSuccess(json))
  .catch((err)=>{
    let message = err.statusText || "Ha ocurrido un error";
    document.getElementById("posts").innerHTML= `
    <div class="error">
      <p>Error ${err.status}: ${message}</p>

    </div>
    `;
    document.querySelector(".loader").style.display="none";

    console.log(err);
    
    
  });
} */