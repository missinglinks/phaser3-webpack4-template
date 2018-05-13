import Phaser from 'phaser'
import BootScene from "./scenes/BootScene"
import MenuScene from "./scenes/MenuScene"

var config = {
    type: Phaser.AUTO,
    width: 960,
    height: 540,
    backgroundColor: 0xffddff,
    scene: [
        BootScene,
        MenuScene
    ]
}

class Game extends Phaser.Game {
    constructor () {
        super(config)
    }
}

window.game = new Game()
