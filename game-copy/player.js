import avatarLImage from './img/avatarLeft.png';
import avatarRImage from './img/avatarRight.PNG';

const avatarL = new Image();
avatarL.src = avatarLImage;

const avatarR = new Image();
avatarR.src = avatarRImage;

let left = false;

class Player {
    constructor(canvas) {
        this.x = canvas.width / 2;
        this.y = canvas.height - 50;
        this.width = 58 / 2;
        this.height = 93 / 2;

        // Binding touch event handlers to the instance
        this.handleTouchStart = this.handleTouchStart.bind(this);
        this.handleTouchMove = this.handleTouchMove.bind(this);
        this.handleTouchEnd = this.handleTouchEnd.bind(this);

        // Add touch event listeners
        canvas.addEventListener('touchstart', this.handleTouchStart, false);
        canvas.addEventListener('touchmove', this.handleTouchMove, false);
        canvas.addEventListener('touchend', this.handleTouchEnd, false);
    }

    // Handle touch start
    handleTouchStart(event) {
        console.log('touch d=start')
        event.preventDefault();
        const touch = event.touches[0];
        this.touchStartX = touch.clientX;
        this.touchStartY = touch.clientY;
    }

    // Handle touch move
    handleTouchMove(event) {
        let canvas = document.getElementById('canvas2')
        event.preventDefault();
        const touch = event.touches[0];
        const deltaX = touch.clientX - this.touchStartX;
        const deltaY = touch.clientY - this.touchStartY;
        if (Math.abs(deltaX) > Math.abs(deltaY)) {
            if (deltaX > 0) {
                this.moveRight(canvas);
            } else {
                this.moveLeft();
            }
        } else {
            // Optionally, handle vertical movement here
        }
    }

    // Handle touch end
    handleTouchEnd(event) {
        event.preventDefault();
        // Optionally, add logic here for touch end
    }

    moveLeft() {
        this.x -= 7;
        left = true;
        if (this.x <= 0) {
            this.x = 0;
        }
    }

    moveRight(canvas) {
        this.x += 7;
        left = false;
        if (this.x + this.width >= canvas.width) {
            this.x = canvas.width - this.width;
        }
    }

    draw(src, ctx) {
        if (left) {
            ctx.drawImage(avatarL, this.x, this.y, this.width, this.height);
        } else if (left == false) {
            ctx.drawImage(avatarR, this.x, this.y, this.width, this.height);
        } else {
            const avatar = new Image();
            avatar.src = src;
            ctx.drawImage(avatar, this.x, this.y, this.width, this.height);
        }
    }
}

export { Player };
