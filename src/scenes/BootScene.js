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