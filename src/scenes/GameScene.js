import Phaser from 'phaser'

export default class extends Phaser.Scene {
    constructor () {
        super({ key: 'GameScene' })
    }

    create () {
        console.log("abc")
        setTimeout(() => { this.scene.start('MenuScene') }, 2000)
    }

}