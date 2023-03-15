const arrayNums = [20, 3, 4, 56, 90, 400, 49]
console.log(arrayNums);
console.log("--------------shallow cloning---------------");
const newArray = arrayNums;
console.log( newArray);
console.log("------------updated array---------------------");
arrayNums.push(55, 66);
console.log(`Updated array :${arrayNums}, cloned Array:${newArray}`);
console.log("----------------------Deep Clonning------------");
const cloneArray =[...arrayNums];
console.log(cloneArray);
console.log("---------------------updated array--------------------");
arrayNums.push(10,25);
console.log(`updated array is:${arrayNums}`);
const array1 =[... arrayNums];
console.log(`cloned array :${array1}`);
