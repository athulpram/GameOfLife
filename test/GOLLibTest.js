const {world} = require("../src/GOLLib.js");
const {deepEqual} = require('assert');

describe('Neighbour states',function(){
  world.lifeExistance = [[0,1,0],[0,1,0],[0,1,0]];
  it("should return an array filled with zero when all neighbours are valid",function(){
    deepEqual(world.fetchNeighboursState(1,1),[0,1,0,0,0,0,1,0]);   
  });
  it("should return zero for all invalid neighbour positions",function(){
    deepEqual(world.fetchNeighboursState(0,0),[0,0,0,0,1,0,0,1]);   
    deepEqual(world.fetchNeighboursState(0,1),[0,0,0,0,0,0,1,0]);   
    deepEqual(world.fetchNeighboursState(0,2),[0,0,0,1,0,1,0,0]);   
    deepEqual(world.fetchNeighboursState(1,0),[0,0,1,0,1,0,0,1]);   
  });
});

describe('calculate Alive Neighbours',function() {
  it('should return a single number when latitude and longitude of the cell is provided', function() {
    deepEqual(world.calculateAliveNeighbours(0,0), 2);
    deepEqual(world.calculateAliveNeighbours(0,1), 1);
    deepEqual(world.calculateAliveNeighbours(0,2), 2);
    deepEqual(world.calculateAliveNeighbours(1,0), 3);
  });
});

