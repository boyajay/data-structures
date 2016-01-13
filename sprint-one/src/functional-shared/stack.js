var Stack = function() {
  var someInstance = {};
  someInstance.stackCount = 0;
  someInstance.push = stackMethods.push;
  someInstance.pop = stackMethods.pop;
  someInstance.size = stackMethods.size;
  return someInstance;
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
};

var stackMethods = {
  push: function(val){
    this.stackCount++;
    this[this.stackCount] = val;
    },
  // pop: method
  pop: function(){
    var result;
    if (this.stackCount>0){   
        result = this[this.stackCount]; 
        this.stackCount--;
      }
    if (result){
      return result; 
    }
  },

  size: function () {
    return this.stackCount;
  }
};


