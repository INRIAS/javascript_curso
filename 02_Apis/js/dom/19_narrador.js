const d = document,
  w = window;

export default function speechReader() {
  const $speechSelect = d.getElementById("speech-select"),
    $speechText = d.getElementById("speech-text"),
    $speechBtn = d.getElementById("speech-btn"),
    speechMessage = new SpeechSynthesisUtterance();

  let voices = []; //array para almacenar las voces

  d.addEventListener("DOMContentLoaded", (e) => {
    w.speechSynthesis.addEventListener("voiceschanged", (e) => {
      voices = w.speechSynthesis.getVoices(); //cargamos las voces a la variable
      console.log(voices);

      voices.forEach((voice) => {
        const $option = d.createElement("option");
        $option.value = voice.name;
        $option.textContent = `${voice.name} /--/ ${voice.lang}`;
        $speechSelect.insertAdjacentElement("beforeend", $option);
      });
    });
  });
  
  d.addEventListener("change", (e) => {
    if (e.target === $speechSelect) {
      speechMessage.voice = voices.find(
        (voice) => voice.name === e.target.value
      );
      console.log(speechMessage);
    }
  });
  d.addEventListener("click", (e) => {
    if (e.target === $speechBtn) {
      speechMessage.text = $speechText.value;
      speechMessage.rate = 1;
      w.speechSynthesis.speak(speechMessage);
    }
  });
}
