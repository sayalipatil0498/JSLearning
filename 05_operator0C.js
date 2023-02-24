function tcsInterview(gradScore , hscScore ,sscScore , candidateName){
    var marks = (gradScore>=70 || hscScore>=80 || sscScore>=90)
    ?`Congrats's ${candidateName} you are eligible for Tcs interview`
    : `unfortunately you are not eligible for interview`;

    console.log(marks);
}
tcsInterview(80 , 86 , 90 ,"Nikhil Patil");
tcsInterview(70 , 65 , 55 ,"Sayali Patil");
tcsInterview(60 , 79 , 9 , "Vijay Patil");