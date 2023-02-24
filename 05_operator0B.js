function maleMarriageEligibility( gender , age , boyName){
    var marriageStatus = "Male"&& age>=21 
    ? `Hey ${boyName} you are eligible for marriage` 
    :` else not eligible for marriage`;
    return marriageStatus;

}
var result = maleMarriageEligibility("male" , 25 , "Billgates");
console.log(result);
var result = maleMarriageEligibility("male" , 17, "Stew Jobs");
console.log(result);



