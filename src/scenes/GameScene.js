import Phaser from 'phaser'
import { randomSpacedPositions } from '../utils'

export default class extends Phaser.Scene {
    constructor () {
        super({ key: 'GameScene' })
    }

    create () {

        const positions = randomSpacedPositions(200, 800, 100, 400, 2, 150, 0)
        console.log(positions)

        // add pear obstacles
        this.pearGroup = this.physics.add.group({
            bounceX: 0,
            bounceY: 1,
            collideWorldBounds: true,
        })
        
        this.pears = []
        positions.forEach((pos, i) => {

            let x = pos.x
            let y = pos.y
            let veloY = Phaser.Math.Between(80, 400)
            let scale = Phaser.Math.FloatBetween(0.5, 1)
            this.pears[i] = this.pearGroup.create(x + 100*(i+1), y, 'pear')
            this.pears[i].setVelocityY(veloY)
            this.pears[i].setScale(scale)
        })

        // add player apple
        this.apple = this.physics.add.image(50, 440, 'apple')
        this.apple.setCollideWorldBounds(true)

        this.velocity = 0
        this.apple.setInteractive()

        // increase apple velocity on tab
        this.input.on('pointerup', (event) => {
            this.velocity += 40
            this.apple.setVelocityX(this.velocity)
        })

    }

    update (time, delta) {

        // gradually reduce apple velocity
        if (this.apple.body) {
            if (this.velocity > 0) {
                this.velocity -= 1.5
                this.apple.setVelocityX(this.velocity)
                this.apple.rotation += this.velocity/4000
            }
        }

        if (this.apple.x > 880)
            this.scene.pause()
    }

}