function monthOfYear(monthNumber){
    switch(monthNumber){
        case 1:
           console.log( monthName = 'First month of the year is: January');
            break;
        case 2:
            console.log(monthName = 'Second month of the year is: Febuary');
            break;
        case 3:
            console.log(monthName = 'Third month of the year is: March');
        break;
        case 4:
            console.log(monthName = 'Fourth month of the year is: April');
            break;
        case 5:
            console.log(monthName = 'Fifth  month of the year is: May');
            break;
        case 6:
            console.log(monthName = 'Six month of the year is: June');
            break;
        case 7:
            console.log(monthName = 'Seven month of the year is: July');
            break;
        case 8:
            console.log(monthName = 'Eight month of the year is: August');
            break;
        case 9:
            console.log(monthName = 'Nine month of the year is: September');
            break;
        case 10:
            console.log(monthName = 'Ten month of the year is: October');
            break;
        case 11:
            console.log(monthName = 'Eleven month of the year is: November');
            break;
        case 12:
            console.log(monthName = 'Twelve month of the year is: December');   
            break;
        default:
            console.log(monthName = 'Invalid Month Number is:',monthNumber);
            
    }


    }

monthOfYear(2);
monthOfYear(5);
monthOfYear(12);
monthOfYear(15);
monthOfYear(100);
monthOfYear(-7);
monthOfYear(0);