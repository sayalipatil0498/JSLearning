console.log("--------function with no arg and no return type value-----------");
 let show_=()=>console.log("Good Morning");console.log("Today is Monday"); 
 show_();

console.log( "------function with arg no return value----------------");
let mul_ =(n1, n2, n3)=> {
    multiply = n1* n2*n3;
} 
mul_(5,5,2);
console.log("Multiplication is:",multiply);
console.log("--------------Multiplicatio of 2 argument 3rd value is default 1------------");
mul_(10,4,1);
console.log("Multiplication is:",multiply);

console.log("-----------Addition of 5 argument--------------------");
let add =(a1, a2,a3,a4,a5)=>{
    addtion = a1+a2+a3+a4+a5;
    return addtion;
}
var result = add(100,100,200,349,756);
console.log("Addition of 5 argument is:",result);
console.log("--------------------Addition of 5 string ---------------");
result = add("I am" , "learing" , "ES6" , "features" ,"in Depth");                                                                                                                                                                                                                                                                                       
console.log("concat of 5 strings:",result );