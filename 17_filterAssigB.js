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
let arrayFilter;
 arrayFilter = arrayEmployees.filter((element)=> {
    if(element.emp_company=="TCS"){
 console.log(`Company Name:${element.emp_company},Employee Name:${element.emp_name}`);
 }
});

 console.log("------------------Find average salary-------------");
arrayFilter= arrayEmployees.filter((element)=> {
    if(element.emp_company=="Wipro"){
    console.log(`company name:${element.emp_company}`);
}
});
 