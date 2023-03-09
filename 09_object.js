// nikhil patil
//objet literals
let firstName = "Nikhil";
let lastName = "Patil";
let isWorking = true;
let age = 22;
let collegeName = "SUK";
let id = 12345;

let student = {
   firstName: "Nikhil",
   lastName: "Patil" ,
   isWorking:true,
   age:22,
   collegeName:"sayali"
};
console.log(student);
console.log(typeof student);
//access variable value
console.log(student.firstName);
console.log(student["firstName"]);

//update property
student.collegeName = "suk ";

//add new property city ="Mumbai"
student.city = "Mumbai";
console.table(student);

//delete property
delete student.isWorking;

//create empty object
let teacher = {};

//teacher.name = "Sayali";