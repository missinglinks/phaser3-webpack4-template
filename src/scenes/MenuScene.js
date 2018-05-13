import Phaser from 'phaser'

export default class extends Phaser.Scene {
    constructor () {
        super({ key: 'MenuScene' })
    } 

    create () {
        // put apple to the center of the game field
        const x = this.sys.game.config.width / 2
        const y = this.sys.game.config.height / 2
        this.apple = this.add.image(x, y, 'apple')
    }

    update (time, delta) {
        this.apple.rotation += delta/1000
    }
}
