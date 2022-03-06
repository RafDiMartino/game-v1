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

        const paddleLeft = this.add.rectangle(50, 250, 30, 100, 0xffffff)
        this.physics.add.existing(paddleLeft, true) // true is setting a static body
        paddleLeft.body

        this.physics.add.collider(paddleLeft, ball) 
    }
}

export default Game