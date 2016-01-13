var Queue = function() {
  var someInstance = {};
  var queueEnd = 0;
  var queueStart = 1;

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  someInstance.enqueue = function(value) {
    queueEnd++;
    someInstance[queueEnd] = value;
  };

  someInstance.dequeue = function() {
    if(queueStart < queueEnd+1){
      queueStart++;
    }
    return someInstance[queueStart-1];
  };

  someInstance.size = function() {
    return queueEnd - queueStart + 1;
  };

  return someInstance;
};
