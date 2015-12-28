function myStringify(obj){
  if(typeof obj === "number" || typeof obj === "boolean")
    return String(obj);
  if(typeof obj === "string")
    return "\"" + obj + "\"";
  if(Array.isArray(obj)){
    var starray = [];
    for(var i=0; i<obj.length; i++)
      starray.push(myStringify(obj[i]));
    return "[" + starray.join(",") + "]";
  }
  if(typeof obj === "object"){
    var starray = [];
    var keyarray = Object.keys(obj);
    for(var i = 0; i < keyarray.length ; i++){
      var name = keyarray[i];
      var value = obj[name];
      var st = "";
      if(typeof value === "object")
        st = "\"" + name + "\":" + myStringify(value);
      else if(typeof value === "string" )
        st = "\"" + name + "\":" + "\"" + value + "\""; 
      else 
        st = "\"" + name + "\":" + value; 
      starray.push(st);
    }
  return "{" + starray.join(",") + "}";
  }  
}
var string = JSON.stringify({name: "X", born: 1980});
console.log(string);
// → {"name":"X","born":1980}
console.log(JSON.stringify({}));                  // '{}'
console.log(JSON.stringify(true));                // 'true'
console.log(JSON.stringify("foo"));               // '"foo"'
console.log(JSON.stringify([1, "false", false])); // '[1,"false",false]'
console.log(JSON.stringify({ x: 5 }));            // '{"x":5}'
console.log(JSON.stringify({ x: 5, y: 6 }));
// '{"x":5,"y":6}' or '{"y":6,"x":5}'
console.log(JSON.stringify({ x: 5, y: { x: 5 , z: 6}}));
console.log(JSON.stringify([1, "false", false, {x: 5, y: 6}]));

var str = myStringify({name: "X", born: 1980});
console.log(str);

console.log(myStringify({}));                  // '{}'
console.log(myStringify(true));                // 'true'
console.log(myStringify("foo"));               // '"foo"'
console.log(myStringify([1, "false", false])); // '[1,"false",false]'
console.log(myStringify({ x: 5 }));            // '{"x":5}'
console.log(myStringify({ x: 5, y: 6 }));
// '{"x":5,"y":6}' or '{"y":6,"x":5}'
console.log(myStringify({ x: 5, y: { x: 5 , z: 6}}));
console.log(JSON.stringify([1, "false", false, {x: 5, y: 6}]));