import Phaser from "phaser";

class Game extends Phaser.Scene
{
    preload()
    {

    }

    create()
    {
        const ball = this.add.circle(400, 250, 10, 0xffffff, 1) // creating a circle
        this.physics.add.existing(ball)
        ball.body.setBounce(1, 1)

        ball.body.setCollideWorldBounds(true, 1, 1) //1, 1 are x and y axes

        ball.body.setVelocity(-200, 0)

        this.paddleLeft = this.add.rectangle(50, 250, 30, 100, 0xffffff) //create a rectangle
        this.physics.add.existing(this.paddleLeft, true) // true is setting a static body

        this.physics.add.collider(this.paddleLeft, ball) // set collider between ball and paddle 

        this.cursors = this.input.keyboard.createCursorKeys() //create and return an object containing 4 hotkeys for up, down, let and right, spacebar and shift
    }
    update()
    {
        /** @type {Phaser.Physics.Arcade.StaticBody} */ // for better intellisense
        const body = this.paddleLeft.body

        if (this.cursors.up.isDown)
        {
            this.paddleLeft.y -= 10
            body.updateFromGameObject()
        }
        else if (this.cursors.down.isDown)
        {
            this.paddleLeft.y += 10
            body.updateFromGameObject()
        }
    }
}

export default Game