import Phaser from 'phaser'

export default class TitleScreen extends Phaser.Scene
{
    //every scene has a preload and create method

    preload(){

    }

    create(){
        const text = this.add.text(400, 250, 'Hello')
        text.setOrigin(0.5, 0.5) //x and y axes
    }
}