var Tree = function(value) {
  var newTree = {};
  newTree.value = value;
  newTree.children = [];
  _.extend(newTree, treeMethods);

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  this.children.push(Tree(value));
};

treeMethods.contains = function(target) {
  var currentNode = this;
  var checker = false;

  var search = function(node) {
    if (node.value === target) {
      checker = true;
    } else {
      if (node.children) {
        node.children.forEach(function(child) {
          search(child);
        });
      } 
    }
  };
  search(currentNode);
  
  return checker;
};



/*
 * Complexity: What is the time complexity of the above functions?
 addChild = O(1) - Constant
 contains = O(n) - Linear
 */
