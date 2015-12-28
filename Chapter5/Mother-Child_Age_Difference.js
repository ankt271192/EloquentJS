var ancestry = JSON.parse(require("./ancestry.js"));

function average(array){
  function plus(a, b) { return a + b; }
  return array.reduce(plus) / array.length;
}
var byName = {};
ancestry.forEach(function(person){
  byName[person.name] = person;
});
var diff = ancestry.filter(function(person){
  return byName[person.mother] != null;
}).map(function(person) {
  return person.born - byName[person.mother].born;
});
console.log(average(diff));
// → 31.2