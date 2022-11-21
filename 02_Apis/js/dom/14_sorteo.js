const d = document;

export default function draw(btn, selector) {

    const getWinner=(selector)=>{
        const $player=d.querySelectorAll(selector),
        ramdom=Math.floor(Math.random()*$player.length),
        winner=$player[ramdom];

        console.log($player,ramdom,winner);

        return `EL ganador del sorteo es: ${winner.textContent}`
    }

    d.addEventListener("click",e=>{
        if(e.target.matches(btn)){
            let resul=getWinner(selector);
            alert(resul);
        }
        
    })
}
/* const getWinnerP=(selector)=>{
    const $player=document.querySelectorAll(selector),
    ramdom=Math.floor(Math.random()*$player.length),
    winner=$player[ramdom];

    console.log($player,ramdom,winner);

    return `EL ganador del sorteo es: ${winner.textContent}`
}

getWinnerP("ytd-comment-renderer #author-text span") */
