var BinarySearchTree = function(value) {
  var newTree = Object.create(BinarySearchTree.prototype);
  newTree.value = value || null;
  newTree.left = null;
  newTree.right = null;
  return newTree;
};

BinarySearchTree.prototype.insert= function(n) {
  if (this && this.value){
    if (n> this.value){
      if (!this.right){
        this.right = BinarySearchTree(n);
      } else {
        this.insert.call(this.right, n);
      }
    } else if (n < this.value) {
        if (!this.left){
        this.left = BinarySearchTree(n);
      } else {
        this.insert.call(this.left, n);
      }
    }
  } else{
    if (this){ 
      this.value = n;
    }
  }
};

BinarySearchTree.prototype.contains = function(n) {
  if(this.value === n){
    return true;
  } else if(n > this.value && this.right){
    return this.contains.call(this.right, n);
  } else if(n < this.value && this.left){
    return this.contains.call(this.left, n);
  } else {
    return false;
  }
  
  // body...
};
BinarySearchTree.prototype.depthFirstLog = function(cb) {
  cb(this.value);
  if(this.left) {
    this.depthFirstLog.call(this.left, cb);
  }
  if(this.right){
    this.depthFirstLog.call(this.right, cb);
  }
};
BinarySearchTree.prototype.breadthFirstLog = function(cb) {
  var depthArr = [];
  var initDepth = 1;
  function helper(depth) {
    if(depthArr[depth] === undefined) {
      depthArr[depth] = [];
    }  
    depthArr[depth].push(this.value);
    var runLeft = false;
    if(this.left) {
      runLeft= true;
      depth++;
      helper.call(this.left, depth);
    }
    if (runLeft){
      depth--;
    }
    if(this.right){
      depth++;
      helper.call(this.right, depth);
    }
  }
  helper.call(this, initDepth);
  for (var i = 1; i < depthArr.length; i++){
    for (var j = 0; j <depthArr[i].length; j++) {
      cb(depthArr[i][j]);
    }
  }
};
/*
 * Complexity: What is the time complexity of the above functions?
 */