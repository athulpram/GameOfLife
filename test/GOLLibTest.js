const {universe} = require("../src/GOLLib.js");
const {deepEqual} = require('assert');

describe('Neighbour states',function(){
  universe.lifeExistance = [[0,0,0],[0,0,0],[0,0,0]];
  it("should return an array filled with zero when all neighbours are valid",function(){
    deepEqual(universe.fetchNeighbourStates(1,1),[0,0,0,0,0,0,0,0]);   
  });
  it("should return zero for all invalid neighbour positions",function(){
    deepEqual(universe.fetchNeighbourStates(0,0),[0,0,0,0,0,0,0,0]);   
    deepEqual(universe.fetchNeighbourStates(0,1),[0,0,0,0,0,0,0,0]);   
    deepEqual(universe.fetchNeighbourStates(0,2),[0,0,0,0,0,0,0,0]);   
    deepEqual(universe.fetchNeighbourStates(1,0),[0,0,0,0,0,0,0,0]);   
  });
});
