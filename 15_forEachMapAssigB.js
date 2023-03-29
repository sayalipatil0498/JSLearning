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

const mapCollection = new Map();
mapCollection.set(22,emp_anil);mapCollection.set(33,emp_radha);mapCollection.set(55,emp_rishi);
mapCollection.set(66,emp_sonali);mapCollection.set(77,emp_monika);mapCollection.set(88,emp_viny);mapCollection.set(99,emp_mahi);
mapCollection.forEach((key,value)=> {
    console.log(`${key.emp_id}===>Name:${key.emp_name}, Dept:${key.emp_dept}, Company:${key.emp_company}, Salary:${key.emp_salary}`);
});


