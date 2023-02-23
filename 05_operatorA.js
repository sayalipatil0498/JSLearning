console.log("-------------Part1-------------");
function squareOfWordLength(value1){
   var value1length = value1.length;
    console.log(`The length of value1 is: ${value1length}`);
    var squareLen = value1length * value1length;
    console.log(`Square length of value1 is:${squareLen}`);
   
    

}
 squareOfWordLength("JavaScript");
 squareOfWordLength("Google Chrome");
 squareOfWordLength("Developer Smart");


console.log("------------------Part 2---------------");
 function stringLength(){
     var str1="I am Angular Developer";
     console.log(str1);
     var splitResult = str1.split(" ");
     console.log(splitResult);
     console.log("Total words:" , splitResult.length);

    //console.log("Given string is:",str1);
    //var str1length = str1.length;
    //console.log(`Given string length is: ${str1length}`);
    console.log("-----------------------------------");
    console.log("Division Result:",(str1.length / str1.split(" ").length));
    console.log("------------------------------------");
    console.log("Multiplication Result:",(str1.length * str1.split(" ").length));


 }
stringLength();