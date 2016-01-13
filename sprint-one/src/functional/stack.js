var Stack = function() {
  var someInstance = {};
  var stackCount = 0;
  // Use an object with numeric keys to store values
  //var storage = {};

  // Implement the methods below
  someInstance.push = function(value) {
    stackCount++;
    someInstance[stackCount] = value;
  };

  someInstance.pop = function() { 
    if (stackCount>0){   
      var result = someInstance[stackCount]; 
      stackCount--;
    }
    return result; 
  };

  someInstance.size = function() {
    return stackCount;
  };

  return someInstance;
};
