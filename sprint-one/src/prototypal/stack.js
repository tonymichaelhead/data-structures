var Stack = function() {
  var instance = Object.create(stackMethods);
  instance.length = 0;
  instance.storage = {};

  return instance;
};

var stackMethods = {
  push: function(value) {
    this.storage[this.length] = value;
    this.length++;
  },
  pop: function() {
    if (this.length === 0) { return null; }

    var popped = this.storage[this.length - 1];
    delete this.storage[this.length - 1];
    this.length--;
    return popped;  
  },
  size: function() {
    return this.length;
  }
};


