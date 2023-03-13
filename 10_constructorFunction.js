function Person(fullName, city){
    this.fullName = fullName;
    this.city = city;
    this.show = function(){  //method inherite
        console.log(`${this.fullName},${this.city}`);
    }

}
Person.prototype.country = "India";

const dhoni = new Person("MS DHONI","Ranchi");
dhoni.show(); // calling method
console.log(dhoni.country);
const ashwin = new Person("R Ashwin","Keral");
ashwin.show();
console.log(ashwin.country);
const bumraha= new Person("Bumraha","Mumbai");
bumraha.show();
console.log(bumraha.country);
const date = new Date();
console.log(date);