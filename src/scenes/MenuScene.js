import Phaser from 'phaser'

export default class extends Phaser.Scene {
    constructor () {
        super({ key: 'MenuScene' })
    } 

    create () {
        this.apple = this.add.image(200, 200, 'apple')
    }
}
