const {checkNeighbourState} = require("./utilLib.js");

let world = {lifeExistance : [[1,0,1],[1,0,1], [1,0,1]],
  fetchNeighboursState : function(latitude, longitude){
    let lifeExistance = this.lifeExistance;
    return [
      checkNeighbourState(latitude -1,longitude -1,lifeExistance),
      checkNeighbourState(latitude -1,longitude, lifeExistance),
      checkNeighbourState(latitude -1,longitude +1, lifeExistance),
      checkNeighbourState(latitude ,longitude -1, lifeExistance),
      checkNeighbourState(latitude ,longitude +1, lifeExistance),
      checkNeighbourState(latitude +1,longitude -1, lifeExistance),
      checkNeighbourState(latitude +1,longitude, lifeExistance),
      checkNeighbourState(latitude +1,longitude +1 ,lifeExistance)];
    },
  calculateAliveNeighbours : function(latitude,longitude){
    let neighbourStates = this.fetchNeighboursState(latitude,longitude);
    return neighbourStates.reduce((state1,state2)=>state1+state2);
  },
  lifeZones : {1: function() { 
    return 0;
  },
    2 : function(latitude, longitude){
      return world.lifeExistance[latitude][longitude];
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

}

exports.world = world;

