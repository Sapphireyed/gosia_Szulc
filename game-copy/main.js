import { Player } from './player.js'
import { dotsArr, obstalesArr, greenArr, init, initO } from './sapphs.js'
import { gameoverFn } from './gameover.js'

import mountainImage from './img/mountain1.PNG';
import avatarLImage from './img/avatarLeft.png';
import avatarRImage from './img/avatarRight.PNG';
import logoImage from './img/logo.PNG';
import stoneImage from './img/stone.PNG';
import stoneGreenImage from './img/rocks_ornament/rock2.png';

const mountain = new Image();
mountain.src = mountainImage;

const avatarL = new Image();
avatarL.src = avatarLImage;

const avatarR = new Image();
avatarR.src = avatarRImage;

const logo = new Image();
logo.src = logoImage;

const stone = new Image();
stone.src = stoneImage;

const stoneGreen = new Image();
stoneGreen.src = stoneGreenImage;


export function mainGame() {
    let canvas = document.getElementById('canvas2')
    let ctx = canvas.getContext('2d')

    canvas.width = window.innerWidth > 760 ? window.innerWidth * 0.40 : window.innerWidth * 0.8
    canvas.height = window.innerHeight * 0.7

    let frame = 0;
    let score = 0;
    let stop;
    let gameover = false
    let pressed = false;
    let left = false

    ctx.beginPath();
    ctx.moveTo(0, canvas.height - 20);
    ctx.lineTo(canvas.width, canvas.height - 20)
    ctx.stroke()

    const player = new Player(canvas)

    let key = undefined
    window.addEventListener('keydown', function (e) {
        key = e.code
        pressed = true
    })
    window.addEventListener('keyup', function (e) {
        key = undefined
        pressed = false
    })

    init(canvas)

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height)
        ctx.drawImage(mountain, 0, 0, canvas.width, canvas.height)

        left == false ? player.draw(avatarR.src, ctx) : player.draw(avatarL.src, ctx)

        if (key === 'ArrowLeft') {
            if (gameover == false) {
                player.moveLeft()
                left = true;
            }
        } else if (key === 'ArrowRight') {
            if (gameover == false) {
                player.moveRight(canvas)
                left = false
            }
        }

        for (let i = 0; i < dotsArr.length; i++) {
            dotsArr[i].update();
            dotsArr[i].draw(logo.src, ctx)
        }
        for (let i = 0; i < greenArr.length; i++) {
            greenArr[i].update();
            greenArr[i].draw(stoneGreen.src, ctx)
        }
        for (let i = 0; i < obstalesArr.length; i++) {
            obstalesArr[i].update();
            obstalesArr[i].draw(stone.src,ctx)
        }
        if (!pressed) {
            frame % 32 === 0 ? player.x += 6 : ''
            frame % 32 === 16 ? player.x -= 6 : ''
        }

        ctx.font = window.innerWidth > 760 ? '60px Georgia' : '40px Georgia'
        ctx.lineWidth = '5px'
        ctx.strokeText(score, canvas.width - 100, 60)
        ctx.fillStyle = '#35b5fd'
        ctx.fillText(score, canvas.width - 100, 60)
        ctx.fillText('Level: ' + (Math.floor(score / 10) + 1), 0, 60)

        collisionDots()

        const startAnimation = requestAnimationFrame(animate)
        frame++
        if (frame % 100 == 0) {
            init(canvas)
        }
        if (frame % 200 == 0) {
            initO(canvas,score)
        }
        if (stop == true || sessionStorage.getItem('gszulc_animation') === 'stopped') {
            cancelAnimationFrame(startAnimation);
            return
        }

    }
    animate()

    let replay = document.getElementById('replay')
    replay.addEventListener('click', replayFn)
    function replayFn() {
        ctx.clearRect(0, 0, canvas.width, canvas.height)
        replay.style.display = 'none'
        gameover = false;
        stop = false
        init(canvas)
        score = 0
        player.height = 93 / 2
        player.y = canvas.height - player.height
        animate()
    }

    function collisionDots() {
        for (let i = 0; i < dotsArr.length; i++) {
            if (dotsArr[i]?.y >= canvas.height) {
                dotsArr.splice(i, 1)
            }
            if (dotsArr[i]?.y > (player.y - player.height) &&
                ((player.x > dotsArr[i].x && player.x < dotsArr[i].x + dotsArr[i].width) ||
                    player.x + player.width > dotsArr[i].x && dotsArr[i].x > player.x)) {

                dotsArr.splice(i, 1)
                score += 2;

            }
        }
        for (let i = 0; i < greenArr.length; i++) {
            if (greenArr[i]?.y >= canvas.height) {
                greenArr.splice(i, 1)
            }
            if (greenArr[i]?.y > (player.y - player.height) &&
                ((player.x > greenArr[i].x && player.x < greenArr[i].x + greenArr[i].width) ||
                    player.x + player.width > greenArr[i].x && greenArr[i].x > player.x)) {

                greenArr.splice(i, 1)
                score++;
            }
        }

        for (let i = 0; i < obstalesArr.length; i++) {

            if (obstalesArr[i]?.y > (player.y - player.height) &&
                ((player.x > obstalesArr[i].x && player.x < obstalesArr[i].x + obstalesArr[i].width) ||
                    player.x + player.width > obstalesArr[i].x && obstalesArr[i].x > player.x)) {
                player.height -= obstalesArr[i].weight * 2 + 2
                player.y += obstalesArr[i].weight * 2 + 2
                gameover = true;
                if (player.height < 12) {
                    obstalesArr.splice(i, 1)
                    stop = true
                    gameoverFn(gameover, ctx, canvas, score)
                }

            }
            if (obstalesArr[i]?.y >= canvas.height) {
                obstalesArr.splice(i, 1)
            }
        }
    }
}
