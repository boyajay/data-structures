var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  this.queueStart = 1;
  this.queueEnd = 0;


};



Queue.prototype.enqueue = function (val){
  this.queueEnd++;
  this[this.queueEnd] = val;
};

Queue.prototype.dequeue = function (){
  var results;
  if (this.queueEnd+1>this.queueStart){
    results = this[this.queueStart];
    this.queueStart++;
  }
  if (results) {
    return results;
  }
};

Queue.prototype.size = function (){
  return this.queueEnd - this.queueStart + 1;
};

var newQueue = new Queue();
