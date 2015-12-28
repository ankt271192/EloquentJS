var st="";
var size = 8;
for(var i=0; i<size; i++)
{
  for(var j=0; j<size; j++)
  { 
    if((i+j)%2==0)
      st = st + " ";
    else
      st = st + "#";
  }
  st = st + "\n";
}
console.log(st);