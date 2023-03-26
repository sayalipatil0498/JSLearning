const arraOfNumbers=[20,11,40,25,23,11,9,31,60,2,19 ];
console.log(arraOfNumbers);
console.log("-------------add 10 into each elemnt--------------");
const newArray1=arraOfNumbers.map((currentvalue)=>{
    return currentvalue + 10;
});
console.log(newArray1);
console.log("------------square the each element-------------------");
const newArray =arraOfNumbers.map((currentvalue)=>{
 return currentvalue*currentvalue;
});
console.log(newArray);
console.log("-----------add index value into its corresponding------------");
const newArray3 = arraOfNumbers.map((currentvalue,index)=>{
return currentvalue+index;
});
console.log(newArray3);