function oddNumberSum(arr){
    let sum = 0;
    for(let i=0; i<arr.length; i++){
        let element = arr[i];
        if(element % 2 !==0 && element >10 && element <50){
            sum +=element;
        }
    }
    return sum;
}
const arrayNumber =[5,45,60,22,34,72,25]
const result = oddNumberSum(arrayNumber);
console.log(result)