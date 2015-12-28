function countBs(st){
  return countChar(st,"B");
}
function countChar(st,ch){
  var count = 0;
  for(var n=0; n < st.length; n++)
  if(st.charAt(n) == ch)
    count++;
  return count;
}
console.log(countBs("BBC"));
// → 2
console.log(countChar("kakkerlak", "k"));
// → 4