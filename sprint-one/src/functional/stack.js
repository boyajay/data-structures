var Stack = function() {
  var someInstance = {};
  var stackCount = 0;
  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  someInstance.push = function(value) {
    stackCount++;
  };

  someInstance.pop = function() {
    stackCount--;
  };

  someInstance.size = function() {
    return stackCount;
  };

  return someInstance;
};
