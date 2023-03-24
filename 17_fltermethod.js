const array=[3,4,5,60,7,80,9];
const newArray = [];
array.forEach((elment)=>{
   if(elment>=50) {
    newArray.push(elment);
   }

});
console.log(newArray);

const arrayElements =array.filter((currentvalue)=>{
    return currentvalue >=50;
});
console.log(arrayElements);

const arrayElement1 = array.filter(currentvalue =>currentvalue>=50);
console.log(arrayElement1);

const array1 =[2,3,4,5,6,7,8];
const arrayEle = array1.filter(currentvalue=>currentvalue%2==0);
console.log(arrayEle);
