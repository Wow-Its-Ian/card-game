import Phaser from "phaser";
import {MainScene} from './scenes/index'

const config = {
    width: window.innerWidth,
    height: window.innerHeight,
    backgroundColor: '#333333',
    type: Phaser.AUTO,
    parent: 'phaser-game',
    scene:[MainScene]
}

new Phaser.Game(config)