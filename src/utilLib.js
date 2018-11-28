const checkNeighbourState = function(row,column,grid){
  if(Math.max(row,column)>grid.length -1 || Math.min(row,column)<0){
    return 0;
  }
  return grid[row][column];
}

exports.checkNeighbourState = checkNeighbourState;
