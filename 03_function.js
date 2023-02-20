//function with no arguments and no return value
function showFullName(){
       console.log("my full name is: sayali patil");
}
showFullName(); // function call or invoke

//function with arguments and no return type
function showAge(age){
       console.log("my age is:",age);
}
showAge(23);

//function with no argument and return value
function fullName(){
       var name = "sayali patil";
       return name;
}
var fName = fullName();
console.log(fName);

//function with arguments and return type
function sumOfNumbers(num1, num2, num3){
       var sum = num1 + num2 + num3;
       return sum;
}
var sumResult = sumOfNumbers(20, 45, 79);
console.log(sumResult);

var num1= 100;
var num2= 200;

var str1 = "Billgates";
var str2 = "stow jabs";

var name1 = "shilpa";
var name2 = "Komal";

function swapVariables(value1,value2){
       console.log("Before swap:",value1, value2);
       var temp= value1;
       value1= value2;
       value2= temp;
       console.log("After Swap:",value1, value2);
       return "Swaping variables sucessfully completed";

}
var swapResult=swapVariables(num1, num2);
console.log(swapResult);

var swapResult2= swapVariables(str1 ,str2);
console.log(swapResult2);