const array = [1 , 2, 3, 4, 5, 6];
 const arrayTransform =[]; 
array.forEach((currentvalue) =>{
arrayTransform.push(currentvalue + 2);
});
console.log(arrayTransform);

console.log("------------------Using map method---------------");
const arrayNew =  array.map( (element) =>{
    return element + 2;
})
console.log(arrayNew);
console.log("------------------Using map method in string------------");
    
const arrayNames = ["sayali patil","nikhil patil","shilpa jadhav","harsh"];
const arrayNamesTransformed = arrayNames.map((element) =>{
    return element.length; 
});
console.log(arrayNamesTransformed);
