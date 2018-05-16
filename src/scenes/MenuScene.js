import Phaser from 'phaser'

export default class extends Phaser.Scene {
    constructor () {
        super({ key: 'MenuScene' })
    } 

    create () {
        // stuff for color tinting
        this.hsv = Phaser.Display.Color.HSVColorWheel()
        this.tintCounter = 0

        // get game center coordinates
        const centerX = this.sys.game.config.width / 2
        const centerY = this.sys.game.config.height / 2

        // add bouncy apple
        this.apple = this.physics.add.image(centerX, centerY, 'apple')
        this.apple.setCollideWorldBounds(true).setBounce(1, 1).setVelocity(200, 100)

        // add start game text
        this.startGameText = this.add.text(centerX, centerY, 'start game', {
            font: '56px Ultra',
            fill: '#4e678e'
        })

        this.startGameText.setOrigin(0.5, 0.5).setInteractive()
        // add event handling to text
        this.input.on('pointerover', (event) => {
            this.startGameText.setShadow(2, 2, '#000000', false, true)
        })
        this.input.on('pointerout', (event) => {        
            this.startGameText.setShadow(0, 0, '#000000', false, false)
        })
        this.input.on('pointerup', (event) => {
            this.scene.start('GameScene')
        })
    }

    update (time, delta) {
        // rotate bouncy apple 
        // need to check if body is enabled, 
        // otherwhise throws error at scene change
        if (this.apple.body)
            if (this.apple.body.velocity.x > 0)
                this.apple.rotation += delta / 1000
            else
                this.apple.rotation -= delta / 1000

        // color tint text
        const top =  this.hsv[Math.floor(this.tintCounter)].color
        const bottom = this.hsv[359 - Math.floor(this.tintCounter)].color
        this.startGameText.setTint(top, bottom, bottom, top)
        this.tintCounter += 2;
        if (this.tintCounter >= this.hsv.length)
            this.tintCounter = 0;

    }
}
