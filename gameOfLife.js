const {world} = require('./src/GOLLib.js');
const readline = require('readline-sync');

const main = function() {
  let iteration = readline.question('enter desired iteration value : ');
  console.log(world.runWorld(iteration));
}

main();
