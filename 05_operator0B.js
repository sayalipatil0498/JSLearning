function maleMarriageEligibility( gender , age , boyName){
    var marriageStatus = ("Male"&& age>=21 )
    ? `Hey ${boyName} you are eligible for marriage` 
    :` you are not eligible for marriage`;
    return marriageStatus;

}
var result = maleMarriageEligibility("male" , 25 , "Billgates");
console.log(result);
var result = maleMarriageEligibility("male" , 17, "Stew Jobs");
console.log(result);

console.log("-----------step2------------");
function femaleMarriageEligibility( gender , age , girlName){
    var marriageStatus = ("Female" && age>=18)
    ?`Hey ${girlName} you are eligible for marriage `
    :`Not eligible for marriage`
    return marriageStatus;
}
var result = femaleMarriageEligibility("Female" , 16 , "Jenifer");
console.log(result);
var result = femaleMarriageEligibility("Female" , 27, "Malinda Gates");
console.log(result);



