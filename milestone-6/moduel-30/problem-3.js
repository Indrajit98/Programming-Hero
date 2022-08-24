// const array = [5,8,4,9,15,25,36,40]
// let result = 0;
// for (square of array){
//     const squareNumber = Math.pow(square,2)
//      result = result + squareNumber;
// //    console.log(squareNumber)  
// }
// console.log(result)

const average = (array) => {
    let sum = 0;
    let averageNumber =0;
    for (arrayNumber of array){
        const squareNumber = Math.pow(arrayNumber,2)
        sum += squareNumber;
        averageNumber = sum / array.length      
     }
    return averageNumber       
}
const result = average([2,3,5,6,45])
 console.log(result)