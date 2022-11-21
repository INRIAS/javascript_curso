const d = document;

export default function conuntDown(id, limitDate, finalMessage) {
    const $countdown = d.getElementById(id),
        countdownDate = new Date(limitDate).getTime();//Tiempo a llegar

    let countdownTempo = setInterval(() => {
        let now = new Date().getTime(),
            limitTime = countdownDate - now,//El resultado es el tiempo que queda
            day = "0"+Math.floor(limitTime / (1000 * 60 * 60 * 24)),
            hour = ("0" + Math.floor(limitTime % (1000 * 60 * 60 * 24) / (1000 * 60 * 60))).slice(-2),
            minutes = ("0" + Math.floor(limitTime % (1000 * 60 * 60) / (1000 * 60))).slice(-2),
            seconds = ("0" + Math.floor(limitTime % (1000 * 60) / (1000))).slice(-2);

        $countdown.innerHTML = `<h3>Faltan: ${day} días ${hour} horas ${minutes} minutos ${seconds} segundos </h3>`
        // console.log(limitTime);
        if (limitTime < 1000) {
            clearInterval(countdownTempo);
            $countdown.innerHTML=`<h3>Faltan: ${day} días ${hour} horas ${minutes} minutos ${seconds} segundos <br>${finalMessage} </h3>`
        }
    }, 1000);
}   