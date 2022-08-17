// let arr= ('AAAABBBCCDAABBB');
// function uniqueInOrder(iterable){
//     const result = []
//     for(let i=0; i<iterable.length; i++){
//         if(iterable [i] !== iterable[i+1]){
//             result.push(iterable[i])
//         }
//     }
//     return result;
// }
// const result2 = uniqueInOrder(arr)
// console.log(result2)

// let arr= ('AAAABBBCCDAABBB');
// function uniqueInOrder(iterable){
//     return [...iterable].filter((a,i) => a !== iterable[i-1])
   
// }
// const result2 = uniqueInOrder(arr)
// console.log(result2)

///////////////////////////////////////////////////////////

// let arr=([1,2,0,1,0,1,0,3,0,1])
// let arr2 = []
//     let arr3 = [];

// for (let i=0; i<arr.length; i++){
//     if(arr[i] === 0){
//         arr2.push(arr[i])
//     }
//     else{
//         arr3.push(arr[i])
       
//     }
   
//     }
//     console.log(arr2)
//     console.log(arr3)
//     console.log(arr3.concat(arr2))
/////////////////////////////////////////////////////

function moveZeros(arr){
    const zero= [];
    const other= [];
    for(let i=0; i<arr.length; i++){
        if(arr[i] === 0){
            zero.push(arr[i])
        }
        else{
            other.push(arr[i])
        }
    }
    return other.concat(zero);
}
let arr2=([false,1,0,1,2,0,1,3,"a"])

const rr= moveZeros(arr2)
console.log(rr)
