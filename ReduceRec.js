// Original Reduce Defn
function reduce(array, combine, start) {
  var current = start;
  for (var i = 0; i < array.length; i++)
    current = combine(current, array[i]);
  return current;
}

console.log(reduce([1, 2, 3, 4], function(a, b) {
  return a + b;
}, 0));

// Recursive Reduce Defn
function reduceRec(array,combine,start,index) {
  if(index == array.length)
    return start;
  else {
    start = combine(start, array[index]);
    return reduceRec(array,combine,start,++index);
  }
}

console.log(reduceRec([1, 2, 3, 4], function(a, b) {
  return a + b;
}, 0, 0));
// → 10