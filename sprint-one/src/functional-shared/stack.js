var Stack = function() {
  var instance = {
    storageSize: 0,
    storage: {}
  };
  _.extend(instance, stackMethods);

  
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  return instance;
};

var stackMethods = {
  
  push: function(value) {
    this.storage[this.storageSize] = value;
    this.storageSize++;
  }, 

  pop: function() {
    if (this.storageSize === 0) { return null;}

    var popped = this.storage[this.storageSize - 1];
    delete this.storage[this.storageSize - 1];
    this.storageSize--;
    return popped;
  },

  size: function() {
    return this.storageSize;
  }
};