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
        //this.apple = this.physics.add.image(centerX, centerY, 'apple')
        //this.apple.setCollideWorldBounds(true).setBounce(1, 1).setVelocity(200, 100)
        
        // add dude with apple
        let y = Phaser.Math.Between(80,350)
        let veloY = Phaser.Math.Between(80, 400)
        
        this.dude = this.add.image(centerX, centerY, 'dude')
        this.arm = this.add.image(677, 424, 'arm')
        this.arm.setOrigin(1, 0.5)

        this.apple = this.add.image(589, 424, 'apple_dude')
        
        //this.apple.setVelocity(veloY).setCircle(50, 15, 20).setScale(scale)

        this.appleTween = this.tweens.add({
            targets: this.apple,
            y: 300,
            ease: 'Power1',
            duration: 500,
            yoyo: true,
            repeat: -1,
            repeatDelay: 200
        })

        this.armTween = this.tweens.add({
            targets: this.arm,
            rotation: 0.2,
            ease: 'Power1',
            duration: 500,
            yoyo: true,
            repeat: -1,
            repeatDelay: 200
        })

        // add start game text
        this.startGameText = this.add.text(centerX, 600, 'start game', {
            font: '56px Ultra',
            fill: '#4e678e'
        })

        this.startGameText.setOrigin(0.5, 0.5).setInteractive()
        // add event handling to text
        this.startGameText.on('pointerover', (event) => {
            this.startGameText.setShadow(2, 2, '#000000', false, true)
        })
        this.startGameText.on('pointerout', (event) => {        
            this.startGameText.setShadow(0, 0, '#000000', false, false)
        })
        this.startGameText.on('pointerup', (event) => {
            this.scene.start('GameScene')
        })
    }

    update (time, delta) {
        

        // color tint text
        const top =  this.hsv[Math.floor(this.tintCounter)].color
        const bottom = this.hsv[359 - Math.floor(this.tintCounter)].color
        this.startGameText.setTint(top, bottom, bottom, top)
        this.tintCounter += 2;
        if (this.tintCounter >= this.hsv.length)
            this.tintCounter = 0;

    }
}
