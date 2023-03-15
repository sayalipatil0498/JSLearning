const arrayNums = [20, 3, 4, 56, 90, 400, 49]
console.log(arrayNums);
console.log("--------------shallow cloning---------------");
const newArray = arrayNums;
console.log( newArray);
console.log("------------updated array---------------------");
arrayNums.push(55, 66);
console.log(`Updated array :${arrayNums}, cloned Array:${newArray}`);
console.log("----------------------Deep Clonning------------");
const cloneArray =[...arrayNums];
console.log(cloneArray);
console.log("---------------------updated array--------------------");
arrayNums.push(10,25);
console.log(`updated array is:${arrayNums}`);
const array1 =[... arrayNums];
console.log(`cloned array :${array1}`);

console.log("------------New Array created----------------------");
arrayEven =[2,30,14,8];
console.log(arrayEven);
console.log("--------------Merged Array----------------");
{
    const mergeArray = [...arrayNums , ...arrayEven]
    console.log(mergeArray);
};
console.log("-----------------employee_info object created------------");
const employee_info = {
    emp_id: 27,
    emp_name: "John Doe",
    salary: {
        july_month: "40,0000INR",
        aug_month: "50,0000INR",
        jun_month: "65,0000INR"
    }
}
    console.log(employee_info);
    console.log("---------------Employee Details-------------------");
    const emp_Details = {
      address: {
        locality:{
            colony:"OM Vridavan Society,Maharashtra",
            street:"Konch Pokli,431202",
        },
         city: "Mumbai",
         state: "Maharashtra",
         country: "India"
        },
        mobileNumbers : ["+91 8600 3456 88", "1800-4567 32", "+91-9096 5678 77"]
    
      }
      //console.log(emp_Details);
      console.log('Address:',emp_Details.address);
      console.log('Mobile Number:',emp_Details.mobileNumbers);

      console.log("--------------Deep Clonning---------------");
      const newSalary = JSON.parse(JSON.stringify(employee_info));
      newSalary.salary.july_month = "80k";
      console.log(`old salary:${employee_info.salary.july_month}`);
      console.log(`new salary:${newSalary.salary.july_month}`);

      const newCountry = JSON.parse(JSON.stringify(emp_Details));
      newCountry.address.country = "United Kingdom";
      console.log(`old country:${emp_Details.address.country}`);
      console.log(`new country:${newCountry.address.country}`);
      




