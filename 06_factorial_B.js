function factorialWordsCount(str){
    if(str== null || str== undefined || (isNaN(str) && typeof str=="number")){
       console.log(`Given string ${str} is invalid`);
    }else{
        console.log(`Given string is valid :${str}`);
        let words = str.split(" ");
        const totalWords = words.length;
        console.log(totalWords);
        let factorial = 1;
        for (let index = totalWords; index >=1; index--) {
          factorial = index * factorial;
          //console.log(`Factorial of "${str}" is ${factorial}`);
            
        }
       return `Factorial of "${str}" is ${factorial}`;
    }
}
    //console.log(factorialWordsCount("Revision is the mother of sucess"));


var result = factorialWordsCount("Revision is the mother of sucess");
console.log(result);
 var result = factorialWordsCount("We never fail we always learn");
 console.log(result);
var result = factorialWordsCount(null);
console.log(result);
var result = factorialWordsCount(" ");
console.log(result);
var result = factorialWordsCount("Sayali Balaso Patil");
console.log(result);