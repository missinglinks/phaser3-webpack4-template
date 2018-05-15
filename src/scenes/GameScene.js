import Phaser from 'phaser'

export default class extends Phaser.Scene {
    constructor () {
        super({ key: 'GameScene' })
    }

    create () {


        this.pearGroup = this.physics.add.group({
            bounceX: 0,
            bounceY: 1,
            collideWorldBounds: true,
        })
        
        this.pears = []
        for (let i = 0; i < 3; i++) {
            let x = Phaser.Math.Between(100, 860)
            let veloY = Phaser.Math.Between(60, 200)
            let y = Phaser.Math.Between(-20, 100)
            let scale = Phaser.Math.FloatBetween(0.5, 1)
            this.pears[i] = this.pearGroup.create(x + 100*(i+1), y, 'pear')
            this.pears[i].setVelocityY(veloY)
            this.pears[i].setScale(scale)
        }
        console.log(this)
        //setTimeout(() => { this.scene.start('MenuScene') }, 2000)
    }

}