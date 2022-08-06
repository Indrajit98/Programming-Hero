function oddEven (number){
    const remainder = number % 2;
    if(remainder === 0){
        return "Number is even "
    }
    else{
        return "Number is odd "
    }
}
const result = oddEven(256);
console.log(result);