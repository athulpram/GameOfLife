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
  determineNextState : function(latitude,longitude){
    let neighbourStates = this.fetchNeighboursState(latitude,longitude);
    return neighbourStates.reduce((state1,state2)=>state1+state2);
  }

}

exports.world = world;

