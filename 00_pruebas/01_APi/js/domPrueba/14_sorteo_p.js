const d = document;

export default function drawP(btn, selectorP) {
  const getDraw = (selectorP) => {
    const $playerP = d.querySelectorAll(selectorP),
      ramdom = Math.floor(Math.random() * $playerP.length),
      winner = $playerP[ramdom];

    return `El ganador del sorteo es: ${winner.textContent}`;
  };

  d.addEventListener("click", (e) => {
    if (e.target.matches(btn)) {
      let result = getDraw(selectorP);
      alert(result);
      console.log(result);
    }
  });
}
