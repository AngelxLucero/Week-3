var ages = [3, 9, 23, 64, 2, 8, 28, 93];
var firstElement = ages.shift();
var lastElement = ages.pop();

var newAge = lastElement - firstElement;

console.log(newAge);

ages.push(newAge);

console.log(ages);

var firstElement = ages.shift();
var lastElement = ages.pop();

var newAge = lastElement - firstElement;

console.log(newAge);
console.log(ages);

var length = ages.length;
var sum = 0;
for(let i=0; i<ages.length; i++){
    sum += ages[i];
    } let average = sum / length;

console.log(average);

var names = ["Sam", "Tommy", "Tim", "Sally", "Buck", "Bob"];
