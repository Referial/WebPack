// TODO: write your code here
import sum from './basic';
import {Game, GameSavingData, readGameSaving as saveGame, writeGameSaving as loadGame } from "./game.js"

const game = new Game();
game.start();

console.log('app worked');

console.log(sum([1, 2]));