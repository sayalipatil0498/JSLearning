class Bank{
    constructor(bankName, location, accountNo, ifsc, interestRate){
        this.bankName = bankName;
        this.location = location;
        this.accountNo = accountNo;
        this.ifsc = ifsc;
        this.interestRate = interestRate;
    }

}

let sbiBank = new Bank ("SBI Bank", "Karad", "Sbi4422","SBI112233",10.22);
console.log(sbiBank);
let axisBank = new Bank("AXIS Bank", "Pune", "Axis221", "AXIS223355",11.20);
console.log(axisBank);
let icicBank = new Bank("ICIC Bank", "Kothrud", "ICIC2299", "ICIC223355",11.99);
console.log(icicBank);
let hdfcBank = new Bank("HDFC Bank", "Wakad", "Hdfc1155", "HDFC223355",13.20);
console.log(hdfcBank);
let kotakBank = new Bank("KOTAK Bank", "Satara", "Kotak9991", "KOTAK223355",16.20);
console.log(kotakBank);
let punjabBank = new Bank("PUNJAB Bank", "Sangli", "Punjab5566", "PUNJAB223355",19.20);
console.log(punjabBank);

console.log("------------------creste map----------------------");
const mapOfBank = new Map();
mapOfBank.set("Sbi4422",sbiBank)
mapOfBank.set("Axis221",axisBank)
mapOfBank.set("ICIC2299",hdfcBank)
mapOfBank.set("Hdfc1155",icicBank)
mapOfBank.set("Kotak9991",kotakBank)
mapOfBank.set("Punjab5566",punjabBank)
console.log(mapOfBank);

console.log("-----------------traverse map----------------------------");
 const keyMap = mapOfBank.keys();
 for(const key of keyMap){
const element = mapOfBank.get(key)
console.log("Bank Name:",element.bankName,",Account No:",element.accountNo,", Interest Rate:",element.interestRate);

}
