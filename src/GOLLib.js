let universe = {lifeExistance : [[1,0,1],[1,0,1], [1,0,1]],
  fetchNeighbourStates : function(latitude, longitude){
    return [this.lifeExistance[latitude -1][longitude -1],
      this.lifeExistance[latitude -1][longitude],
      this.lifeExistance[latitude -1][longitude +1],
      this.lifeExistance[latitude ][longitude -1],
      this.lifeExistance[latitude ][longitude +1],
      this.lifeExistance[latitude +1][longitude -1],
      this.lifeExistance[latitude +1][longitude],
      this.lifeExistance[latitude +1][longitude +1]]
    }
}
exports.universe = universe;

