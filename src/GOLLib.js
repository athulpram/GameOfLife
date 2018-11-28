let world = { generateGrid : function({length, breadth}) {
  let rows = new Array(breadth).fill(0);
  let grid = rows.map((x) => new Array(length).fill(0));
  this.grid= grid.map((x)=>x.slice());
  return grid;
}, 
  grid : [], 

  calculateGridSize: function() { 
    let breadth=this.grid.length;
    let length=this.grid[0].length;
    return {length,breadth};
  }, 

  createLabelledGrid : function(dimensions) {
    let grid = this.generateGrid(dimensions);
    let counter = 1;
    return grid.map((rows)=>rows.map((col) => counter++));
  },

  fetchNeighbours : function(row, column){
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
    let grid = this.grid;
    if(this.isCellValid({row,column})){
      return this.grid[row][column];
    }
    return 0;
  },

  isCellValid : function({row,column}){
    let grid = this.grid;
    return ((grid[row] != undefined && grid[row][column]!=undefined));
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
    let {length, breadth} = this.calculateGridSize();
    nextGeneration = this.grid.map((value)=>value.slice());

    for(let row=0; row < breadth; row++){
      for(let column=0; column < length; column++){
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

  updateWorld : function(aliveCells){
    let grid = this.grid;
    let {length, breadth} = this.calculateGridSize();
    aliveCells.map((cell) =>{ if(this.isCellValid({row : cell[0],column : cell[1]})){grid[cell[0]][cell[1]] = 1}});
    this.grid = grid;
    return grid;
  }
}

exports.world = world;
