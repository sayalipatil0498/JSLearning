class Employee {
    constructor(emp_id,emp_name,emp_dept,emp_salary,emp_company){
       this. emp_id = emp_id;
       this.emp_name=emp_name;
       this.emp_dept=emp_dept;
       this.emp_salary=emp_salary;
       this.emp_company=emp_company;
    }

}
const emp_anil=new Employee(22,"Anil","IT",50000,"TCS");
//console.log(emp_anil);
const emp_radha=new Employee(22,"Radha","HR",78000,"Wipro");
//console.log(emp_radha);
const emp_rishi=new Employee(22,"Rishi","Finance",65000,"TCS");
//console.log(emp_rishi);
const emp_sonali=new Employee(22,"Sonali","Finance",90000,"Infy");
//console.log(emp_sonali);
const emp_monika=new Employee(22,"Monika","IT",65000,"Wipro");
//console.log(emp_monika);
const emp_viny=new Employee(22,"Viny","IT",88000,"TCS");
//console.log(emp_viny);
const emp_mahi=new Employee(22,"Mah","HR",65000,"Infy");
//console.log(emp_mahi);

arrayEmployees =[emp_anil,emp_radha,emp_rishi,emp_sonali,emp_monika,emp_viny,emp_mahi];


console.log("--------------------step1-------------------------");
arrayEmployees.forEach((element) => {
    if(element.emp_company=="TCS"){
        console.log(`Employee Name:${element.emp_name},Employee Company:${element.emp_company}`);
    }
    
});

console.log("-------------------step2--------------------------");
arrayEmployees.forEach((element) =>{
    if(element.emp_salary>=50000){
    console.log(`Employee salary:${element.emp_salary},Employee Name:${element.emp_name},Employee company:${element.emp_company},Employee department:${element.emp_dept}`);
    }
});
console.log("-------------------step3--------------------------");
let totalSalary =0;
arrayEmployees.forEach(element =>{
    const salary= element.emp_salary;
    totalSalary = totalSalary + element.emp_salary;
});
console.log(`Total sum of all employees salary:${totalSalary}`);

console.log("---------------step4---------------------------");
let numberofEmp = arrayEmployees.length;
arrayEmployees.forEach(element =>{
    average = totalSalary/numberofEmp;
    console.log(`Total salary average is:${average}`);
});
console.log("--------------step5---------------------------");
arrayEmployees.forEach(element =>{
    if(element.emp_salary>=75000){
        if(element.emp_dept=="IT" || element.emp_dept =="HR"){
            console.log(`Employee salary:${element.emp_salary},Employee Name:${element.emp_name},Employee company:${element.emp_company},Employee Department:${element.emp_dept}`);
        }
    }
});




