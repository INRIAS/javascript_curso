const d=document,
n=navigator;

export default function getGeolocation(id) {
    const $id= d.getElementById(id),

    options={
        enableHighAccuracy:true,//Activa alta presicion
        timeout:5000,//tiempo de ejecucion para rastrear
        maximumAge:0//no guardar en cache
    };

    const success=(position)=>{
        let coords =position.coords;
        // console.log(position);

        $id.insertAdjacentHTML("beforebegin",`
        <h3>Tu posición actual es:</h3>
        <ul>
            <li><b>Latutd:</b> ${coords.latitude}</li>
            <li><b>Longitud:</b> ${coords.longitude}</li>
            <li><b>Precisión:</b> ${coords.accuracy} metros</li>
        </ul>
        <a href="https://www.google.com/maps/@${coords.latitude},${coords.longitude},15z" target="_blank" rel="noopener">Ver en Google Maps</a>
        `)
    };

    const error=(err)=>{
        $id.innerHTMl=`<p><mark><b>${err.code}: ${err.message}</b></mark></p>`;
        console.log(`Error ${err.code}: ${err.message}`);
    };

    n.geolocation.getCurrentPosition(success,error,options);//Esta requiere las 3 funciones
}

