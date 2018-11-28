const {checkNeighbourState} = require("./utilLib.js");

let world = { generateGrid : function(size) {
  let rows = new Array(size).fill(0);
  let grid = rows.map((x) => new Array(size).fill(0));
  return grid;
  },

  placeCellNumbers : function(size) {
    let grid = this.generateGrid(size);
    let counter = 1;
    return grid.map((rows)=>rows.map((col) => counter++));
  },

  grid : [], 

  calculateWorldSize: function() { 
    return this.grid.length
  }, 

  fetchNeighboursState : function(row, column){
    let grid = this.grid;
    return [
      checkNeighbourState(row -1,column -1,grid),
      checkNeighbourState(row -1,column, grid),
      checkNeighbourState(row -1,column +1, grid),
      checkNeighbourState(row ,column -1, grid),
      checkNeighbourState(row ,column +1, grid),
      checkNeighbourState(row +1,column -1, grid),
      checkNeighbourState(row +1,column, grid),
      checkNeighbourState(row +1,column +1 ,grid)];
  },

  calculateAliveNeighbours : function(row,column){
    let neighbourStates = this.fetchNeighboursState(row,column);
    return neighbourStates.reduce((state1,state2)=>state1+state2);
  },

  lifeZones : {0 : function() {
    return 0;
  },
    1: function() { 
      return 0;
    },
    2 : function(row, column){
      return world.grid[row][column];
    },
    3 : function() { 
      return 1;
    }
  },

  calculateNextState : function(row, column) { 
    let aliveNeighbours = this.calculateAliveNeighbours(row, column);
    if(aliveNeighbours > 3) {
      return 0;
    }
    let nextState = this.lifeZones[aliveNeighbours](row,column);
    return nextState;
  },

  changeLifeZone : function() {
    let nextGeneration = [];
    let worldSize = this.calculateWorldSize();
    nextGeneration = this.grid.map((value)=>value.slice());

    for(let row=0; row < worldSize; row++){
      for(let column=0; column < worldSize; column++){
        nextGeneration[row][column] = this.calculateNextState(row, column); 
      }
    }
    this.grid=nextGeneration;
  },

  runWorld : function(iteration) { 
    while(iteration != 0){
      this.changeLifeZone();
      iteration--;
    }
    return this.grid;
  },

  updateWorld : function(aliveCells,size){
    let grid = this.generateGrid(size);
    let gridSize = this.calculateWorldSize();
    for(cell of aliveCells){
      let row = (cell-1) % size;
      let col = Math.floor((cell-1)/size);
      grid[row][col] = 1;
    }
    this.grid = grid;
    return grid;
  }
}

exports.world = world;
