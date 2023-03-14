let bankSbi = {
    bankName : "SBI Bank",
    ifsc : "SBI102030",
    accountNo : 6065302939399,
    interestRate :10.25
}

console.log(bankSbi);

let bankLocation = {
    street : "NH4",
    city : "Karad",
    pinCode : 415110
}
console.log(bankLocation);

 let cloneSbi = Object.assign({} , bankSbi );
 console.log(cloneSbi);

 let cloneLocation = Object.assign({} , bankLocation );
 console.log(cloneLocation);

 console.log("------------ closing using spread operator-----------");
 let cloneObj = {...bankSbi}
 console.log(cloneObj);
 let cloneSpread = {...bankLocation}
 console.log(cloneSpread);
 
 console.log("-------------step four-------------------------");
 let rateOfInterest = {
    homeLoanInterest : 10,
    personalLoanInterest : 40,
    dueInterest : 12
 }
 console.log(rateOfInterest);
 
 console.log("-----------------Merge objet-----------------------");
   const sbiDetails = Object.assign({},bankSbi , bankLocation, rateOfInterest);
   console.table(sbiDetails);

   console.log("---------------------Traverse Object----------------");
   for (const key in sbiDetails) {

   console.log(`${key}==> ${sbiDetails[key]}`);
   }
    
        
    
   


 