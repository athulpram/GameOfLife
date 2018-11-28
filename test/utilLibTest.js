const {checkNeighbourState} = require("../src/utilLib.js");
const {deepEqual} = require("assert");

describe('checkNeighbourState',function(){
  it('Should return 0 when neighbour is not valid',function(){
    deepEqual(checkNeighbourState(0,-1,[[1,1,1],[0,1,1],[1,0,1]]),0);
  });
});
