var BinarySearchTree = function(value) {
  var newTree = Object.create(BinarySearchTree.prototype);
  newTree.value = value || null;
  newTree.left = null;
  newTree.right = null;
  newTree.totalNodes = 0;
  newTree.valueArr =[];
  newTree.maxDepth = 0;
  //counter =0
  //newTree.leftDepth = 0;
  //newTree.rightDepth = 0;
  //newTree.currentDepth = Math.max(newTree.leftDepth, newTree.rightDepth);
  return newTree;
};

BinarySearchTree.prototype.insert= function(n) {
  this.totalNodes++;
  var counter = 0;
  if (this && this.value){
    if (n> this.value){
      if (!this.right){
        counter++
        this.right = BinarySearchTree(n);
        //this.rightDepth++;
      } else {
        this.insert.call(this.right, n);
      }
    } else if (n < this.value) {
        if (!this.left){
        this.left = BinarySearchTree(n);
        counter ++
        //this.leftDepth++;
      } else {
        this.insert.call(this.left, n);
      }
    }
  } else{
    if (this){ 
      this.value = n;
    }
  }
  this.valueArr.push(n);
  console.log(this.valueArr);
  if(counter > this.maxDepth) {
    this.maxDepth = counter;
  }
  this.rebalance;
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

BinarySearchTree.prototype.rebalance = function (){
  //var currentDepth = ??;
  var minDepth = 0;
  var passedNodes = 0;
  while(passedNodes < this.totalNodes){
    passedNodes += 2^(minDepth);
    minDepth++;
  }
  if(this.maxDepth > 2 * minDepth){
    rebalanceHelper();
  }
  var balancedValArr = [];
  var rebalanceHelper = function(array) {
    array.sort();
    var midIndexFunc = function(arr){
      Math.floor((arr.length-1)/2);
    };
    var midIndex = midIndexFunc(array);
    var arrayLeft =[]; //nested array of remaining values to test 
    var arrayRight =[];
    //var temp = BinarySearchTree(valueArr[midIndex]);
    balancedValArr.push(array[midIndex]);
    arrayLeft = array.slice(0, midIndex);
    arrayRight = array.slice(midIndex+1);
    if(arrayLeft.length > 1){
      rebalanceHelper(arrayLeft);
    } 
    if(arrayRight.length > 1){
      rebalanceHelper(arrayRight);
    }
  };

  rebalanceHelper(this.valueArr);

  //create a while loop to determine the minimum depth



};

/*
 * Complexity: What is the time complexity of the above functions?
 */