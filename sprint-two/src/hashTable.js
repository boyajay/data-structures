

var HashTable = function() {
  this._limit = 8;
  this._size = 0;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.changeSize = function(which){
    var listOfTuples= [];
    for (var i =0 ; i < this._limit; i++){
        if (!(this._storage.get(i))){
        continue;
      } else {
        var arr = this._storage.get(i);
        for(var b = 0; b <arr.length; b++){ 
          listOfTuples.push([arr[b][0], arr[b][1]]);  
        }
      }
    }

    if(which === 'double') {  
    this._limit *= 2;
    this._storage = LimitedArray(this._limit);
      this._size= 0;
    for (var j = 0; j < listOfTuples.length; j++){
      this.insert(listOfTuples[j][0], listOfTuples[j][1]);
    }
  } 

  else {
    this._limit /= 2;
    this._storage = LimitedArray(this._limit);
    this._size;
    for (var j = 0; j < listOfTuples.length; j++){
      this.insert(listOfTuples[j][0], listOfTuples[j][1]);
    }  
  }
};


HashTable.prototype.insert = function(k, v) {
  if (this._size + 1 > (0.75 * this._limit)){
    this.changeSize('double');
  }
  var index = getIndexBelowMaxForKey(k, this._limit);
  if (this._storage.get(index) === undefined){
    var newIndexVal = [[k, v]];
    this._storage.set(index, newIndexVal);
    this._size++; 
  }
   else {
      var hasFound = false;
      var bucket = this._storage.get(index);
        for(var i = 0; i < bucket.length; i++){
        if (bucket[i][0] === k){
          bucket[i][1] = v;
          this._storage.set(index, bucket);
          this._size++; 
          hasFound = true;
          break;
        }
      }
      if(!hasFound){
        var subArrayLength = this._storage.get(index).length;
        this._storage.get(index)[this._storage.get(index).length] = [k, v];
        this._size++; 
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
  if ((this._size - 1) < (0.25 * this._limit)){
      this.changeSize('half');
  }
  var index = getIndexBelowMaxForKey(k, this._limit);
console.log("index is " + index);
  console.log(this._storage.get(index));
  if (this._storage.get(index) !== null && this._storage.get(index).length > 1){
    console.log("enter if loop");
    for(var i = 0; i < this._storage.get(index).length; i++){
      console.log("entering for loop");
      if (this._storage.get(index)[i][0] === k){
        var bucket = this._storage.get(index)[i];
        bucket = null;
        this._size--;
        break;      
      } 
    }
  } else{
    this._storage.set(index, undefined);
    this._size--;
      }
};