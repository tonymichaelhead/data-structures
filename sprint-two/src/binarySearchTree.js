var BinarySearchTree = function(value) {
  var tree = Object.create(BinarySearchTree.methods);
  tree.left = null;
  tree.right = null;
  tree.value = value;
  return tree;
};

BinarySearchTree.methods = {};

BinarySearchTree.methods.insert = function(val) {
  
  // add newNode to parentNode.right
  if (val < this.value) {
  //check to see if node contains children
  //if so
    if (!this.left) {
      this.left = BinarySearchTree(val);
    } else {
      this.left.insert(val);
    }
    // add newNode to parentNode.left most of the keys are on home row you dont really need to move your fingers vre
  } else if (val > this.value) {
    //check to see if right node already exists
    if (!this.right) {
      this.right = BinarySearchTree(val);
    } else {
      this.right.insert(val);
    }
    //if not, set the value to be a new tree node
    //if it does exist, call compareValues() recursively
  }
};

BinarySearchTree.methods.contains = function() {};

BinarySearchTree.methods.depthFirstLog = function() {
};
/*  
 * Complexity: What is the time complexity of the above functions?
 */
