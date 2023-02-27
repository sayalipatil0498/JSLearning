



console.log(10 + "hi");
console.log("Good" + "Morning");

console.log("opration:10-hi===",10 - "hi");
console.log("operation:0/0===",0/0);

var num = "10";
console.log(typeof num);

var num2 = num;
console.log(`${num2} and its type ${typeof num2}`);

var myName = "sayali patil";
var result = +myName;
console.log(`${result} and its type ${typeof result}`);

console.log(10 + true);
console.log(10 - false);
//implicit to string
result = '3' + 2;
console.log(result); //+ concatinate 2 value ektra krte 

result = '3' + true;
console.log(result);

result = '3' + undefined;
console.log(result);
 
result = '3' + null;
console.log(result);
//implicit boolean to number
//let result;

result = '4' - true;
console.log(result);

result = 4 +  true;
console.log(result);

result = 4 + false;
console.log(result);

//string to number
result = '4' - '2';
console.log(result);

result = '4' - 2;
console.log(result);

result = '4' * 2;
console.log(result);

result = '4' / 2;
console.log(result);
//undefined with null boolean number given nan
result = 4 + undefined;
console.log(result);

result = 4 - undefined;
console.log(result);

result = null + undefined;
console.log(result);

result = true + undefined;
console.log(result);

