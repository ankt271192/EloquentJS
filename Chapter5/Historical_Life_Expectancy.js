var ancestry = JSON.parse(require("./ancestry.js"));

function average(array){
  function plus(a, b) { return a + b; }
  return array.reduce(plus) / array.length;
}
function groupBy(array, groupOf){
  var group = {};
  array.forEach(function(element){
    var groupName = groupOf(element);
    if (groupName in group)
      group[groupName].push(element);
    else
      group[groupName] = [element];
  });
  return group;
}
var byCentury = groupBy(ancestry,function(person){
  return Math.ceil(person.died/100);
});
for (var century in byCentury){
  var ages = byCentury[century].map(function(person){
    return person.died - person.born;
  });
  console.log(century+": "+average(ages));
}

// → 16: 43.5
//   17: 51.2
//   18: 52.8
//   19: 54.8
//   20: 84.7
//   21: 94