const arrayNumbers =[1, -7, 40, 502, -77, 91, 0, 108, 89, -601];
console.log(arrayNumbers);
const indexses = [];
console.log("-----------------step1--------------------");
arrayNumbers.forEach((element,index ) => {
    if(index>=0){
  console.log(`Element is:${element}  ,  Index is:${index}`);

    }
    
});
console.log("----------------step2-----------------------");
arrayNumbers.forEach((element) =>{
    if(element>=0)
    console.log(`Positive numbers:${element}`);
});
console.log("---------------step3------------------------");
arrayNumbers.forEach((element) =>{
    const array =[element];
    if(element<0)
console.log(array);
    
});
console.log("----------------step4--------------------------");
arrayNumbers.forEach((element) =>{
if(element%2==0){
    console.log("Even element is:",element);
}
});
console.log("---------------step5----------------------------");
let sum = 0;
arrayNumbers.forEach((element) =>{
sum = sum + element;

});
console.log(`Sum of all element is:${sum}`);
console.log("-----------------step6------------------");
arrayNumbers. forEach((element,index) =>{
   if(index%2==0){
    console.log(`Even index element:${element}`);
   }
});