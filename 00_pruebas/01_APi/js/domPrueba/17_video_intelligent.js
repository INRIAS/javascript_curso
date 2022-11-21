const d = document,
  w = window;

export default function videoSmartP() {
  //   const $imgN = d.querySelector("img[data-img-netflix]"),
  //     $video = d.querySelector("video[ data-movie-netflix]");
  const $video = d.querySelector("video[data-video-smart-p]");

  $video.addEventListener("mouseover", (e) => {
    $video.play();
  });
  $video.addEventListener("mouseout", (e) => {
    $video.pause();
  });

  //   d.addEventListener("mouseover", (e) => {
  //     setTimeout(() => {
  //       $imgN.classList.remove("active1");
  //       $video.classList.add("active1");
  //       $video.play();
  //     }, 1500);
  //   });

  //   d.addEventListener("mouseout", (e) => {
  //     $imgN.classList.add("active1");
  //     $video.classList.remove("active1");
  //     $video.play();
  //   });
}
