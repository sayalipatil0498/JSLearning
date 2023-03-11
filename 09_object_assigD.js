const professor = {
    Name : "Sayali",
    lastName : "Patil",
    collegeId : "123",
    phoneNumber : 8080291098,
    age : 23,
    degrees : {
        graduation : "Bsc ",
        masterDegree : "MSc ",
    },
     certificates: ["Hacker Rankparticipation","Certificate in IFE course","Certificate in Adv Programming"],
     totaleDegrees:function(){                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             
      
      return ` teacher degrees are: Graduation in "${this.degrees.graduation }" & Master degree in "${this.degrees.masterDegree}"`
     }
    }
    
     
    
         console.log('-------------------Property added-----------------');                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        
         console.log(professor);     
         console.log('-------------------nested object degrees-----------------');                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        
         console.log(professor.degrees);   
         console.log('------------------- added array certificates-----------------');                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        
         console.log(professor.certificates);   
         console.log('-------------------function as a value return as string-----------------');                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        
         let result = professor.totaleDegrees();
         console.log(result);        
         console.log('-------------------new property-----------------');         
         professor.totalExperience = "14 years";  
         console.log(`professor total experience is: ${professor.totalExperience}`);
         console.log('-------------------modify existing property-----------------');      
         console.log(`professor ID is ${professor.collegeId}`)  ;
         professor.collegeId = "678" ;
         console.log(`professor ID is ${professor.collegeId}`);
         console.log('-------------------add new certificate-----------------');  
        professor.certificates.push("oracle certificate")
        console.log(professor.certificates);
        console.log('-------------------last element of array-----------------');  
         console.log(`last element of an  array is :${professor.certificates[professor.certificates.length-1]}`);