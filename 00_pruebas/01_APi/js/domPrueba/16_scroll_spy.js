const d=document;

export default function spy() {
    const $observados=d.querySelectorAll(".section[data-spy]");
    const done=(entries)=>{
        // console.log(entries);
        entries.forEach(entry=>{
            const $id=entry.target.getAttribute("id");
            // console.log("entry",entry);
            if(entry.isIntersecting){
                d.querySelector(`a[data-spy][href="#${$id}"]`).classList.add("active");
            }else{
                d.querySelector(`a[data-spy][href="#${$id}"]`).classList.remove("active");
            }
        })
    }

    const observer = new IntersectionObserver(done,{
        // root
        // rootMargin:"-300px"
        threshold:[0.5,0.75]
    });

    $observados.forEach(el=>observer.observe(el));
}