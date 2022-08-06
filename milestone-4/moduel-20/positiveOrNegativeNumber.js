function positiveOrNegativeNumber(number){
    if(number < 0 ){
        return "negative";
    }
    return "positive";
}
const result = positiveOrNegativeNumber(-2)
console.log(result)