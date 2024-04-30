

function gameoverFn(gameover, ctx, canvas, score) {
    let replay = document.getElementById('replay')
    if (gameover == true) {
        ctx.fillStyle = 'black'
        ctx.fillRect(0, 0, canvas.width, canvas.height)
        ctx.fillStyle = 'red'
        ctx.font = window.innerWidth < 760 ?  '32px Georgia' : '70px Georgia'
        ctx.fillText("Game\nOver", canvas.width * 0.15, canvas.height * 0.4, canvas.width)
        ctx.fillStyle = 'white'
        ctx.font = window.innerWidth < 760 ? '28px Georgia' : '40px Georgia';
        const heightDynamic = window.innerWidth < 760 ? 40 : 80
        ctx.fillText('Your score: ' + score, canvas.width * 0.15, canvas.height * 0.4 + heightDynamic)
        replay.style.display = 'block'
    }

}

export { gameoverFn }
