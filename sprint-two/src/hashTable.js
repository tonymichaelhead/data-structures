

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit); 
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var tuple = [k, v];
  var newHash = [];

  if (!this._storage.get(index)) {
    
    newHash.push(tuple);
    this._storage.set(index, newHash);
  } else {
  
    var wasFound = this.includes(k);
    
    if (!wasFound) {
      currentHash = this._storage.get(index);
      currentHash.push([k, v]);
    } else {
      this._storage.get(index).forEach(function(tuple) {
        if (tuple[0] === k) {
          tuple[1] = v;
        }
      }); 
    }
  }   
};

HashTable.prototype.includes = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  
  return this._storage.get(index).reduce(function(wasFound, tuple) {
    return wasFound === true || tuple[0] === k;
  }, false);
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var returnValue;

  this._storage.get(index).forEach(function(tuple) {
    if (tuple[0] === k) {
      returnValue = tuple[1];
    }
  });
  return returnValue;
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var hashBucket = this._storage.get(index);

  hashBucket.forEach(function(tuple) {
    if (tuple.includes(k)) {
      hashBucket.splice(hashBucket.indexOf(k), 1);
    }
  });
};



/*
 * Complexity: What is the time complexity of the above functions?
 insert = constant O(1)
 retrieve = constant O(1)
 remove = constant O(1)
 */


