const maximum = (newArr) => {
    const maximumNumber = Math.max(...newArr)
    return maximumNumber
}
const arr1=[1,2,4,5,5454,8,7,9]
const arr2 = [5,8,7,4,5,6,5,2,4,454]
const newArr = [...arr1, ...arr2]
const result = maximum(newArr)
console.log(newArr)
console.log(result)