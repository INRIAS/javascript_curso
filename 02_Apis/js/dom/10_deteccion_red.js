const d=document,
n=navigator,
w=window;

export default function networkStatus() {
    const isOnline=()=>{
        const $div=d.createElement("div");

    if(n.onLine){
        $div.textContent="System Online";
        $div.classList.add("online");
        $div.classList.remove("offline");
    }else{
        $div.textContent="System Offline";
        $div.classList.remove("online");
        $div.classList.add("offline");
    }
    d.body.insertAdjacentElement("beforeend",$div);
    setTimeout(() => {
        d.body.removeChild($div)
    }, 2000);
    };

    w.addEventListener("online",e=> isOnline());
    w.addEventListener("offline",e=> isOnline());
    
}