var arrays = [[1, 2, 3], [4, 5], [6]];
console.log(arrays.reduce(function(flat,cur){
  return flat.concat(cur);
},[]));
// → [1, 2, 3, 4, 5, 6]