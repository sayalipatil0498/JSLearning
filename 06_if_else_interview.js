function tcsInterview(gradScore , hscScore , sscScore , candidateName){
    if(gradScore>=70 || hscScore>=80 || sscScore>=90){
        console.log(`Congrates ${candidateName}, you are eligible for TCS interview`);
                
    }
    else{
        console.log(`Unfortunately ${candidateName}, you are not eligible for TCS interview`)
    }
}
tcsInterview(80, 86 , 90, "Sayali");
tcsInterview(70, 65, 55 , "Shilpa");
tcsInterview(60, 79, 88 , "Komal");