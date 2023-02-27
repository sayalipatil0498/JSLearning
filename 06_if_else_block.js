console.log("----------step1-----------");
function maleMarriageEligibility(gender , age , boyName){

    if(gender=="Male" && age>=21){
        var str = `Hey ${boyName} you are eligible for marriage`;
        return str;

    }
    else{

        var str = `Hey ${boyName} you are not eligible for marriage`;
        return str;
    }
    
    }

var marriageStatus = maleMarriageEligibility("Male",25,"Billgates");
console.log(marriageStatus);
var marriageStatus =maleMarriageEligibility("Male",17,"Stew Jobs");
console.log(marriageStatus);