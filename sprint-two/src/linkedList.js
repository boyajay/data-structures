var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.removeTail = function() {
    var oldTail = list.tail;
    list.tail = list.tail.previous;
    return oldTail.value;
  };

  list.addToHead = function(val) {
    var newHead = Node(val);
    if (list.head === null){
      list.head = newHead;
      list.tail = newHead;
    }
    var oldHead = list.head;
    list.head = newHead;
    newHead.next = oldHead;
    oldHead.previous = newHead;
  };


  list.addToTail = function(val) {
  var newTail = Node(val);
  if (list.head === null){
    list.head = newTail;
  } else {
    list.tail.next = newTail;
  }
  var oldTail = list.tail;
  list.tail = newTail;
  list.tail.previous = oldTail;
  };

  list.removeHead = function() {
    var oldHead = list.head;
    //var oldHeadref = list.head;
    list.head = list.head.next;
    //delete oldHeadref;
    return oldHead.value;

    //if list is now empty, set head and tail to null

  };

  list.contains = function(target) {
    var nextNode = list.head;
    var found = false;
    while(nextNode !== null){
      if (nextNode.value === target){
        found = true;
      } 
      nextNode = nextNode.next;
    }
    return found;
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;
  node.previous = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
