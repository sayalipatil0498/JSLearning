const arrayRollNumbers = [113,45,56,11,32,45,109,799,56,45];
console.log(arrayRollNumbers);
console.log("--------------reverse array-----------------");
const arrayReverse = arrayRollNumbers.reverse();
console.log(arrayReverse);
console.log("-------------using sort without using any custom logic-------------------");
const arraySort = arrayRollNumbers.sort();
console.log(arraySort);
console.log("-------------Array sort in ascending order using custom logic-------------");
arrayRollNumbers.sort((a,b) => {
    return a>b ?1 :-1;
});
console.log(arrayRollNumbers);
console.log("-------------Greatest number of array-------------------");
const sub =arrayRollNumbers.reduce((currentvalue,previous)=>{
return currentvalue>previous?currentvalue:previous;
});
console.log(sub);
console.log("-------------smallest number of array--------------------");
const subArray = arrayRollNumbers.reduce((currentvalue,previous)=>{
    return currentvalue<previous?currentvalue:previous;
});
console.log(subArray);
console.log("--------------Remove duplicate element in array-----------");
const uniqueChars = [...new Set(arrayRollNumbers)];
console.log(uniqueChars);

