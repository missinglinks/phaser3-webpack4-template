import Phaser from 'phaser'

export default class extends Phaser.Scene {
    constructor () {
        super({ key: 'MenuScene' })
    } 

    create () {
        // add bouncy apple
        const x = this.sys.game.config.width / 2
        const y = this.sys.game.config.height / 2
        this.apple = this.physics.add.image(x, y, 'apple')
        this.apple.body.setCollideWorldBounds(true).setBounce(1, 1).setVelocity(100, 200)
    }

    update (time, delta) {
        if (this.apple.body.velocity.x > 0)
            this.apple.rotation += delta / 1000
        else
            this.apple.rotation -= delta / 1000
    }
}
