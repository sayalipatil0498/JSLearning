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
 
 const emp_radha=new Employee(22,"Radha","HR",78000,"Wipro");

 const emp_rishi=new Employee(22,"Rishi","Finance",65000,"TCS");
 
 const emp_sonali=new Employee(22,"Sonali","Finance",90000,"Amazon");
 const emp_monika=new Employee(22,"Monika","IT",65000,"Wipro");

 const emp_viny=new Employee(22,"Viny","IT",88000,"TCS");
 const emp_mahi=new Employee(22,"Mah","HR",65000,"Infy");
 
 
 arrayEmployees =[emp_anil,emp_radha,emp_rishi,emp_sonali,emp_monika,emp_viny,emp_mahi];
 const emp_company = arrayEmployees.filter((employee)=> {
    return employee.emp_company=="TCS";
 });
 emp_company.forEach((employee) => {
 console.log(`Company Name:${employee.emp_company},Employee Name:${employee.emp_name}`);
 });


 console.log("------------------Find average salary-------------");
 let average2;
const avrg = arrayEmployees.filter((element)=> {
    return element.emp_company=="Wipro";
});
let reduce= avrg.reduce((element,value)=>{
    return element.emp_salary+value.emp_salary;
})
average2=reduce/avrg.length;
console.log(average2);

console.log(`--------------------------------Step-3-----------------------`);
let average;
const avg = arrayEmployees.filter((element)=>{
    return element.emp_company=="Wipro" || element.emp_company=="Infy";
});
let reduce1 = avg.reduce((element,value)=>{
   return element.emp_salary + value.emp_salary; 
});
 average = reduce1/avg.length;
    console.log(average);

 