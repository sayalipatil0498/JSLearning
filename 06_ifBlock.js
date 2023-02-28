//syntax if block
console.log("Start");
var num = 10;
if(num>0){
    console.log("inside if");
    console.log(`Number is positive ${num}`);


}
console.log("end");

var ageforvote = 20;
if(ageforvote>=18){
    console.log("Your are eligible for voting");

    console.log(`Age is:${ageforvote}`);
}

    console.log("End of next if black");

    function checkEvenOdd(num){
        if(num%2==0){
            return "Even";
        }
       if(num%2==1){
        return "Odd";
       }

    }
   var result = checkEvenOdd(45);
   console.log(`Given Number 45 is ${result}`);

   var num1 = 5;
   if (num1>0) {
    console.log(`number ${num1} is positive`);
    
   } else {
    console.log(`number ${num1} is negative`);
    
   }
    
   function maleMarriageEligibility(gender , age ,boyName){
    if (gender=="Male" && age>=21) {
        console.log("You are eligible");
        
    } else {
        console.log("Not eligible");
    }

   }
    maleMarriageEligibility("Male", 25 , "Bill Gates");
   
