const d = document,
  w = window;
export default function smartVideo() {
  const $videos = d.querySelectorAll("video[data-smart-video]");

const done =(entries)=>{
  entries.forEach(entry=>{
    if (entry.isIntersecting) {
      entry.target.play()
    }else{
      entry.target.pause()
    }


    w.addEventListener("visibilitychange",e=>
      d.visibilityState==="visible" ?entry.target.play():entry.target.pause()
    )
  })

  
}

const observador=new IntersectionObserver(done,{
  threshold:0.5
})

$videos.forEach(el=>observador.observe(el))
  
}
