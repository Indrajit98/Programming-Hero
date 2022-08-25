////////////////// 1

/*const arr = [1,3,5,7,9]
const oddArr = arr.map(arrNumber => arrNumber +1)
console.table(oddArr)
*/

///////////////////////// 2

/*const arr = [ 33,50,79,78,90,101,30]
const arrFilter = arr.filter( number => number % 10 ===0)
console.table(arrFilter)
*/

///////////////////////// 3
/*
const arr = [ 33,50,79,78,90,101,30]
const arrFilter = arr.find( number => number % 10 ===0)
console.table(arrFilter)
*/

////////////////////////// 4
/*
const arr = [1,9,17,22,1]
const arrReduce = arr.reduce((previousNumber, number) => previousNumber + number)
console.log(arrReduce)
*/
/*
const arr = [1,9,17,22,1]
sum = 0 
for (number of arr){
    sum += number;   
    // console.log(sum)
   
}
console.log(sum)
*/

//////////////////// 5
/*
const people = [
    {name: 'meena', age: 20},
    {name: 'Rina', age: 15},
    {name: 'Suchorita', age: 22},
]

const arrAge = people.map(p => p.age)
console.table(arrAge)
const totalAge = arrAge.reduce((pre,age) =>pre + age )
console.log(totalAge)

*/
/////////////////////////// 6
/*
let data = {
    location: [
        {
            latitude: '34.5 , 37.8',
            longitude: '98.77 , 58.7',
            city: 'Hyderabad',
            country: 'India',
        }
    ]
}
const cityName = data.location[0].city;
console.log(cityName)

*/
////////////////////////////////// 7

/*
const user = {
    "id": 1,
    "name": "Leanne Graham",
    "username": "Bret",
    "email": "Sincere@april.biz",
    "address": {
      "street": "Kulas Light",
      "suite": "Apt. 556",
      "city": "Gwenborough",
      "zipcode": "92998-3874",
      "geo": {
        "lat": "-37.3159",
        "lng": "81.1496"
      }
    },
    "phone": "1-770-736-8031 x56442",
    "website": "hildegard.org",
    "company": {
      "name": "Romaguera-Crona",
      "catchPhrase": "Multi-layered client-server neural-net",
      "bs": "harness real-time e-markets"
    }
  }
  const email = user.email;
  console.log(email)
  const address = user.address.street;
  console.log(address)
  const city = user.address.city;
  console.log(city)
  const lat = user.address.geo.lat;
  console.log(lat)
  const companyName = user.company.name
  console.log(companyName)
  
  */
  