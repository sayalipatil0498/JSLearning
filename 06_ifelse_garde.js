function voteEligibility(age){ 
    if(null ||age<=0 || age>120 ||(typeof age!="number"))
    {
        console.log(`Your age  : '${age}' this is an invalid data`);
    }else{
    if(age>=18){
        console.log( `Hey your age is : '${age}' so you are eligible for voting`);
        
    }
    else
    {
        console.log(`Hey your age is : '${age}' so you are not eligible for voting`);
    
        }
    }

}
voteEligibility(45);
voteEligibility(17);
voteEligibility(8);
voteEligibility(20)
voteEligibility(-10);
voteEligibility(200);
voteEligibility(0);
voteEligibility(undefined);
voteEligibility(null);


console.log("-----------step2-------------");
function gradeCalculation(marks){
    if(marks==0 || marks<0 ||marks>100 || (typeof marks!="number")){
        console.log(`Invalid marks : ${marks} , Please provide the valid Marks`);
    }
    else{
    if(marks>=90){
        console.log(`Funtastic marks: ${marks}, your grade is A+`);
    }else{
        if(marks>=75 && marks<=90){
        console.log(`Excellent marks: ${marks}, your grade is A`);
        }
        else{
            if(marks>=50 && marks<=75){
                console.log(`Good marks: ${marks}, your grade is B`);
                }
                else{
                    if(marks>=35 && marks<=50){
                        console.log(` Marks is : ${marks}, your grade is C,Need improvement`);
                        }
        

                        }

                }
            
        }
    }
    
}
gradeCalculation(98);
gradeCalculation(80);
gradeCalculation(90);
gradeCalculation(0);
gradeCalculation(150);
gradeCalculation(-7);
gradeCalculation(35);
gradeCalculation(29);
gradeCalculation(64);
gradeCalculation(49);
gradeCalculation("91");
gradeCalculation("Eighty");
gradeCalculation(NaN);
gradeCalculation(null);