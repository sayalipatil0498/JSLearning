function voteEligibility(age){ 
    if(age<=0 || age>120 || age==undefined || age==null)
    {
       return `Your age  : ${age} this is an invald data`;
    }
    if(age>=18){
        var str = `Hey your age is : ${age} so you are eligible for voting`;
        return str;
        
    }
    else
    {
        var str =`Hey your age is : ${age} so you are not eligible for voting`;
        return str;
        }

}
var result = voteEligibility(45);
console.log(result);
var result = voteEligibility(17);
console.log(result);
var result = voteEligibility(8);
console.log(result);
var result = voteEligibility(20)
console.log(result);
var result =voteEligibility(-10);
console.log(result);
var result = voteEligibility(200);
console.log(result);
var result =voteEligibility(0);
console.log(result);
var result = voteEligibility(undefined);
console.log(result);
var result = voteEligibility(null);
console.log(result);

console.log("-----------step2-------------");
function gradeCalculation(marks){
    
}