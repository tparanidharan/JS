var donuts = ["glazed", "strawberry frosted", "powdered", "Boston creme"];

let donut = ["glazed", "strawberry frosted", "powdered", "Boston creme"];

donuts.pop();
donuts.pop();
donuts.pop();
donuts.push("maple walnut");
console.log(donuts.pop());
console.log(donuts.push("sprinkled"));
console.log(donuts);


const bicycle = {
  color: 'blue',
  type: 'mountain bike',
  wheels: {
    diameter: 18,
    width: 8
  }
};

console.log(bicycle['wheels']['width']);

function changeToEight(n) {
  n = 8; // whatever n was, it is now 8... but only in this function!
  console.log(donut.length);
  console.log(donuts.length);
}

var n = 7;
//manipulating array data
[1,2,3,4].forEach(console.log);
[1,2,3,4].map(console.log);
console.log([1,2,3,4].filter(function xx(num){
  return num%2 ===0 ? false: true;
}));
changeToEight(n);

console.log(n);

//remove duplicate element in an array
var arr=[1,2,3,4,52,3,2,4];
let unique_array = arr.filter(function(elem, index, self) {
return index == self.indexOf(elem); });

var foo = "Foo";  // globally scoped
let bar = "Bar"; // not allowed to be globally scoped

console.log(foo); // Foo
console.log(bar);

console.log(unique_array);
console.log(v);
var v=40;
//console.log(b); // ReferenceError:
  //b is not defined
  let b = 3;

console.log(b);


oco = Object.create( {} );   // create a normal object
ocn = Object.create( null ); // create a "null" object

 console.log(oco) // {} -- Seems normal
 console.log(ocn) // {} -- Seems normal here too, so far

oco.p = 1; // create a simple property on normal obj
ocn.p = 0; // create a simple property on "null" obj

 console.log(oco) // {p: 1} -- Still seems normal
 console.log(ocn) // {p: 0} -- Still seems normal here too. BUT WAIT...

