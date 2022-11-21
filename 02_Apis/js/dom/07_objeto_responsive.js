const d = document,
    w = window;

export default function responsiveMedia(id, mq, mobileContent, desktopContent) {
    let breakPoint=w.matchMedia(mq);

    const responsive=(e)=>{
        if(e.matches){//()este pregunta y devuelve un booleano
            d.getElementById(id).innerHTML=desktopContent;
        }else{
            d.getElementById(id).innerHTML=mobileContent;
        }
        
        console.log("MQ",breakPoint,e.matches);
    };
    breakPoint.addListener(responsive)//escucha constantemente que condicion se cumple en la funcion, pero solo cuando el scree hay cambios
    responsive(breakPoint);//para que cargue con el documento 
}   