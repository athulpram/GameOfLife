const {world} = require("../src/GOLLib.js");
const {deepEqual} = require('assert');

describe('Neighbour states',function(){
  world.grid = [[0,1,0],[0,1,0],[0,1,0]];
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

describe('calculate next state', function() {
  it('should change the zone as per the number of alive neighbours', function() {
    deepEqual(world.calculateNextState(0,1), 0);
    deepEqual(world.calculateNextState(0,2), 0);
    deepEqual(world.calculateNextState(1,0), 1);
  });
});

describe('run world', function() {
  it('should return the modified grid when iteration is provided', function() {
    deepEqual(world.runWorld(1),[[0,0,0],[1,1,1],[0,0,0]]);
    world.grid = [[0,1,0],[0,1,0],[0,1,0]];
    deepEqual(world.runWorld(2),[[0,1,0],[0,1,0],[0,1,0]]);
  });
});

describe("generateGrid", function() {
  it("should return a 2D array of length 3 when world size is equal to 3", function() {
    deepEqual(world.generateGrid(3), [[0,0,0],[0,0,0],[0,0,0]]);
  });

  it("should return a 2D array of length 5 when world size is equal to 5", function() {
    deepEqual(world.generateGrid(5), [[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0]]);
  });

  it("should return an array of length 0 when world size is equal to 0", function() {
    deepEqual(world.generateGrid(0), []);
  });
});

describe("placeCellNumbers", function() {
  it("should return a 2D array with the cell positions as values", function() {
    deepEqual(world.placeCellNumbers(3), [[1,2,3],[4,5,6],[7,8,9]]);
    deepEqual(world.placeCellNumbers(4), [[1,2,3,4],[5,6,7,8],[9,10,11,12],[13,14,15,16]]);
  });
});
