var Queue = function() {
  var someInstance = {};
  someInstance.queueStart = 1;
  someInstance.queueEnd = 0;
  someInstance.enqueue = queueMethods.enqueue;
  someInstance.dequeue = queueMethods.dequeue;
  someInstance.size = queueMethods.size;
  return someInstance;

  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
};

var queueMethods = {
  enqueue: function(val){
    this.queueEnd++;
    this[this.queueEnd] = val;
  },
  dequeue: function(){
    var result;
    if(this.queueEnd + 1 > this.queueStart){
      result = this[this.queueStart];
      this.queueStart++;
    }
    if(result){
      return result;
    }
  },
  size: function(){
    return this.queueEnd - this.queueStart + 1;
  }
};



