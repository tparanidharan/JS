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

  function number0()
  {console.log('Inside number0 fn');return 0;}

  return number0();
}

var n = 7;
//manipulating array data
[1,2,3,4].forEach(console.log);
[1,2,3,4].map(console.log);
console.log([1,2,3,4].filter(function xx(num){
  return num%2 ===0 ? false: true;
}));
const temp =changeToEight(n);

console.log('temp: '+temp );
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
console.log(4== true);

oco = Object.create( {} );   // create a normal object
ocn = Object.create( null ); // create a "null" object
let ocd= Object.create(bicycle);

console.log(oco); // {} -- Seems normal
console.log(ocn); // {} -- Seems normal here too, so far
console.log(ocd.color);

oco.p = 1; // create a simple property on normal obj
ocn.p = 0; // create a simple property on "null" obj

ocd.tender='red';
 console.log(oco); // {p: 1} -- Still seems normal
 console.log(ocn) ;// {p: 0} -- Still seems normal here too. BUT WAIT...
 console.log(ocd);

 var fruits = ["Banana", "Orange", "Apple", "Mango"];
var fk = fruits.keys();
for (x of fk) {
console.log(fruits[x]);
}

const dog1 = {
  name: 'tommy',
  bark: function () {
    console.log('Woof! from '+this.name);
  },
  barkTwice: function () {
    this.bark();
    this.bark();
  }
};

dog1.barkTwice();

const mockingbird = {
  title: 'To Kill a Mockingbird',
  describe: function (name) {
    if(this.title != undefined)
    console.log(`${this.title} is a classic novel of ${name}`);
  }
};

const pride = {
  title: 'Pride and Prejudice'
};

mockingbird.describe.call(pride,'Parani');
mockingbird.describe.apply(pride,['Kavitha']);


function invokeTwice(cb) {
 cb();
 cb();
}

const dog = {
age: 5,
growOneYear: function () {
  this.age += 1;
}
};

invokeTwice(dog.growOneYear.bind(dog));

console.log(dog.age);

function Dalmatian (name) {
  this.name = name;
}

Dalmatian.prototype.bark = function() {
  console.log(`${this.name} barks!`);
};

function Car1(make='honda', model='accord' ){
this.make=make;
this.model = model;
}
let tommy = new Dalmatian('Tommy');

tommy.bark();
Car1.prototype.switchOn = function(){
console.log('Car turned on!'+ this.model);
};
let civic = {ji: "dfsdf",ko: "sdfsdf"};
Dalmatian.prototype = {sji: "dfsdf",wko: "sdfsdf"};
let jimmy = new Dalmatian();
//jimmy.switchOn();

console.log("-----------------------------------");
console.log(Object.getOwnPropertyNames(jimmy));
console.log(jimmy.make);
console.log(civic.isPrototypeOf(jimmy));

function Hamster() {
  this.hasFur = true;
}

let waffle = new Hamster();
let pancake = new Hamster();
Hamster.prototype.eat = function () {
  console.log('Chomp chomp chomp!');
};

waffle.eat();
// 'Chomp chomp chomp!'

pancake.eat();
// 'Chomp chomp chomp!'
Hamster.prototype = {
  isHungry: false,
  color: 'brown'
};
console.log(waffle.color);
// undefined

waffle.eat();
// 'Chomp chomp chomp!'

console.log(pancake.isHungry);
// undefined
const muffin = new Hamster();

//console.log(muffin.hasFur());
//muffin.eat();
// TypeError: muffin.eat and muffin.hasFur is not a function

console.log(muffin.isHungry);
// false

console.log(muffin.color);


const bear = {
  claws: true,
  diet: 'carnivore'
};
function PolarBear() {
  // ...
};

PolarBear.prototype = bear;
const snowball = new PolarBear();

snowball.color = 'white';
snowball.favoriteDrink = 'cola';


function Car (color, year=1988) {
  this.color = color;
  this.year = year;

}
Car.reverse = function(){ return 'reversed!';};
Car.prototype.drive = function () {
  console.log('Vroom vroom!');
};

const car = new Car('silver');
console.log(Car.reverse());
console.log(Object.getOwnPropertyNames(Car));
function doSomething(){}
console.log( doSomething.prototype );
//  It does not matter how you declare the function, a
//  function in JavaScript will always have a default
//  prototype property.
//  (Ps: There is one exception that arrow function doesn't have a default prototype property)
var doSomething = function(){};
console.log( doSomething.prototype );
let f = function () {
   this.a = 1;
   this.b = 2;
}
let o = new f(); // {a: 1, b: 2}
f.d=30;
f.prototype.b = 3;
f.prototype.c = 4;
var o1 = {a: 1};
console.log(Object.getOwnPropertyNames(o1));
console.log(f.prototype);

function foo1(){console.log(new Error().stack);}
foo1.prototype = {
  foo_prop: "foo val"

};
function bar1(){

}
var proto = Object.create(
  foo1.prototype
);
proto.bar_prop = "bar val";
bar1.prototype = proto;
var inst = new bar1;
console.log(inst.foo_prop);
console.log(inst.bar_prop);

const t = [1, -1, 3]

t.push(5)

console.log(t.length) // 4 is printed
console.log(t[1])     // -1 is printed

t.forEach((value,ind,arr) => {
  console.log(value)  // numbers 1, -1, 3, 5 are printed, each to own line
})

var num=3;
switch (num)
{
  case 3:
    console.log("less than 3");
    break;
  case 4:
  console.log("adadas");
  break;
  default:
    console.log("default");
}

function curry(fn) {
  const args = []
  return function inner(arg) {
    console.log("Args & FN length",args.length , fn.length) 
    if(args.length === fn.length) return fn(...args)
    args.push(arg)
    return inner
  }
}

function add(a, b) {
  return a + b
}

const curriedAdd = curry(add)
console.log(curriedAdd(2)(3)()) // 5
