const {world} = require("../src/GOLLib.js");
const {deepEqual} = require('assert');

describe('Neighbour states',function(){
  world.lifeExistance = [[0,0,0],[0,0,0],[0,0,0]];
  it("should return an array filled with zero when all neighbours are valid",function(){
    deepEqual(world.fetchNeighboursState(1,1),[0,0,0,0,0,0,0,0]);   
  });
  it("should return zero for all invalid neighbour positions",function(){
    deepEqual(world.fetchNeighboursState(0,0),[0,0,0,0,0,0,0,0]);   
    deepEqual(world.fetchNeighboursState(0,1),[0,0,0,0,0,0,0,0]);   
    deepEqual(world.fetchNeighboursState(0,2),[0,0,0,0,0,0,0,0]);   
    deepEqual(world.fetchNeighboursState(1,0),[0,0,0,0,0,0,0,0]);   
  });
});

describe('determine next state',function() {
  it('should return a single number when latitude and longitude of the cell is provided', function() {
    deepEqual(world.determineNextState(0,0), 0);
  });
});
