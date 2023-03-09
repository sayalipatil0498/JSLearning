//wap to print numbers 0 to 10
let index = 0; // initialisation
while (index<=10) {   //condition
    console.log(index);
    index++; //update expression
}

const arrayOfNumbers = [10 , 20, 25, 15, 40, 45, 60,40, 30,22,26];
var index1 = 0;
let sum = 0;
while (index<arrayOfNumbers.length){
    const element = arrayOfNumbers[index];
    if(element%2==0){
        console.log(element);
        sum = sum + element;
    }
index++;
}