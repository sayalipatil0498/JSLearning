var greet = "Good Morning";
console.log(typeof greet);

console.log("Total number of chars available into this string variable - greet");
var greetLength = greet.length;
console.log(greetLength);

console.log("Find the characters by index value");
var charAtIndex3 = greet.charAt(3);
console.log("Characters available at index 3 is:", charAtIndex3);

console.log("Find the last character");
var charAtLastIndex = greet.charAt(greetLength-1);
console.log("Last char is:", charAtLastIndex);

console.log("find line index by character value");
var indexofM = greet.indexOf("M");
console.log("Index of char is:",indexofM);

console.log("Index at char which is not available into the string:",greet.indexOf("z"));

console.log("Index of O char:",greet.indexOf('O'));
console.log("Index of O char using lastindexof:", greet.lastIndexOf('o'));

var replaceResult = greet.replace("Morning", "Evening");
console.log(replaceResult);
console.log(greet);

console.log("Uper Case:", replaceResult.toUpperCase());
console.log("Lower Case:", replaceResult.toLowerCase());

var myName = "  Virat  Kohli  ";
var myNameAfterTrim = myName.trim();
console.log("Removing extra start and end spaces using trim():", myNameAfterTrim, myName.length,myNameAfterTrim.length);

//find the total extra spaces removed from the string - myName
var count=myName.length - myNameAfterTrim.length;
console.log(count);

console.log(myName.trimStart(), myName.trimEnd());

console.log("includes()");
console.log("Is substring Mor includes in the gret or not:",greet.includes("Mor"));
console.log("Is substring Afternoon includes in the greet or not:",greet.includes("Afternoon"));
console.log("Is substring O includes in the greet or not :", greet.includes("O"));

console.log("slice() method");
var sliceResult = greet.slice(5,11);
console.log(sliceResult);
console.log(greet.slice(2,5));

console.log("split() method:");
var greet = "Good Morning";
var splitResult = greet.split("");
console.log(splitResult);
console.log("Total words:", splitResult.length);

var myFriendList = "Billgates, stew  Job, Elon nusk,Ratan Tata,sundar Pichai,Satya,Narayan Murti";
var frdList = myFriendList.split("");
console.log(frdList);
console.log(frdList.length);
