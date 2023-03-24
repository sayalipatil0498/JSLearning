const arrayNumbers = [20,11,40,25,49,9,90,60,2,19];
console.log("------------Grater than 50 number-------------------");
const arrayFilter= arrayNumbers.filter(currentvalue=>currentvalue>50);
console.log(arrayFilter);

console.log("----------even number-----------");
const arrayFilt = arrayNumbers.filter(currentvalue=>currentvalue%2==0);
console.log(arrayFilt);

console.log("---------odd numbers------------");
const arrayFilt2 = arrayNumbers.filter(currentvalue=>currentvalue%2==1);
console.log(arrayFilt2);

console.log("------------Number which are multiple by 5 ----------------");
const arrayFilt3 = arrayNumbers.filter(currentvalue=>currentvalue%5==0);
    console.log(arrayFilt3);

console.log("-----------numbers which are between 20 & 50---------------");
const arrayFilt4 = arrayNumbers.filter(currentvalue=>currentvalue>20 && currentvalue<50);
console.log(arrayFilt4);