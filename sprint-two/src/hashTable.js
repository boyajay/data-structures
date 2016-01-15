

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};


  // limitedArray.set = function(index, value) {
  //   checkLimit(index);
  //   storage.get(index) = value;
  // };


HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  if (this._storage.get(index) === undefined){
    var newIndexVal = [[k, v]];
    this._storage.set(index, newIndexVal);
  }
   else {
      var hasFound = false;
      for(var i = 0; i < this._storage.get(index).length; i++){
        console.log("entered finding loop");
        if (this._storage.get(index)[i][0] === k){
          this._storage.get(index)[i][1] = v;
          hasFound = true;
          break;
        }
      }
      if(!hasFound){
        var subArrayLength = this._storage.get(index).length;
        this._storage.get(index)[this._storage.get(index).length] = [k, v];
      }
  }
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  if (this._storage.get(index) && this._storage.get(index).length > 1){
    for(var i = 0; i < this._storage.get(index).length; i++){
      if (this._storage.get(index)[i][0] === k){
          return this._storage.get(index)[i][1];        
      }
    }
  } else if (this._storage.get(index)) {
    return this._storage.get(index)[0][1];
 }
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  if (this._storage.get(index) && this._storage.get(index).length > 1){
    for(var i = 0; i < this._storage.get(index).length; i++){
      if (this._storage.get(index)[i][0] === k){
        this._storage.get(index)[i][1] = undefined; 
        break;      
      } 
    }
  } else{
    this._storage.set(index, undefined);
      }
};