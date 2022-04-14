var ages = [3, 9, 23, 64, 2, 8, 28, 93];
var firstElement = ages.shift();
var lastElement = ages.pop();

var newAge = lastElement - firstElement;

console.log(newAge);

ages.push(newAge);

var firstElement = ages.shift();
var lastElement = ages.pop();

var newAge = lastElement - firstElement;

console.log(newAge);
console.log(ages);