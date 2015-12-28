function reverseArray(a1){
  return rev(a1,[],a1.length-1);
}
function reverseArrayInPlace(ar){
  return revInPlace(ar,0);
}
function rev(a1,a2,index){
  a2.push(a1[index]);
  if(index == 0)
    return a2;
  else
    return rev(a1,a2,--index);
}
function revInPlace(ar,index){
  if(index == Math.floor(ar.length/2))
    return ar;
  else{
    var temp = ar[index];
    ar[index] = ar[ar.length-1-index];
    ar[ar.length-1-index] = temp;
    return revInPlace(ar,++index);
  }
}
console.log(reverseArray(["A", "B", "C"]));
// → ["C", "B", "A"];
var arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
// → [5, 4, 3, 2, 1]