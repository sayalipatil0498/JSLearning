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
console.log(emp_anil);
const emp_radha=new Employee(22,"Radha","HR",60000,"Wipro");
console.log(emp_radha);
const emp_rishi=new Employee(22,"Rishi","Finance",65000,"TCS");
console.log(emp_rishi);
const emp_sonali=new Employee(22,"Sonali","Finance",90000,"Infy");
console.log(emp_sonali);
const emp_monika=new Employee(22,"Monika","IT",65000,"Wipro");
console.log(emp_monika);
const emp_viny=new Employee(22,"Viny","IT",88000,"TCS");
console.log(emp_viny);
const emp_mahi=new Employee(22,"Mah","HR",65000,"Infy");
console.log(emp_mahi);
console.log("--------------------Add all objects in an array----------------");
arrayEmployees =[emp_anil,emp_radha,emp_rishi,emp_sonali,emp_monika,emp_viny,emp_mahi];
 console.log(arrayEmployees);

console.log("----------Those employee work in tcs----------");
    for(const element of arrayEmployees){
        if(element.emp_company=="TCS"){
    
console.log(`employee name:${element.emp_name},employee company:${element.emp_company}`);
        }

    }
    console.log("---------------step2---------------------");
        
    for (const element of arrayEmployees) {
        if(element.emp_dept=="Finance"){
            console.log(`Department Name:${element.emp_dept}, Employee Name:${element.emp_name}`);
        }
        
    }
console.log("----------------step3---------------------------");
for(const element of arrayEmployees){
    if (element.emp_name.startsWith("R")) {
        console.log(`Employee Details = ID ${element.emp_id}, Employee Name:${element.emp_name}, Department Name:${element.emp_dept},salary:${element.emp_salary},Company Name:${element.emp_company}` );
    }
}

console.log("---------------------step4----------------------");
for(const element of arrayEmployees){
    if ( element.emp_salary > 75000){
        console.log(`Employee salary:${element.emp_salary},Employee Name:${element.emp_name},Employee company:${element.emp_compan}`);
    }
}
console.log("------------------step5----------------------");
for(const element of arrayEmployees){
    if(element.emp_salary>=50000 && element.emp_dept=="IT"){
        console.log(`Employee Details = ID ${element.emp_id}, Employee Name:${element.emp_name}, Department Name:${element.emp_dept},salary:${element.emp_salary},Company Name:${element.emp_company}` );
    }
}

console.log("------------------step6--------------------");
for (const element of arrayEmployees) {
    if (element.emp_company=="Infy") {
        console.log(`Employee Details = ID ${element.emp_id}, Employee Name:${element.emp_name}, Department Name:${element.emp_dept},salary:${element.emp_salary},Company Name:${element.emp_company}` ); 
    }
    
}
    




