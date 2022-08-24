/////////////////////// 1

// const multipleMath = (x, y, z) => {
//     return x * y * z;
// }
// const result = multipleMath(5, 4, 3)
// console.log(result)

/////////////////2

// const first = 'I am a developer.'
// const second = 'I love to code.'
// const third = 'I to a biryani'
// const print = `${first} ${second} ${third}`
// console.log(print) 

/////////////////////3

const defaultName = (firstName, lastName = 'Chandra') => {
    return `${firstName} ${lastName}`
}
const result = defaultName('indrajit')
console.log(result)
