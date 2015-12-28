function range(start,end,step){
  var ar = [];
  step=step?step:1;
  if(step > 0)
    for(var i=start; i<=end; i=i+step)
      ar.push(i);
  else
    for(var i=start; i>=end; i=i+step)
      ar.push(i);
  return ar;
}
function sum(arr){
  var sum=0;
  for(var i=0; i<arr.length; i++)
    sum += arr[i];
  return sum;
}
console.log(sum(range(1, 10)));
// → 55
console.log(range(5, 2, -1));
// → [5, 4, 3, 2]