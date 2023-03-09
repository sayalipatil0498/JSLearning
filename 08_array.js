
//let sayaliFN = "Sayali Patil";
//let nikhilFN = "Nikhil Patil";

let arrayofNumbers = [0, 2, 4, 5, 6, 7, 8];
console.log(arrayofNumbers);
console.table(arrayofNumbers);

const totalArrayElements = arrayofNumbers.length;
console.log(`Total no of elements available in array is: ${totalArrayElements}`);

const is7Available = arrayofNumbers.includes(7);
console.log(`Is 7 available : ${is7Available}`);

const is9Available = arrayofNumbers.includes(9);
console.log(`Is 9 available : ${is9Available}`);

const indexof7 = arrayofNumbers.indexOf(7);
console.log(`Is of 7 element is: ${indexof7} `);

const indexof10 = arrayofNumbers.indexOf(10);
console.log(`Is of 10 element is: ${indexof10} `);

var arrayofNumbers1 = [ 24, 28, 25, 15, 30, 5];
const valueAtIndex2 = arrayofNumbers1[2];
console.log(`Value of index 2 is: ${valueAtIndex2}`);

arrayofNumbers1[3] = 35; // update the one value
console.log(arrayofNumbers1);

var arrayOfNumbers = [ 18, 28, 38, 48 , 58, 5];
console.log("======Adding element in the last using push()==========");
arrayOfNumbers.push(40);
console.log(arrayOfNumbers);
console.log("========Adding element in the first using unshift()=========");
arrayOfNumbers.unshift(5);
console.log(arrayOfNumbers);

var arrayOfNumbers = [18, 28, 38, 48, 50];
console.log(arrayOfNumbers);
console.log("=========Removing last element using pop()");
arrayOfNumbers.pop();
console.log(arrayOfNumbers);
console.log("=========Removing first element using shift()");
arrayOfNumbers.shift();
console.log(arrayOfNumbers);

var arrayOfNumbers = [10, 20, 30, 40, 50, 60];
console.log("==========slice(startIndex)");
const arrayFromIndex3 = arrayOfNumbers.slice(3);
console.log(arrayFromIndex3);

console.log("========slice(startIndex, endIndex!===" );
const subArray = arrayofNumbers.slice(2, 4);
console.log(subArray);

c0nsole.log("=======Traversing============");
var arrayOfNumbers = [10, 20, 25, 15, 40, 45, 60, 40, 30, 22, 26];
let sum = 0;
for (let index = 0; index < arrayOfNumbers; index++) {
    const element = arrayOfNumbers[index];
    sum = sum + element;

    
}
console.log(`sum of an array element is:${sum}`);


