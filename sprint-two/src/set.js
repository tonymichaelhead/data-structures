var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = [];
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
  //check if item already exists in set._storage
  if (!this.contains(item)) {
    this._storage.push(item);
  }
};

setPrototype.contains = function(item) {
  return this._storage.includes(item);
};

setPrototype.remove = function(item) {
  if (!this._storage.includes(item)) { return null; }

  this._storage.splice(this._storage.indexOf(item), 1);
};


/*
 * Complexity: What is the time complexity of the above functions?
 add = O(n) - Linear because you must iterate over items in the array to see if they are already in the 
 array or not, and push only if they are unique.
 contains = O(n) - Linear because you must iterate over each item in the array to see if it is included.
 remove = O(n) - Linear because you must iterate over the storage in order to find the index of the item you want to delete.
 */

