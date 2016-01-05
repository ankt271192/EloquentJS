function Vector(x,y) {
  this.x = x;
  this.y = y;
}

Vector.prototype.plus = function(that) {
  return new Vector(this.x + that.x, this.y + that.y);
};

Vector.prototype.minus = function(that) {
  return new Vector(this.x - that.x, this.y - that.y);
};

Object.defineProperty(Vector.prototype, "length", {
	get: function() { 
		return Math.sqrt(this.x * this.x + this.y * this.y);
	} 
});

console.log(new Vector(1, 2).plus(new Vector(2, 3)));
// → Vector{x: 3, y: 5}
console.log(new Vector(1, 2).minus(new Vector(2, 3)));
// → Vector{x: -1, y: -1}
console.log(new Vector(3, 4).length);
// → 5