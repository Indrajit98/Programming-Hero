let arr = [25,6,0,24,15,-62,35,47,56,55];
let arr2 = [];
function positiveArray(arr){
    for (let i = 0; i<arr.length; i++){
        let element = arr[i];
        if(element >=0){
            arr2.push(element);   
        }
        else if(element < 0){
            break;
        }
       
    }
    return arr2;
    
}
const result =  positiveArray(arr);
console.log(result)
