let n1 = 100;
let n2 = n1;//deep clonning
console.log(n2);
n1=200;
console.log(n2);

let s1 = "Hey JS";
let s2 = s1; //Deep clone

let b1 = true;
let b2 =b1; // Deep clone

const person ={
    fullName :"MS Dhoni",
    age : 38
}

const player = person ; // shallow clone
player.fullName = "Captain cool Dhoni";
console.log(player);
console.log(person);

console.log("deep clone using spread operator");
const newPlayer ={...person}; //deep clone
console.log(newPlayer);
newPlayer.age = 42;
console.log(`newPlayer ==> ${newPlayer.fullName},${newPlayer.age}`);
console.log(`Person ==> ${person.fullName},${person.age}`);

console.log("deep clone using spread String.json() ");
const bank ={
    bankName: "SBI Bank",
    accountNo:343323232,
    bankAddress:{
        city: "Banglore",
        Pin:556677
    }
}
const newBank = JSON.parse(JSON.stringify(bank));
bankAddress.Pin = 999999;
console.log(`bank==>${bank.bankAddress.Pin}`);
console.log( `newBank==>${newBank.bankAddress.Pin}`)


