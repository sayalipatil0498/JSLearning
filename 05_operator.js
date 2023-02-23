console.log("----------Arithmatic Operator----------");
var num1 = 10;
var num2 = 2;
var sum = num1 + num2; // addition
console.log(`Additon is: ${sum}`);

var result = num2 - num1; //substraction
console.log(`Substraction is: ${result}`);

 result = num1 * num2;
console.log(`Multiplication is:${result}`);

 result = num2  / 2;
console.log(`Division is: ${result}`);

result = num1 ** num2;
console.log(`Exponantial is: ${result}`);  // square

result = num1 % 3;
console.log(`Reminder is:${result}`);  //module

var num = 10; //compound addition
num+=20;
console.log(`Compound Addition : ${num}`);

console.log("---------comparison operator----------");
var num3 = 10;
console.log(num3==10);
console.log(10==11);

var num4 = "10";
var num5 = 10;
console.log(num4==num5); // explicit 
console.log(num4===num5); // implicit

console.log(num4!=num5);   //not equal 
console.log(10>20); // greater than
console.log(20<10); // less than

var marks = 35;
console.log(marks >= 35); //  greater than equal
console.log(marks <= 35); // less than equal

var marks =70;
var result = marks >=60 ? "Allow him for interviwe" : "dont allow";
console.log(result);

var age = 22;
var res = age >= 21 ? "congratulations..": "no next time";
console.log(res);

console.log("even or odd");
var myNumber = 7;
var result = myNumber%2 == 0 ? "Even": "odd";
console.log(result);

var num1 = 10;
var num2 = 20;
var numResult = num1> num2 ? num1 : num2;
console.log(numResult);


