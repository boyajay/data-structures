var Stack = function() {
  var someInstance = Object.create(stackMethods);

  someInstance.stackCount = 0;

  return someInstance;


  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
};

var stackMethods = {};

stackMethods.push = function(value) {
  this.stackCount++;
  this[this.stackCount] = value;
};

stackMethods.pop = function() {
  var results;
  if(this.stackCount > 0){
    results = this[this.stackCount];
    this.stackCount--;
  }
  if(results){
    return results;
  }
};

stackMethods.size = function() {
  return this.stackCount;
};

var newStack = Stack();

/*
AssertionError: expected 3 to be at most 0
var prototypeObjectPropertyCount = Object.keys(constructor.prototype).length;
assuming(extendsPrototype).expect(prototypeObjectPropertyCount).to.be.above(0);
*/

