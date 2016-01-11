var ancestry = JSON.parse(require("./Chapter5/ancestry.js"));

var overNinety = ancestry.filter(function(person) {
  return person.died - person.born > 90;
});

console.log(overNinety.map(function(person) {
  return person.name;
}));

// Recursive Map Definition
function mapRec(array, transform, index, mapped) {
  if(index == array.length)
    return mapped;
  else {
    mapped.push(transform(array[index]));
    return mapRec(array, transform, ++index, mapped);
  }
}

console.log(mapRec(overNinety, function(person) {
  return person.name;
},0,[]));
// → ["Clara Aernoudts", "Emile Haverbeke",
//    "Maria Haverbeke"]