var donuts = ["glazed", "strawberry frosted", "powdered", "Boston creme"];

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
}

var n = 7;

[1,2,3,4].forEach(console.log);
[1,2,3,4].map(console.log);
[1,2,3,4].filter(function xx(){
  return false;
});
changeToEight(n);

console.log(n);