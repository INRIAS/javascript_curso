const d = document;

export default function countBack(id, limitTiempo, finalMessage) {
    const $visualize = d.getElementById(id),//Limite
        expitration = new Date(limitTiempo).getTime();

    let countTempo = setInterval(() => {
        let now = new Date().getTime(),//fecha actual
            timeLeft = expitration - now,
            day = Math.floor(timeLeft / (1000 * 60 * 60 * 24)),
            hour = ("0" + Math.floor(timeLeft % (1000 * 60 * 60 * 24) / (1000 * 60 * 60))).slice(-2),
            minutes = ("0" + Math.floor(timeLeft % (1000 * 60 * 60) / (1000 * 60))).slice(-2),
            seconds = ("0" + Math.floor(timeLeft % (1000 * 60) / 1000)).slice(-2);

        $visualize.innerHTML = `<h3>Faltan: ${day} Días ${hour} Horas ${minutes} Minutos ${seconds} Segundos</h3>`

        if (timeLeft < 1000) {
            clearInterval(countTempo);
            $visualize.innerHTML = `<h3>Faltan: ${day} Días ${hour} Horas ${minutes} Minutos ${seconds} Segundos <br>
                <h3>${finalMessage}</h3>
                </h3>`
        }

    }, 1000);
}