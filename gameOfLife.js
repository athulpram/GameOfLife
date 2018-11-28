const {world} = require('./src/GOLLib.js');
const readline = require('readline-sync');

const main = function() {
  let size = readline.question('enter world size : ');
  console.log(world.placeCellNumbers(+size));
  let iteration = readline.question('enter desired iteration value : ');
  console.log(world.runWorld(iteration));
}

main();
