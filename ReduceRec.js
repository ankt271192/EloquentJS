console.log([1, 2, 3, 4].reduce(function(a, b) {
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