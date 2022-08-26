//1
const indrajit = 5454 ;
let joudip = 545;

//2
const template = ` ${indrajit} ${joudip}`
// console.log(template)

const object = {
    name: 'indrajit',
    age: 24,
}
const templateObject = `${ object.name} ${object.age}`
// console.log(templateObject)

//3.1
const arrow = (a) => a / 5 ;
const result = arrow(65);
// console.log(result)

//3.2
const arr2 = [2,5]
function arrayFunction1(array){
    let sum = 1;
    for ( number of array){
        number += 2
        sum = sum*number;
        
    }
    // console.log(sum)  
}
arrayFunction1(arr2)

//3.2
function array (a,b){
    let aa=a+2;
    let bb = b+2;
    let sum = aa*bb;
    // console.log(sum)
}
array(2,5)

//3.3
const arr3 = [5,6,8];
function arrayFunction2(array2){
    let sum = 1;
    for (number of array2){
        sum = sum * number; 
        
    }
    return sum;
}
const result3 = arrayFunction2(arr3)
// console.log('result ' + result3)

///3.4
const arr4 = [5,7];
const arrow4 = arr4.map(number => number + 2 )   
const result4 = arrow4.reduce((pre , number) => pre * number)
// console.log(result4)
const arr44 = (first,second)=> (first +2 ) * (second + 2)
const result44 = arr44(2,5);
console.log(result44)

///5
const arr5 = [2,4,6,8,1,7,2,5,];
 const result5 = arr5.map(number => number *5)
//  console.log(result5)

//6
const arr6 = [8,94,65,32,1,5,6,4,8,75,4]
const result6 = arr6.filter(number => number % 2 !==0 )
// console.log(result6)

//7
const arr7 = [
    
       { price:5431},
       { price:564},
       { price:500},
       { price:5000},
       { price:5431},
    
      
]
const result7 = arr7.find(number => number.price ===5000)
console.log(result7.price)

// 8
const arr8 ={
    name: 'indrajit',
    lastName:'chandra',
    age:24,
    profession:'student',
}
const {name,age} = arr8
console.log(name,age)

//9
const arr9 = [24,61,54,2,45]
const [, ,three] = arr9
console.log(three)

//10
const arr10 =(a , b , c=7) =>{
    let sum = a + b + c;
    return sum;
}
const result10 = arr10 (5,9);
console.log(result10)

//11
const arr11 = {
    name:{
        firstName:'indrajit',
        lastName:'chandra'
    },
    number:['01760272507','01727042169']
}
console.log(arr11.number[1])
console.log(arr11.name.firstName)