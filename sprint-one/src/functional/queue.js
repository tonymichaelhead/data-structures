var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var size = 0;

  // Implement the methods below

  someInstance.enqueue = function(value) {
    //loop over existing props and assign them new key names (+1)
    storage[size] = value;
    size ++;
  };

  someInstance.dequeue = function() {
     
    if (size === 0 ) { return null; }
    var dequeued = storage['0'];
    delete storage['0'];
    for (var key in storage) {
      storage[Number(key) - 1] = storage[key];
    }
    size--;
    return dequeued;
  };

  someInstance.size = function() {
    return size;
  };

  return someInstance;
};
