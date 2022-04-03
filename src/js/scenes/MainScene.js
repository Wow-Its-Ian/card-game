import Phaser from 'phaser'
import { CardPlayer, CardEnemy } from '../Components'

export default class MainScene extends Phaser.Scene {
    constructor(){
        super('MainScene')
    }

    preload() {
        // BUTTONS
        this.load.image('restartbutton', '../src/assets/images/buttons/restartbutton.svg')

        // CARDS
        this.load.image('card', '../src/assets/images/cards/card.svg')
        this.load.image('playercard', '../src/assets/images/cards/playercard.svg')
        this.load.image('bosscard', '../src/assets/images/cards/bosscard.svg')
        this.load.image('healthcard', '../src/assets/images/cards/healthcard.svg')
        this.load.image('shieldcard', '../src/assets/images/cards/shieldcard.svg')

        // GAME ICONS
        this.load.image('armor', '../src/assets/images/gameIcons/armor.svg')
        this.load.image('dead', '../src/assets/images/gameIcons/dead.svg')

        // ITEMS
        this.load.image('healingpotion', '../src/assets/images/items/healingpotion.svg')
        this.load.image('shield', '../src/assets/images/items/shield.svg')

        // SPRITES
        this.load.image('deathknight', '../src/assets/images/sprites/deathknight.svg')
        this.load.image('firedrake', '../src/assets/images/sprites/firedrake.svg')
        this.load.image('goldendragon', '../src/assets/images/sprites/goldendragon.svg')
        this.load.image('kobold', '../src/assets/images/sprites/kobold.svg')
        this.load.image('ogre', '../src/assets/images/sprites/ogre.svg')
        this.load.image('paladin', '../src/assets/images/sprites/paladin.svg')
        this.load.image('troll', '../src/assets/images/sprites/troll.svg')

        // FONT
        this.load.bitmapFont('pressstart', '../src/assets/fonts/pressstart.png', '../src/assets/fonts/pressstart.xml')
    }

    create() {
        this.player = new CardPlayer({
            scene: this,
            name: 'Paladin',
            x: this.game.config.width / 2,
            y: this.game.config.height - 200,
            card: 'playercard',
            image: 'paladin',
            health: 16,
            depth: 1,
            ondragend: (pointer, gameObject) => {}
        })

        this.enemy = new CardEnemy({
            scene: this,
            name: 'DeathKnight',
            x: this.game.config.width / 2,
            y: this.game.config.height - 600,
            card: 'card',
            image: 'deathknight',
            health: 16,
            depth: 1,
            ondragend: (pointer, gameObject) => {}
        })
    }
}