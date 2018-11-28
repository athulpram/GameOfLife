let world = { generateGrid : function(size) {
  let rows = new Array(size).fill(0);
  let grid = rows.map((x) => new Array(size).fill(0));
  return grid;
}, 
  grid : [], 

  calculateGridSize: function() { 
    return this.grid.length
  }, 

  createLabelledGrid : function(size) {
    let grid = this.generateGrid(size);
    let counter = 1;
    return grid.map((rows)=>rows.map((col) => counter++));
  },

  fetchNeighbours : function(row, column){
    let grid = this.grid;
    let points = [-1, 0, 1];
    let neighbour=[];

    points.forEach((x)=> {
      points.forEach((y) =>{
        neighbour.push([row+x, column+y]);
      });
    });

    return neighbour.filter((x)=>{ return !(x[0] ==row && x[1] == column)});
  },

  fetchNeighboursState : function(row,column) {
    return this.fetchNeighbours(row,column).map((x)=> this.provideNeighbourState( x[0],x[1])).map((x)=> 0+x);
  },

  provideNeighbourState : function(row,column){
    if(Math.max(row,column)>this.grid.length -1 || Math.min(row,column)<0){
      return 0;
    }
    return this.grid[row][column];
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
    let worldSize = this.calculateGridSize();
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
    let gridSize = this.calculateGridSize();
    for(cell of aliveCells){
      let row = Math.floor((cell-1)/size);
      let col = (cell-1) % size;
      grid[row][col] = 1;
    }
    this.grid = grid;
    return grid;
  }
}

exports.world = world;
