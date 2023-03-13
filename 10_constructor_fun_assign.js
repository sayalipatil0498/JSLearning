function Bank(bankName, location, ifscCode, branchCode){
    this.bankName = bankName;
    this.location = location;
    this.ifscCode = ifscCode;
    this.branchCode = branchCode;
    this.show = function(){
        console.log(`Bank Details is: ${this.bankName}, ${this.location}, ${this.ifscCode}, ${this.branchCode}`);

    }
}
const sbiBank = new Bank("SBI Bank", "Karad", "SBI66778899",415110);
sbiBank.show();
const axisBank = new Bank("Axis Bank", "Karve Naka", "AXIS99887766",415105);
axisBank.show();
const yesBank = new Bank("YES Bank", "Karve","YES44556677",413121);
yesBank.show();
const mahBank = new Bank("MAH Bank","Pune", "MAHA22334455",212131);
mahBank.show();

console.log("-----------using prototype---------------");
Bank.prototype.openTime = "9 AM IST";
Bank.prototype.closeTime = "6 PM IST";
console.log("SBI Bank => Open Time", sbiBank.openTime,"& Close Time:",sbiBank.closeTime);
console.log("Bank name is:",axisBank.bankName , "Closing Time:", axisBank.closeTime);
console.log("Bank name is:",yesBank.bankName , "Branch Code:",yesBank.branchCode , "Opening Time:" , yesBank.closeTime);