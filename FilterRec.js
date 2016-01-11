var ancestry = JSON.parse(require("./Chapter5/ancestry.js"));

console.log(ancestry.filter(function(person) {
  return person.born > 1900 && person.born < 1925;
}));

// Recursive Filter Defn
function filterRec(array,test,index,passed) {
  if(index == array.length)
    return passed;
  else {
    if(test(array[index]))
      passed.push(array[index]);
    return filterRec(array,test,++index,passed);
  }
}

console.log(filterRec(ancestry, function(person) {
  return person.born > 1900 && person.born < 1925;
},0,[]));