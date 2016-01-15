

var HashTable = function() {
  this._limit = 8;
  this.indexes = {};           //holds keys
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  if (this.indexes.hasOwnProperty(index) && (k !== this.indexes[index])){
    for(var i = index + 1; i < this._limit; i++){
      if (!this._storage.get(i)){
      this.indexes[i] = k;
      this._storage.set(i, v);
      break;
      }
    }
  } else {
    this.indexes[index] = k;
    this._storage.set(index, v);
    console.log(this.indexes);
  }
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  if (k === this.indexes[index]){
    return this._storage.get(index);
  } else {
      for(var i = index + 1; i < this._limit; i++){
        if (this.indexes[i] === k){
            return this._storage.get(i);
          }
      }
  } 
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  this._storage.set(index, undefined);
};