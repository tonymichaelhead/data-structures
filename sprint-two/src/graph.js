

// Instantiate a new graph
var Graph = function() {
  this.nodes = [];
  this.edges = [];
  this.edgeCount = 0;
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  this.nodes.push(node);
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  return this.nodes.includes(node);
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  this.nodes.splice(this.nodes.indexOf(node), 1);
  this.edges = this.edges.filter(function(edgePair) {
    return (!edgePair.includes(node));
  });
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  //create node pair
  var nodePair = [fromNode, toNode];
  var hasEdges = false;
  
  this.edges.forEach(function(pair) {
    if (pair.toString() === nodePair.toString() || pair.toString() === nodePair.reverse().toString()) {
      hasEdges = true;
    }
  });
  return hasEdges;
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  this.edges.push([fromNode, toNode]);
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  this.edges.splice(this.edges.indexOf([fromNode, toNode]), 1);
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  //iterate over each node
  this.nodes.forEach(function(node) {
    cb(node);
  });	
};

/*
 * Complexity: What is the time complexity of the above functions?
 addNode = O(1) - constant
 contains = O(n) - linear
 removeNode = O(n2) - quadratic
 hasEdge = O(n) - linear
 addEdge = O(1) - constant
 removeEdge = O(n) - linear
 forEachNode = O(n) - linear
 */


