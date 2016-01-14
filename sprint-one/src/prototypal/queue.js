var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = Object.create(queueMethods);

  someInstance.queueStart = 1;
  someInstance.queueEnd = 0;

  return someInstance;
};

var queueMethods = {};

queueMethods.enqueue = function (val){
  this.queueEnd++;
  this[this.queueEnd] = val;
};

queueMethods.dequeue = function (){
  var results;
  if (this.queueEnd+1>this.queueStart){
    results = this[this.queueStart];
    this.queueStart++;
  }
  if (results) {
    return results;
  }
};

queueMethods.size = function (){
  return this.queueEnd - this.queueStart + 1;
};
