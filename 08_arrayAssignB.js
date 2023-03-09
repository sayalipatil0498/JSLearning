const arrayNumbers =[20, 31, 40,25, 23,11, 29, 9, 60, 2, 11];
const totalArrayElements = arrayNumbers.length;
console.log(`Total no of elements available in array :${totalArrayElements}`);
console.log("---------------------------------");
const valueAtIndex0 = arrayNumbers[0];
console.log(`First element avilable in array : ${valueAtIndex0}`);
const valueAtIndex10 = arrayNumbers[10];
console.log(`Last element available in array: ${valueAtIndex10}`);
const thirdElement = arrayNumbers[arrayNumbers.length - 3];
console.log(`Third last element available in array: ${thirdElement}`);
console.log("----------------------------------");
for (let index = 0; index <arrayNumbers.length; index++) {
    
    if (arrayNumbers[index] % 2 ==0) {
        const element = arrayNumbers[index];
        console.log(`even number is :"${element}"`);
        
   }
   
   
    }
    for (let index = 0; index < arrayNumbers.length; index++) {
       if (arrayNumbers[index] %2==1){
        const element = arrayNumbers[index];
        console.log(`odd number is : ${element}`);
      }

    }