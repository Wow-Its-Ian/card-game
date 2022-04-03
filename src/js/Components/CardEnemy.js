import {CardDraggable} from './index'

export default class CardEnemy extends CardDraggable {
    constructor(data) {
       let { health, maxHealth } = data;
       super(data);
       this.textHealth = new Phaser.GameObjects.BitmapText(this.scene, 0, -102, 'pressstart', health, 20);
       this.textMaxHealth = new Phaser.GameObjects.BitmapText(this.scene, -20, -90, 'pressstart', health, 12);
       this.textArmor = new Phaser.GameObjects.BitmapText(this.scene, 0, 0, 'pressstart');
       this.spriteArmor = new Phaser.GameObjects.Sprite(this.scene, 50, -80, 'armor');
       this.textHealth.tint = 0;
       this.textMaxHealth.tint = 0;
       this.add([this.textHealth, this.textMaxHealth, this.textArmor, this.spriteArmor])
       this.health = health;
       this.maxHealth = maxHealth;
       this.armor = 0;
    }

    set health(newHealth) {
        this._health = newHealth;
        this.textHealth.text = this._health;
        this.textHealth.x = -44 - this.textHealth.width / 2;
    }

    get health() {
        return this._health;
    }

    set maxHealth(newMaxHealth) {
        this._maxHealth = newMaxHealth;
    }

    get maxHealth() {
        return this._maxHealth;
    }

    set armor(newArmor) {
        this._armor = newArmor;
        this.textArmor.text = this._armor;
        this.textArmor.x = 46 - this.textArmor.width / 2;
        this.textArmor.alpha = this._armor === 0 ? 0 : 1;
        this.spriteArmor.alpha = this._armor === 0 ? 0 : 1;
    }

    get armor() {
        return this._armor;
    }
}