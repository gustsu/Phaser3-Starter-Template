import Phaser from "phaser";
import { SampleScene } from './scenes/sample-scene.js';

const gameConfig = {
  type: Phaser.AUTO,
  parent: "phaser-example",
  width: 800,
  height: 600,
  scene: SampleScene
};

const game = new Phaser.Game(gameConfig);