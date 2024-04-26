class Player {
    constructor(canvas) {
        this.x = canvas.width / 2;
        this.y = canvas.height - 50;
        this.width = 58/2
        this.height = 93/2
    }
    moveLeft() {
        this.x -= 5
        if (this.x <= 0) {
            this.x = 0
        }
    }
    moveRight(canvas) {
        this.x += 5
        if (this.x + this.width >= canvas.width) {
            this.x = canvas.width - this.width
        }
    }
    /*moveUp() {
        this.y -= 3
        if (this.y + this.height <= 0) {
            this.y = 0
        }
    }
    moveDown() {
        this.y += 3
        if (this.y + this.height >= canvas.height) {
            this.y = canvas.height - this.height
        }
    }*/
    draw(src, ctx) {
        const avatar = new Image();
        avatar.src = src
        ctx.drawImage(avatar, this.x, this.y, this.width,this.height)
    }
}

export { Player }

