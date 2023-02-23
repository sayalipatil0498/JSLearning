console.log("--------step1-----------");
function  greaterNumber(num1 , num2){
    var numResult = num1 > num2 ? num1 : num2;
    console.log("Greater number is :",numResult);

}
greaterNumber(10 , -10);
greaterNumber(899 , 899);

console.log("---------step2------------");
function inEvenorOddNum(val1){
    var valResult = val1 % 2 == 0 ? true : false;
   
    return valResult;

}
var Result = inEvenorOddNum(29);
console.log("Given no is :",Result);
var Result = inEvenorOddNum(44);
console.log( "Given no is :",Result);
var Result = inEvenorOddNum(0);
console.log("Given no is :",Result);
var Result = inEvenorOddNum(101);
console.log("Given no is:",Result);

console.log("-----------step3--------");
function wordLength(str1){
var str1Length = str1.length;
var result = str1Length % 2 ==0 ? "Even " : "Odd";
return result;

}
var str1result = wordLength("JavaScript");
console.log(`Word  "Javascript" has ${str1result} length`);
var str1result = wordLength("Developer");
console.log(`Word  "Developer" has ${str1result} length`);
var str1result = wordLength("Google");
console.log(`Word  "Google" has ${str1result} length`);
