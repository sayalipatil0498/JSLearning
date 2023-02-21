console.log("------------------first---------------------");
function favoritePlayer(){
    console.log("My favorite player is: Dhoni");
    
}
favoritePlayer ();

function favoriteMovie(){
    console.log("My favorite movie is: Farzand");
}
favoriteMovie();

console.log("------------------second-----------------------");

function personalDetails(firstName, lastName, collegeName){
    console.log("My first Name is: ", firstName);
    console.log("My last Name is:", lastName);
    console.log("My college Name is:", collegeName);
}
personalDetails("Sayali", "Patil", "Shivaji University Kolhapur");

console.log("-----------------third------------------------");
function swapValuesDude(name1, name2 ,val1, val2){
    console.log("Before Swap:" , name1, name2,);
    var temp=name1;
    name1= name2;
    name2= temp;
    console.log("After Swap:",name1, name2);
}

swapValuesDude("Virat", "Anushka");
swapValuesDude(1000, 2000);

console.log("-------------------fourth------------------------");
function addThreeValues(n1,n2,n3){
var sum;
sum= n1 + n2 + n3 ;
return sum;
}
var sumResult = addThreeValues(10, 23,600, 40);
console.log(sumResult);

var sumResult = addThreeValues("Hello" , "Good" , "Morning");
console.log(sumResult);