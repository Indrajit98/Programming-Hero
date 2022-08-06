function leapYear(year){
    const remainder = year % 4;
    if(remainder === 0){
        return true;
    }
    return false;

}
const result = leapYear(2016);
console.log( "Year is leap year " + result)