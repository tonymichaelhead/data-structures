var Queue = function() {
  this.length = 0;
  this.storage = {};
};

Queue.prototype.enqueue = function(val) {
  this.storage[this.length] = val;
  this.length++;	
};

Queue.prototype.dequeue = function() {
  if (this.length === 0) { return null; }

  var dequeued = this.storage['0'];
  for (var key in this.storage) {
    this.storage[Number(key) - 1] = this.storage[key];
  }
  this.length--;
  return dequeued;
};

Queue.prototype.size = function() {
  return this.length;
};
