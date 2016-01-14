var Stack = function() {

  this.stackCount = 0;


  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
};



Stack.prototype.push = function(value) {
  this.stackCount++;
  this[this.stackCount] = value;
};

Stack.prototype.pop = function() {
  var results;
  if(this.stackCount > 0){
    results = this[this.stackCount];
    this.stackCount--;
  }
  if(results){
    return results;
  }
};

Stack.prototype.size = function() {
  return this.stackCount;
};

var newStack = new Stack();