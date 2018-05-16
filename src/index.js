import Phaser from 'phaser'
import BootScene from './scenes/BootScene'
import MenuScene from './scenes/MenuScene'
import GameScene from './scenes/GameScene'

var config = {
    type: Phaser.AUTO,
    width:1024,
    height: 768,
    backgroundColor: 0xffdeb9,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: {
                y : 300 
            },
            debug: false
        }
    },
    scene: [
        BootScene,
        MenuScene,
        GameScene
    ]
}

window.game = new Phaser.Game(config)
