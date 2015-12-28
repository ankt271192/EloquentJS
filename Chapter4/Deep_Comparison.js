function deepEqual(val1,val2){
  if(val1 === val2)
    return true;
  if(val1 == null || val2 == null || typeof val1 != "object" || typeof val2 != "object")
    return false;
  var c1=0, c2=0;
  for (var p in val1)
    c1++;
  for (var p in val2)
    c2++;
  if(c1 != c2)
    return false;
  for (var p in val1)
    if (!(p in val2) || !deepEqual(val1[p], val2[p]))
      return false;
  return true;
}
var obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, {here: 1, object: 2}));
// → false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// → true