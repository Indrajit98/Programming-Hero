function largestNumber(arr){
    let number=0;
    for(let i=0;i<arr.length; i++){
        let element = arr[i];
        if(number < element){
            number=element
        }

    }
    return number;
   
}
const arrNumber = [8,9,42,125,6,1,55,420]
const result = largestNumber(arrNumber);
console.log(result)