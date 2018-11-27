const {checkNeighbourState} = require("./utilLib.js");

let world = {grid : [[0,1,0,1,0],[0,1,0,0,1],[0,1,0,1,1],[1,0,1,1,1],[1,0,0,1,0]],
  worldSize : 5,
  fetchNeighboursState : function(latitude, longitude){
    let grid = this.grid;
    return [
      checkNeighbourState(latitude -1,longitude -1,grid),
      checkNeighbourState(latitude -1,longitude, grid),
      checkNeighbourState(latitude -1,longitude +1, grid),
      checkNeighbourState(latitude ,longitude -1, grid),
      checkNeighbourState(latitude ,longitude +1, grid),
      checkNeighbourState(latitude +1,longitude -1, grid),
      checkNeighbourState(latitude +1,longitude, grid),
      checkNeighbourState(latitude +1,longitude +1 ,grid)];
    },
  calculateAliveNeighbours : function(latitude,longitude){
    let neighbourStates = this.fetchNeighboursState(latitude,longitude);
    return neighbourStates.reduce((state1,state2)=>state1+state2);
  },
  lifeZones : {0 : function() {
    return 0;
  },
    1: function() { 
    return 0;
  },
    2 : function(latitude, longitude){
      return world.grid[latitude][longitude];
    },
    3 : function() { 
      return 1;
    }
  },
  calculateNextState : function(latitude, longitude) { 
    let aliveNeighbours = this.calculateAliveNeighbours(latitude, longitude);
    if(aliveNeighbours > 3) {
      return 0;
    }
    let nextState = this.lifeZones[aliveNeighbours](latitude,longitude);
    return nextState;
  },

  changeLifeZone : function() {
    let nextGeneration = [];
    nextGeneration = this.grid.map((value)=>value.slice());
    
    for(let latitude=0;latitude<this.worldSize;latitude++){
      for(let longitude=0;longitude<this.worldSize;longitude++){
       nextGeneration[latitude][longitude]=this.calculateNextState(latitude,longitude); 
      }
    }
    this.world=nextGeneration;
  }
}

exports.world = world;

