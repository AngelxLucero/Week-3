// #1 Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93.
var ages = [3, 9, 23, 64, 2, 8, 28, 93];

//#a Programmatically subtract the value of the first element in the array from the 
//value in the last element of the array. Print the result to the console.

var firstElement = ages.shift();
var lastElement = ages.pop();
var newAge = lastElement - firstElement;

console.log(newAge);

//#b Add a new age to your array and repeat the step above to ensure it is dynamic 
ages.push(newAge);
var firstElement = ages.shift();
var lastElement = ages.pop();
var newAge = lastElement - firstElement;

console.log(newAge);

//#c Use a loop to iterate through the array and calculate the average age. 
//Print the result to the console.
var length = ages.length;
var sum = 0;
for(let i=0; i<ages.length; i++){
    sum += ages[i];
    } let average = sum / length;

console.log(average);

//#2 Create an array called names that contains the following values: 
//‘Sam’, ‘Tommy’, ‘Tim’, ‘Sally’, ‘Buck’, ‘Bob’.

var names = ["Sam", "Tommy", "Tim", "Sally", "Buck", "Bob"];

//#2a Use a loop to iterate through the array and calculate the average 
//number of letters per name. Print the result to the console.

var total = 0;
for(let i=0; i<names.length; i++) {
   total += names[i].length;
} let avg = total / names.length;
console.log(avg);

//#2b Use a loop to iterate through the array again and concatenate all 
//the names together, separated by spaces, and print the result to the console.

for(let i=0; i<names.length; i++){
}let concatenateNames = names + " ";

console.log(concatenateNames);


//#3 How do you access the last element of any array? 
//you can access the last element in an arry by creating a varaible and giving the value 
//equal to the array and in brackets the last index number. thearray[last index number];
//example:the array is: var names = [Sam, Jim, Mike]
//let lastElement = names[2];
//console.log(lastElemenet); will log the last element in this array (as 2 is the last index).
//if you don't know the length of the array you can then access the last 
//element by using arry.length -1
//example: var names = [Sam, Jim, Mike] 
//let name = names[names.length - 1];
//console.log(name);


//#4 How do you access the first element of any array?
//you can access the first element in an arry by making a varaible and giving the 
//value equal to first index in an array
// as 0 will always be the first element in an array. Example:
//var list = ["Sam", "Jim", "Mike"]
//var firstElement = list[0];
//console.log(firstElement);


//#5 Create a new array called nameLengths. Write a loop to iterate over the previously 
//created names array and add the length of each name to the nameLengths array.
var nameLengths = [3,5,3,5,4,3];
for(let i=0; i<names.length; i++){
    var nameAndLength = names + "," + nameLengths;
}
console.log(nameAndLength);

//#6 Write a loop to iterate over the nameLengths array and calculate the sum of all 
//the elements in the array. Print the result to the console.
var sum= 0;
for(let i=0; i<nameLengths; i++){
    total = sum + nameLengths.lengh[i];
}
console.log(total);


//#7 Write a function that takes two parameters, word and n, as arguments 
//and returns the word concatenated to itself n number of times. (i.e. if 
//I pass in ‘Hello’ and 3, I would expect the function to return ‘HelloHelloHello’).

function test(word, n){
    let a = "";
    for(let i=0; i<n; i++){
        a = a += word;
    }
    return a;
}
console.log(test("Hello", 3));

//8.Write a function that takes two parameters, firstName and lastName, 
//and returns a full name (the full name should be the first and the last name 
//separated by a space).

function fullName(firstName, lastName){
   return firstName + " " + lastName;
}
console.log(fullName("Jim","Carry"));

//9. Write a function that takes an array of numbers and returns true if the sum 
//of all the numbers in the array is greater than 100.
var a = 50;
var b = 80;
var c = 15;
function totalNumber(num1,num2,num3){
    add = num1 + num2 + num3;
    if(add > 100){
        return true;
    }else{
        return false;
    }
}
console.log(totalNumber(a,b,c));

//12.	Write a function called willBuyDrink that takes a boolean isHotOutside, 
//and a number moneyInPocket, and returns true if it is hot outside and if 
//moneyInPocket is greater than 10.50.

//var isHotOutside = true;
//var moneyInPocket = 0.0

//fucntion willBuyDrink(isHotOutside, moneyInPocket){
//    while (isHotOutside){
//        if(isHotOutside && moneyInPocket > 10.50){
//            return true;
//        }
 //       else{
 //           moneyInPocket +=10
 //      }
  //  }

