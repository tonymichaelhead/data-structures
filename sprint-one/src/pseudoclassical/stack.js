var Stack = function() {
  this.length = 0;
  this.storage = {};
};

Stack.prototype.push = function(val) {
  this.storage[this.length] = val;
  this.length++;
};

Stack.prototype.pop = function() {
  if (this.length === 0) { return null; }

  var popped = this.storage[this.length - 1];
  delete this.storage[this.length - 1];
  this.length--;
  return popped;
};

Stack.prototype.size = function() {
  return this.length;
};




