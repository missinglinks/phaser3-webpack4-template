import 'phaser';

var config = {
    type: Phaser.AUTO,
    parent: 'phaser-example',
    width: 960,
    height: 540,
    backgroundColor: 0xffddff,
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

var game = new Phaser.Game(config);
var apple; 

function preload () {
    this.load.image('apple', 'assets/apple.png');
}

function create () {
    apple = this.add.image(400, 150, 'apple');
}

function update () {
    apple.rotation += 0.01
}