const d = document,
  n = navigator;

export default function webCam(id) {
  const $video = d.getElementById(id);
  // console.log(n.mediaDevices.getUserMedia);
  
  if (n.mediaDevices.getUserMedia) {
    n.mediaDevices
      .getUserMedia({ video: true, audio: false }) //este es una prom,esa y se ejecunta con then y catch.
      .then((stream) => {
        console.log(stream);
        $video.srcObject = stream;
        $video.play();
      })
      .catch((err) => {
        // console.log(`sucedio el siguiente error!:${err}`);
        $video.insertAdjacentHTML(
          "beforebegin",
          `<p><mark><b>Sucedio el siguiente error:</b><br>${err}</mark></p>`
        );
      });
  }
}
