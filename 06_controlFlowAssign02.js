console.log("----------step1-----------");
function maleMarriageEligibility(gender , age , boyName){

    if(gender=="Male" && age>=21){
        return `Hey ${boyName} you are eligible for marriage`;

    }
    else{

        return `Hey ${boyName} you are not eligible for marriage`;
    }
    
    }

var marriageStatus = maleMarriageEligibility("Male",25,"Billgates");
console.log(marriageStatus);
var marriageStatus =maleMarriageEligibility("Male",17,"Stew Jobs");
console.log(marriageStatus);

console.log("-----------step2------------");
function femaleMarriageEligibility(gender , age ,girlName){
    if("Female" && age>=18){
        return `Hey ${girlName} you are eligible for marriage`;
    }
    else{
        return `Hey ${girlName} you are not eligible for marriage`;
    }
}
var marriageStatus = femaleMarriageEligibility("Female",16,"Jenifer");
console.log(marriageStatus);
var marriageStatus =femaleMarriageEligibility("Female",27,"Malinda Gates");
console.log(marriageStatus);