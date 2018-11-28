const {world} = require('./src/GOLLib.js');
const readline = require('readline-sync');

const main = function() {
  let size = readline.question('enter world size : ');
  console.log(world.placeCellNumbers(+size));
  let aliveCellsInput = readline.question('Enter alive cells position : ');
  let aliveCells = aliveCellsInput.split(" ").map(x=>+x);
  console.log(world.updateWorld(aliveCells, +size));
  let iteration = readline.question('enter desired iteration value : ');
  console.log(world.runWorld(iteration));
}

main();
