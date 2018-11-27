const checkNeighbourState = function(latitude,longitude,grid){
  if(Math.max(latitude,longitude)>grid.length -1 || Math.min(latitude,longitude)<0){
    return 0;
  }
  return grid[latitude][longitude];
}

exports.checkNeighbourState = checkNeighbourState;
