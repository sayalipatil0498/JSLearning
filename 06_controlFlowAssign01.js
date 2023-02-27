console.log("-------------step1-----------");
function evenOddNumber(num){
    if(num%2==0){
    return `The ${num} number is Even`;
    }
    if(num%2==1){
        return `The ${num} number is Odd`;

    }

    }
    var result = evenOddNumber(45);
    console.log(result);
    var result = evenOddNumber(70);
    console.log(result);
    var result = evenOddNumber(67);
    console.log(result);
    var result = evenOddNumber(98);
    console.log(result);

    console.log("--------------step2-------------");
    function personForVote(age){
        if(age>=18){
           return `The age ${age} you are eligible for voting`;
        
        }
        if(age<=18)
        {
            return `The age ${age} you are not eligible for voting`;
        }
    }
    
    var result = personForVote(18);
    console.log(result);
    var result = personForVote(20);
    console.log(result);
    var result =personForVote(17);
    console.log(result);
    var result = personForVote(40);
    console.log(result);

    console.log("----------step3------------");
    function stringCount(str1){
        if(str1.length>=10){
            return`Yes ${str1} contains more than 10 characters`;
        }
        if(str1.length<=10){
            return `String ${str1} not contain more than 10 characters`;
        }
    }
    var string = stringCount("JavaScript-ES6");
    console.log(string);

    console.log("-----------step4------------");
    function stringJava(word){
        if(word.startsWith("Java")){
            return `Yes given "${word}" string is start with java`;
        }
        if(word.startsWith("Java")){
            return `Given ${word} is not start with java`;
        }
    }
    var res = stringJava("JavaScript Language");
    console.log(res);
