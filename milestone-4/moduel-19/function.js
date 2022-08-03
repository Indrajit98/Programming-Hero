// function indrajit(){
//     for(var i=0 ; i<=10; i++){
//         console.log(i + " my name is indrajit chandra chanda")

//     }

// }
// indrajit()

// function add(num1, num2) {
//     // var num1 = 10;
//     // var num2 = 20;
//     res = num1 + num2;
//     console.log(res)
// }
// add(50,20)

////////////////////////////////// Object

// var mobile = {
//     Name: "Samsung",
//     price: 15000,
//     storage: 64,
// }
// var result = mobile['price']
// var result2 = mobile.price
// console.log(result2)
// console.log(result)
// console.log(mobile.price)
// var arr = Object.keys(mobile)
// console.log(arr)
// var arr3 = Object.values(mobile)
// console.log(arr3)

//////////////////////////////////////////////////////////

var friendsAge = {
    indrajit:24,
    joydip:25,
    nayeem:23,
    mohon:24,
}
var propertyName = Object.keys(friendsAge);
console.log(propertyName);
console.log(friendsAge)
friendsAge.joydip = 30;
console.log(friendsAge)


////////////////////////////////////////////////

// function foo(){
//     console.log('foo')
//     function bar(){
//         console.log('bar')
//     }
//     bar()
// }
// foo()

/////////////////////////////////////////

// function make_avg(num1,num2,num3){
//     var total = num1 + num2 + num3;
//     var average = total /3;
//     return average;
// }
// var result = make_avg(35,45,30);
// result = result.toFixed(2)
// console.log(result)

//////////////////////////

// function odd_even(number){

//     var number1 = number % 2; 

//     if(number1 == 0){
//         return "evenNumber";
//     }
//     else{
//         return "oddNumber";
//     }
// }
// var result = odd_even(15)
// console.log(result)

var smartphone = { brand: "iPhone", model: "13" };
console.log(smartphone.brand)

function movie(){
    return "Din-The day";
    return "Poran";
    return "Hawa";
  }
  console.log(movie());