console.log("----Count total no of vowels in given string------");
var totalNumVowels = function(str){
    var vowelsCount = 0;
    for (let index = 0; index < str.length; index++) {
    var char = str.charAt(index);
    if(char =="a" || char=="A" || char =="e" ||char=="E" ||char=="i" || char=="I"||char=="o" ||char=="O"||char=="u"|| char=="U"){ 
        vowelsCount += 1;
    }

 }
 return vowelsCount;
}
var result = totalNumVowels("JavaScript is the language of internet");
console.log(`Total no of vowels "JavaScript is the language of internet" are:`,result);
var result = totalNumVowels("I am Angular Developer");
console.log(`Total no of vowels "I am Angular Developer" are:`,result);
var result = totalNumVowels(" Hard work and commitment is the key of sucess");
console.log(`Total no of vowels "Hard work and commitment is the key of sucess" are:`,result);



console.log("-----------Find the last word--------");
function lastWordCharsCount(str){
    let count = 0;
    let lastWord = "";
    for (let index = str.length - 1; index >= 0; index--) {
        var char = str[index];

        
     if(char !== " "){
        lastWord =lastWord + char;
     }else if(lastWord !== ""){
        break;

     }
      }
      count = lastWord.length;
    return count;
      
}
var result = ("JavaScript is the language of internet");
var count = lastWordCharsCount(result);
console.log("last word count of string JacaScript the language of internet is:",count);
var result = ("I am Angular Developer");
var count = lastWordCharsCount(result);
console.log("Last word count of string I am Angular Developer is:", count);
var result = (" Hard work and commitment is the key of sucess");
var count = lastWordCharsCount(result);
console.log("Last word count of string  Hard work and commitment is the key of sucess is " ,count);


