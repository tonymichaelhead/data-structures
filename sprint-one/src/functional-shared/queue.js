var Queue = function() {
  var instance = {
    storage: {},
    storageSize: 0
  };

  _.extend(instance, queueMethods);

  return instance;
};

var queueMethods = {
  enqueue: function(string) {
    this.storage[this.storageSize] = string;
    this.storageSize++;
  },
  dequeue: function() {
    if (this.storageSize === 0) { return null; }

    var dequeued = this.storage['0'];
    delete this.storage['0'];
    for (var key in this.storage) {
      this.storage[Number(key) - 1] = this.storage[key];
    }
    this.storageSize--;
    return dequeued;

  },
  size: function () {
    return this.storageSize;
  }
};


