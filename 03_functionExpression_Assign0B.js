
var show = function checkLeapYear(leap_year){
    if(null ||(typeof leap_year !="number" || isNaN(leap_year))){
    console.log(`This is an invalid year : ${leap_year}`);
    }else{

    if(leap_year%4==0 ){
    console.log( `This is  leap year : ${leap_year}`);
    
    }
    else{
    console.log(`This is not a leap year: ${leap_year}`);
    }
}
}
show(2020);
show(1999);
show(1600);
show(2022);
show(1945);
show(1775);
show("Twenty Twenty");
show(undefined);
show(NaN);
show(null);
