var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    if (list.tail === null) {
      list.tail = Node(value);
      list.head = list.tail;
    } else {
      var previousTail = list.tail;
      previousTail.next = Node(value);
      list.tail = previousTail.next;
    }
    //instansiate new node
    //change old tail node to now point to the new tail
    
    //point tail to new node value  
  };

  list.removeHead = function() {
    //point head to new head(list.head.next)
    var currentHead = list.head;
    //list.head.next = null;
    list.head = list.head.next;

    return currentHead.value;
    //remove reference from old head and 
    // if (list.head.next === null) {
    //   list.head = null;
    // } else {

    //   list.head = list.head.next;

    // }
    //return stored head value
  };

  list.contains = function(target) {
    var checkNodes = function(node) {
      if (node.value === target) {
        return true;
      }
      if (node.next) {
        return checkNodes(node.next);
      }
      return false;
    };
    return checkNodes(list.head);
  };
  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 addToTail  = O(1) - constant
 removeHead = O(1) - constant
 contains = O(n) - linear
 */
