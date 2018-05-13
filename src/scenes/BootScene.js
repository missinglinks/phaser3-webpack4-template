import Phaser from 'phaser'

export default class extends Phaser.Scene {
    constructor () {
        super({ key: 'BootScene' })
    }

    preload () {
        this.load.image('apple', './assets/apple.png')
    }

    create () {
        console.log('loading complete')
        this.scene.start('MenuScene')
    }
}