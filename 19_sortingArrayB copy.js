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
const emp_radha=new Employee(33,"Radha","HR",78000,"Wipro");
const emp_rishi=new Employee(55,"Rishi","Finance",65000,"TCS");
const emp_sonali=new Employee(66,"Sonali","Finance",90000,"Amazon");
const emp_monika=new Employee(77,"Monika","IT",65000,"Wipro");
const emp_viny=new Employee(88,"Viny","IT",88000,"TCS");
const emp_mahi=new Employee(99,"Mah","HR",65000,"Infy");


arrayEmployees =[emp_anil,emp_radha,emp_rishi,emp_sonali,emp_monika,emp_viny,emp_mahi];
console.log("--------------ascending order--------------------");
const id =arrayEmployees.sort((a,b)=>{
return a.emp_id> b.emp_id;
})
id.forEach(element => {
    console.log(`Employee id:${element.emp_id},Name:${element.emp_name},Department:${element.emp_dept}`);

});
console.log("-------------descending order-----------------");
let salary = arrayEmployees.sort((a,b)=>{
    return a.emp_salary<b.emp_salary?1:-1;
});
salary.forEach(element=>{
    console.log(`Employee Name:${element.emp_name} , Salary:${element.emp_salary} , company:${element.emp_company}`)
});




