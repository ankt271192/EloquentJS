function countBs(st){
  return countChar(st,"B",0,0);
}
function countChar(st,ch,count,index){
  if(index == st.length)
  		return count;
  else 
  {
    if(st.charAt(index) == ch)
      count++;
    return countChar(st,ch,count,++index);
  }
}
console.log(countBs("BBC"));
// → 2
console.log(countChar("kakkerlak", "k",0,0));
// → 4