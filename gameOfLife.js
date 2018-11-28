const {world} = require('./src/GOLLib.js');
const readline = require('readline-sync');

const main = function() {
  let length = +readline.question('enter world length : ');
  let breadth = +readline.question('enter world breadth : ');
  console.log(world.createLabelledGrid({length,breadth}));
  //let aliveCellsInput = readline.question('Enter alive cells position : ');
  //let aliveCells = aliveCellsInput.split(" ").map(x=>+x);
  console.log(world.updateWorld([[0,-1],[1,1],[2,2]]));
  let iteration = readline.question('enter desired iteration value : ');
  console.log(world.runWorld(iteration));
}

main();
