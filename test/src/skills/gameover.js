

function gameoverFn(gameover, ctx, canvas, score) {
    let replay = document.getElementById('replay')
    if (gameover == true) {
        ctx.fillStyle = 'black'
        ctx.fillRect(0, 0, canvas.width, canvas.height)
        ctx.fillStyle = 'red'
        ctx.font = '70px Georgia'
        ctx.fillText("Game\nOver", canvas.width * 0.15, canvas.height * 0.4, canvas.width)
        ctx.fillStyle = 'white'
        ctx.font = '40px Georgia'
        ctx.fillText('Your score: ' + score, canvas.width * 0.2, canvas.height * 0.4 + 80)
        replay.style.display = 'block'
    }

}

export { gameoverFn }
