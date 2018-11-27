const checkNeighbourState = function(latitude,longitude,lifeExistance){
  if(Math.max(latitude,longitude)>2 || Math.min(latitude,longitude)<0){
    return 0;
  }
  return lifeExistance[latitude][longitude];
}

exports.checkNeighbourState = checkNeighbourState;
