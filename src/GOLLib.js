const {checkNeighbourState} = require("./utilLib.js");

let universe = {lifeExistance : [[1,0,1],[1,0,1], [1,0,1]],
  fetchNeighbourStates : function(latitude, longitude){
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
    }
}

exports.universe = universe;

