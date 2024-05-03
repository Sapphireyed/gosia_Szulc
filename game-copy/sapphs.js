let sapphs = ['img/logo3.png', 'img/logoBlue.png', 'img/logoPurp.png']

class Dot {
    constructor(canvas) {
        this.random = Math.random()
        this.x = Math.random() * canvas.width;
        this.y = 0
        this.width = this.random * 533 / 15 + 20
        this.height =this.random * 465 / 15 + 20
        this.weight = 2 - this.random * 2 + 0.5
    }
    update() {
        this.y += ( this.weight + this.width ) / 9;
    }
    draw(item, ctx) {
        const sapphire = new Image()
        sapphire.src = item
        ctx.drawImage(sapphire, this.x, this.y, this.width, this.height)
       /* ctx.beginPath();
        ctx.fillStyle = color
        ctx.arc(this.x, this.y, this.weight, 0, Math.PI * 2)
        ctx.fill()*/
    }
}

let dotsArr = []
let greenArr =[]
let obstalesArr = []
let replay = document.getElementById('replay')
replay.addEventListener('click', replayFn)
function replayFn() {
    dotsArr = []
    obstalesArr = []
    greenArr = []
}
function init(canvas) {
    for (let i = 0; i < 1; i++) {
        dotsArr.push(new Dot(canvas))
    }
    for (let i = 0; i < 3; i++) {
        greenArr.push(new Dot(canvas))
    }
}
function initO(canvas, score) {
    for (let i = 0; i < Math.floor(score / 10) + 1; i++) {
        obstalesArr.push(new Dot(canvas))
    }
}

export { Dot, init, initO, dotsArr, greenArr, obstalesArr}
