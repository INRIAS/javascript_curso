const d = document,
  n = navigator;

export default function camWebP(id) {
  const $video = d.getElementById(id);

  if (n.mediaDevices.getUserMedia) {
    n.mediaDevices
      .getUserMedia({ video: true, audio: false })
      .then((stream) => {
        $video.srcObject = stream;
        $video.play();
      })
      .catch((err) => {
        console.log(`Se detecto el siguiente error: ${err}`);
        $video.insertAdjacentHTML(
          "beforebegin",
          `<p><mark><b>Se detecto el siguiente error:</b><br>${err} </mark></p>`
        );
      });
  }
}
