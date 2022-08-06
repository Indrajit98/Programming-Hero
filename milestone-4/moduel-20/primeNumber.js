function primeNumber(number){
    if(number ==1){
        return "not prime number"
    }
    for(let i=2; i<number; i++){
        if(number % i ===0){
            return "not prime Number"
        }
    }
    return "Prime Number"
}
const result = primeNumber(11)
console.log(result)