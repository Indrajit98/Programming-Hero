function arrOddSum(number){
    let oddSum = 0;
    let evenSum = 0;
    for(let i=0; i<number.length; i++){
        let element = number[i];
        //sum += element;
        if(element % 2 !== 0){
            oddSum += element;    
        }
        else{
            evenSum += element;
        }
        //console.log(element);
    }
    return {evenSum, oddSum};
} 
const arr = [60,55,80,78,92,40,61,56]
const result = arrOddSum(arr)
console.log("result",result)
