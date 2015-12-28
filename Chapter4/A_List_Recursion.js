function makeList(ar,list,index){
  list = {value: ar[index], rest: list};
  if(index==0)
    return list;
  else
    return makeList(ar,list,--index);
}
function arrayToList(ar){
  return makeList(ar,null,ar.length-1);
}
function makeArray(list,ar){
  if(!list)
    return ar;
  else{
    ar.push(list.value);
    return makeArray(list.rest,ar);
  }
}
function listToArray(list){
  return makeArray(list,[]);
}
function prepend(value, list){
  return {value: value, rest: list};
}
function nth(list, n){
  if (!list)
    return undefined;
  else if (n==0)
    return list.value;
  else
    return nth(list.rest,n-1);
}
console.log(arrayToList([10, 20]));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(listToArray(arrayToList([10, 20, 30])));
// → [10, 20, 30]
console.log(prepend(10, prepend(20, null)));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(nth(arrayToList([10, 20, 30]), 1));
// → 20