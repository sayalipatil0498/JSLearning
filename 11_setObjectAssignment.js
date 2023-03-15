class Bank {
    constructor(bankName, location, accountNo, ifsc, interestRate){
        this.bankName = bankName;
        this.location = location;
        this.accountNo = accountNo;
        this.ifsc = ifsc;
        this.interestRate = interestRate;
    }

}
 let sbiBank = new Bank ("SBI Bank", "Karad", 609988554422,"SBI112233",10.22);
 console.log(sbiBank);
 let axisBank = new Bank("AXIS Bank", "Pune", 556644332211, "AXIS223355",11.20);
 console.log(axisBank);
 let icicBank = new Bank("ICIC Bank", "Kothrud", 556644332299, "ICIC223355",11.99);
 console.log(icicBank);
 let hdfcBank = new Bank("HDFC Bank", "Wakad", 664433221155, "HDFC223355",13.20);
 console.log(hdfcBank);
 let kotakBank = new Bank("KOTAK Bank", "Satara", 556644339991, "KOTAK223355",16.20);
 console.log(kotakBank);
 let punjabBank = new Bank("PUNJAB Bank", "Sangli", 556620332211, "PUNJAB223355",19.20);
 console.log(punjabBank);

 console.log("-----------------------create set of object element-----------------");
 const bankSet = new Set();
 bankSet.add(sbiBank)
 bankSet.add(axisBank)
 bankSet.add(hdfcBank)
 bankSet.add(kotakBank)
 bankSet.add(icicBank)
 bankSet.add(punjabBank)
 console.log(bankSet);

console.log("-------------------------Traverse set of element------------------------");
 for(const Bank of bankSet){
    console.log(`Bank Name:${Bank.bankName}, Location:${Bank.location}`);
 }