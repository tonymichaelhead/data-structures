var Queue = function() {
  var instance = Object.create(queueMethods);
  instance.length = 0;
  instance.storage = {};
  return instance;
};

var queueMethods = {
  enqueue: function(value) {
    this.storage[this.length] = value;
    this.length++;
  },
  dequeue: function() {
    if (this.length === 0) { return null; }

    var dequeued = this.storage['0'];
    for (var key in this.storage) {
      this.storage[Number(key) - 1] = this.storage[key];
    }
    this.length--;  
    return dequeued;
  },
  size: function() {
    return this.length;
  }
};


