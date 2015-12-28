function range(start,end,step){
  step=step?step:1;
  return ins([],start,end,step);
}
function sum(arr){
  var sum=0;
  for(var i=0; i<arr.length; i++)
    sum += arr[i];
  return sum;
}

function ins(ar,index,end,step){
  ar.push(index);
  if(index == end)
    return ar;
  else
    return ins(ar,index+step,end,step);
}
console.log(sum(range(1, 10)));
// → 55
console.log(range(5, 2, -1));
// → [5, 4, 3, 2]