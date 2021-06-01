<<<<<<< HEAD
var name='Parani'
console.log(name);
name=name+"dharan Thangavelu1";
console.log(name);
// Pick a string. Your string can have any number of characters.
var my_string = "G";

// Calculate the ASCII value of the first character, i.e. the character at the position 0.
var ASCII_value = my_string.charCodeAt(0);

// Let us print
console.log(ASCII_value);
if('001' ==true)
{
  console.log("Hi");
}
else {
  console.log("Hi222");
}
=======
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
>>>>>>> c25e95266edb652062a623d6b41b073660f2261c
