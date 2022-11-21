const d=document,
w=window;

export default function responsiveEmbebido(id,mq,mobile,desktop) {
    let breakPointP=w.matchMedia(mq);
    
    const responsiveP=(e)=>{
        if (e.matches) {
            d.getElementById(id).innerHTML=desktop;
        }else{
            d.getElementById(id).innerHTML=mobile;
        }
        console.log("MQ",breakPointP,e.matches);
    }

    breakPointP.addListener(responsiveP);
    responsiveP(breakPointP)
}

