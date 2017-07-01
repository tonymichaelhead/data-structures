var BinarySearchTree = function(value) {
  var tree = Object.create(BinarySearchTree.methods);
  tree.left = null;
  tree.right = null;
  tree.value = value;
  return tree;
};

BinarySearchTree.methods = {};

BinarySearchTree.methods.insert = function(val) {
  
  if (val < this.value) {
    if (!this.left) {
      this.left = BinarySearchTree(val);
    } else {
      this.left.insert(val);
    }
  } else if (val > this.value) {
    if (!this.right) {
      this.right = BinarySearchTree(val);
    } else {
      this.right.insert(val);
    }
  }
};

BinarySearchTree.methods.contains = function(target) {
  var wasFound = false;
  var currentNode = this;
  
  var searchNodes = function(currentNode) {
    if (currentNode.value === target) {
      wasFound = true;
    } else if (currentNode.right || currentNode.left) {
      if (target < currentNode.value) {
        searchNodes(currentNode.left);
      } else {
        searchNodes(currentNode.right);
      }
    }
  };
  searchNodes(currentNode);
  return wasFound;
};

BinarySearchTree.methods.depthFirstLog = function(cb) {
  var currentNode = this;
  
  var runCallbackOnNodes = function(currentNode) {
    cb(currentNode.value);

    if (currentNode.left !== null) {
      currentNode = currentNode.left;
      runCallbackOnNodes(currentNode);
    } else if (currentNode.right !== null) {
      currentNode = currentNode.right;
      runCallbackOnNodes(currentNode);
    }
  };
  runCallbackOnNodes(currentNode);
};
/*  
 * Complexity: What is the time complexity of the above functions?
 */
