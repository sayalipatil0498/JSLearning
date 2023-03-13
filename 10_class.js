class Bank{
    bankName
    location
    account
    ifsc
    intrestRate
    constructor(bankName, location, account, ifsc, intrestRate){
        this.bankName= bankName;
        this.location = location;
        this.account= account;
        this.ifsc = ifsc;
        this.intrestRate = intrestRate;
    }
    showDetails(){
        console.log(`Bank Details: ${this.bankName},${this.location},${this.account},${this.ifsc},${this.intrestRate}`);
    }

}
const sbiBank = new Bank("SBI Bank","Karad", "1000200300","SBIN0004545", 10.78);
sbiBank.showDetails();

class Person {
    constructor(fullName,city){
        this.fullName=fullName;
        this.city=city;
    }
}
const personDhoni = new Person("MS dhoni","Ranchi");
const personVirat= new Person("virat kohli","Dehli");

console.log(Person instanceof personDhoni);
