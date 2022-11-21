const d = document,
  w = window;

export default function speechVoices() {
  const $sSelect = d.getElementById("speech-select"),
    $sTextArea = d.getElementById("speech-text"),
    $sBtn = d.getElementById("speech-btn"),
    speechMessageP = new SpeechSynthesisUtterance();

  let voicesP = [];

  d.addEventListener("DOMContentLoaded", (e) => {
    w.speechSynthesis.addEventListener("voiceschanged", (e) => {
      voicesP = w.speechSynthesis.getVoices(); //get muestras todas las voces en en Navegador

      voicesP.forEach((voice) => {
        const $option = d.createElement("option");
        $option.value = voice.name;
        $option.textContent = `${voice.name} /--/ ${voice.lang}`;
        $sSelect.insertAdjacentElement("beforeend", $option);
      });
    });
  });

  d.addEventListener("change", (e) => {
    if (e.target === $sSelect) {
      speechMessageP.voice = voicesP.find(
        (voice) => voice.name === e.target.value
      );
    }
  });
  d.addEventListener("click", (e) => {
    if (e.target === $sBtn) {
      speechMessageP.text = $sTextArea.value;
      speechMessageP.rate = 0.5;
      w.speechSynthesis.speak(speechMessageP);
    }
  });
}
