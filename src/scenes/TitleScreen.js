import Phaser from 'phaser'
import WebFontFile from "./WebFontFile";

import { Game } from "../consts/SceneKeys"

export default class TitleScreen extends Phaser.Scene
{
    //every scene has a preload and create method

    preload(){
        const fonts = new WebFontFile(this.load, "Press Start 2P")
        this.load.addFile(fonts)
    }

    create(){
        const title = this.add.text(400, 200, 'Old School Tennis', {
            fontSize: 38,
            fontFamily: '"Press Start 2P"'
        })
        title.setOrigin(0.5, 0.5) //x and y axes

        this.add.text(400, 300, "Press Space to Start", {
            fontFamily: '"Press Start 2P"'
        })
        .setOrigin(0.5)

        this.input.keyboard.on("keydown-SPACE", () => {
            this.scene.start(Game)
        })
    }
}