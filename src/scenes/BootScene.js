import Phaser from 'phaser'
import WebFont from 'webfontloader'

export default class extends Phaser.Scene {
    constructor () {
        super({ key: 'BootScene' })
    }

    preload () {
        // load image assets
        this.load.image('apple', './assets/apple.png')
        this.load.image('pear', './assets/pear.png')
        this.load.image('ground', './assets/ground.png')
        this.load.image('apple_dude', './assets/apfel_fuer_dude.png')
        this.load.image('arm', './assets/arm.png')
        this.load.image('dude', './assets/dude_ohne_apfel_ohne_arm_Ausschnitt.png')
        this.load.image('finger', './assets/finger.png')

        // load webfont
        this.fontsReady = false
        this.loadingFonts = this.loadingFonts.bind(this)
        WebFont.load({
            google: {
                families: ['Ultra']
            },
            active: this.loadingFonts
        })
    }

    create () {}

    update () {
        if (this.fontsReady)
            this.scene.start('MenuScene')
    }

    loadingFonts () {
        this.fontsReady = true
    }
}