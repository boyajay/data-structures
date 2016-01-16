

var HashTable = function() {
  this._limit = 8;
  this._size = 0;
  this._storage = LimitedArray(this._limit);
};


  // limitedArray.set = function(index, value) {
  //   checkLimit(index);
  //   storage.get(index) = value;
  // };
HashTable.prototype.changeSize = function(which){
    var listOfTuples= [];
    console.log("which is " + which + ", and limit is " + this._limit);
    for (var i =0 ; i < this._limit; i++){ //iterates through Hash indexes
        if (!(this._storage.get(i))){
        //console.log('skip');
        continue;
      } else {
        var arr = this._storage.get(i);
        for(var b = 0; b <arr.length; b++){ //looping through an index's nested array
          listOfTuples.push([arr[b][0], arr[b][1]]);  
        }
      }
    }

    if(which === 'double') {  
    //console.log("new limit should be" + (this._limit*2));
    this._limit *= 2;
    this._storage = LimitedArray(this._limit);
    //this._limit *= 2;
   // console.log(this._limit);
    for (var j = 0; j < listOfTuples.length; j++){
      this.insert(listOfTuples[j][0], listOfTuples[j][1]);
    }
  } 

  else {

//    console.log('old ' + this._limit );
    this._limit /= 2;
    this._storage = LimitedArray(this._limit);
  //  console.log('old ' + this._limit );
   // console.log('new ' + this._limit );
    for (var j = 0; j < listOfTuples.length; j++){
      this.insert(listOfTuples[j][0], listOfTuples[j][1]);
    }  
  }
};


HashTable.prototype.insert = function(k, v) {
  console.log('insterting');
  if (this._size + 1 > (0.75 * this._limit)){
  //  console.log('old ' + this._limit);
    console.log("about to double");
    this.changeSize('double');
    //console.log('new ' + this._limit);
  }
  var index = getIndexBelowMaxForKey(k, this._limit);
  if (this._storage.get(index) === undefined){
    var newIndexVal = [[k, v]];
    this._storage.set(index, newIndexVal);
    ////console.log(this.retrieve(k));
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
          //this._storage.get(index)[i][1] = v;
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
  console.log("size and limit are " + this._size + ", " + this._limit);
  if ((this._size - 1) < (0.25 * this._limit)){
      this.changeSize('half');
  }
  var index = getIndexBelowMaxForKey(k, this._limit);
  if (this._storage.get(index) && this._storage.get(index).length > 1){
    for(var i = 0; i < this._storage.get(index).length; i++){
      if (this._storage.get(index)[i][0] === k){
        var bucket = this._storage.get(index)[i];
        delete bucket; //i[0] === key
        this._size--;
        break;      
      } 
    }
  } else{
    this._storage.set(index, undefined);
      }
};