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
  
};
/*
 * Complexity: What is the time complexity of the above functions?
 */