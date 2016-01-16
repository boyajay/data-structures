var Tree = function(value) {
  var newTree = {};
  newTree.value = value;
  newTree.parent = null;

  // your code here
  newTree.children = null;  // fix me
  newTree.addChild = treeMethods.addChild;
  newTree.contains = treeMethods.contains;
  newTree.removeFromParent =treeMethods.removeFromParent;
  newTree.transverse = treeMethods.transverse;
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  this.children = this.children || [];
  this.children.push(Tree(value));
  this.children[this.children.length-1].parent = this;
};

treeMethods.contains = function(target) {
  if(this.value === target){
    return true;
  }  else if (this.children)
  { 
    for (var i = 0; i <this.children.length; i++){
      if (this.children[i].contains(target)){
        return true;
      }
    }
  }
  return false;
};

treeMethods.removeFromParent = function() {
  //console.log(this.parent.children.indexOf(this));
  var removalIndex = this.parent.children.indexOf(this);
  childArray = this.parent.children;
  console.log(Array.isArray(childArray));
  childArray.splice(removalIndex, 1);
  this.parent = null;
};

treeMethods.transverse = function(cb) {
  cb(this.value);
  if(this.children !== null) {
    for(var i = 0; i < this.children.length; i++){
      this.transverse.call(this.children[i], cb);
    }
  }
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
