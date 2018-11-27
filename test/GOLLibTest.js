const {universe} = require("../src/GOLLib.js");
const {deepEqual} = require('assert');
describe('Neighbour states',function(){
  universe.lifeExistance = [[0,0,0],[0,0,0],[0,0,0]];
  it("should return an array filled with zero",function(){
    deepEqual(universe.fetchNeighbourStates(1,1),[0,0,0,0,0,0,0,0]);   
  });
});
