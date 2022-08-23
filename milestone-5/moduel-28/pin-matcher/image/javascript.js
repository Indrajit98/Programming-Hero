// let count = 0;
// console.log(parseInt("count"+ 1));

//  let result=Math.pow(4, 0.5)+"spiderman"+"987"+Math.sqrt(9)
// console.log(result)

function generatePin(){ 
    return Math.floor(Math.random()*90000) + 10000; 
}
const result = generatePin()
console.log(result)

// const product = 5; const price = "7"; 
// const subTotal = product * price; 
// const tax = subTotal/10; 
// const total = subTotal + tax; 
// console.log(total)
const category="pen"; 
const performer = category+"-teller";
console.log(performer)