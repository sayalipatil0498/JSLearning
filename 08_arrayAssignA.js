console.log("Given Array");
var arraySeasonalFruits = ["Banana","Orange", "Apple","Mango","Water Melon"];
console.log(arraySeasonalFruits);

console.log("=========Log the first and last element on console=========");
var arraySeasonalFruits = ["Banana","Orange", "Apple","Mango","Water Melon"];
const valueAtIndex0 = arraySeasonalFruits[0];
console.log(`The First Fruit element is: ${valueAtIndex0}`);
const valueAtIndex4 = arraySeasonalFruits[arraySeasonalFruits.length-1];
console.log(`The Last Fruit element is: ${valueAtIndex4}`);

console.log("======= Adding element Papaya before element Banana====");
var arraySeasonalFruits = ["Banana","Orange", "Apple","Mango","Water Melon"];
console.log( arraySeasonalFruits);
arraySeasonalFruits.unshift("Papaya");
console.log(arraySeasonalFruits);

console.log("======= Removing element Mango from to array====");
var arraySeasonalFruits = ["Banana","Orange", "Apple","Mango","Water Melon"];
console.log( arraySeasonalFruits);
const splicedarraySeasonlFruits = arraySeasonalFruits.splice(3 , 1);
console.log(arraySeasonalFruits);

console.log("======== Adding element Pineapple at alst position=======");
var arraySeasonalFruits = ["Banana","Orange", "Apple","Mango","Water Melon"];
console.log( arraySeasonalFruits);
arraySeasonalFruits.push("Pineapple");
console.log(arraySeasonalFruits);

console.log("======== Insert element 'Dragon fruit' before 'Water Melon'========");
var arraySeasonalFruits = ["Banana","Orange", "Apple","Mango","Water Melon"];
console.log(arraySeasonalFruits);
arraySeasonalFruits.splice(4,0,"Dragon Fruit");
console.log(arraySeasonalFruits);

console.log("======== Replace an element 'Orange' with 'Kiwi'========");
var arraySeasonalFruits  = ["Banana","Orange", "Apple","Mango","Water Melon","Kiwi"];
console.log(arraySeasonalFruits);
arraySeasonalFruits.splice(5,1,"Orange");
console.log(arraySeasonalFruits);

console.log("========= Log the elements starting from index 1 to 4=========");
var arraySeasonalFruits  = ["Banana","Orange", "Apple","Mango","Water Melon","Kiwi"];
console.log(arraySeasonalFruits);
const subArray = arraySeasonalFruits.slice(1,4);
console.log(subArray);

console.log("=========Select Last 3 elements and log on console==========");
var arraySeasonalFruits  = ["Banana","Orange", "Apple","Mango","Water Melon","Kiwi"];
console.log(arraySeasonalFruits);
const sub = arraySeasonalFruits.slice(arraySeasonalFruits.length - 3);
console.log(sub);





