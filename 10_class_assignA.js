console.log("-----------------step1-------------------");
class Vehicle{
    vehicleName
    vehicleColor
    vehicleModel
    vehiclePrice
    VehicleType
    constructor(vehicleName , vehicleColor , vehicleModel , vehiclePrice , VehicleType){
        this.vehicleName = vehicleName;
        this.vehicleColor = vehicleColor;
        this.vehicleModel = vehicleModel;
        this.vehiclePrice = vehiclePrice;
        this.VehicleType = VehicleType;
         }
}
const bike1 = new Vehicle("Acess125" , "Black", "2020", "125000","Two Wheeler");
console.log(bike1);
const bike2 = new Vehicle("Audi" , "White", "2023", "1500000","Four Wheeler");
console.log(bike2);
const bike3 = new Vehicle("Mercedes" , "Navy Blue", "2021", "6000000","Four Wheeler");
console.log(bike3);
const bike4 = new Vehicle("Activa" , "Black", "2010", "100000","Two Wheeler");
console.log(bike4);
const bike5 = new Vehicle("G-Wagon" , "Silver", "2005", "2.25Cr","Four Wheeler");
console.log(bike5);
console.log("==============Array traverse=================");
const arrayOfVehicle = [bike1, bike2, bike3, bike4, bike5];
for(const element of arrayOfVehicle){
    console.log(`Details of vehicle : ${element.vehicleName},${element.vehicleColor},${element.vehicleModel},${element.vehiclePrice},${element.VehicleType}`);


}

console.log("--------------------step2-----------------------");
class College{
    constructor(colgName, location, university, stream){
    this.colgName = colgName;
    this.location = location;
    this.university = university;
    this.stream = stream;

}

}
const college = new College("YCCSK", "Karad", "SUKolhapur", "Science");
console.log(college);
const college1 = new College("SGM", "Saidapur", "SUKolhapur", "Commerce");
console.log(college1);
const college2 = new College("GPCK", "Vidyanagar", "SUKolhapur", "Diploma");
console.log(college2);
const college3 = new College("Symbosis", "Pune", "Pune University", "All");
console.log(college3);

console.log("------------------step3-----------------");
function traverseObject(traverse){
    for (const key in traverse) {
        if(Object.hasOwnProperty.call(traverse,key)) {
            const element = traverse[key];
            console.log(`${key}:${element}`);
        }
        
        
    }

}
traverseObject(college);
console.log(`---------------------------------------------`);
traverseObject(college1)
console.log(`---------------------------------------------`);
traverseObject(college2)
console.log(`---------------------------------------------`);
traverseObject(college3)
//console.log(`---------------------------------------------`);

console.log("--------------------step4---------------------");
function isPrime(num){
    if(num <= 1) 
    return false;
    

    for (let index = 2; index < num; index++) {
         if(num % index == 0){
            return `Given number is not prime number:${num}`;
            
         }
         return `Given number is prime number:${num}`;
        }
}
console.log(isPrime(11));
//console.log(isPrime(2));

