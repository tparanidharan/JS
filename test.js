function whoThis () {
  this.trickyish = true
}
var instructor = 'Richard';

function richardSaysHi() {
  instructor="Parani";
  console.log(`${instructor} says 'hi!'`);
}

richardSaysHi();
console.log(`${instructor} says 'hi!'`);
whoThis();
