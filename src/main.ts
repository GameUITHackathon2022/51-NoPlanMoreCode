import Phaser from 'phaser'

import Game from './scenes/Game'
import UI from './scenes/UI'
import GameOver from './scenes/GameOver'
import PopUp from './scenes/PopUp'

const config: Phaser.Types.Core.GameConfig = {
	type: Phaser.AUTO,
	width: 600,
	height: 600,
	physics: {
		default: 'matter',
		matter: {
			debug: false,
		}
		
	},
	scene: [Game, UI, GameOver, PopUp]
}

export default new Phaser.Game(config)
