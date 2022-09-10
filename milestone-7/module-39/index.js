/* let p='Javascript'; 
let q=p; 
p='React'; 
console.log(q); */

/* const isTrue='false'; 
if(!isTrue){
console.log('hello');
} else {
console.log('world'); 
}
 */

/* function sum(p, q) {
    p + q;
   }
   const result = sum(2, 3);
   console.log(result); */

/*   if ("2" === 2) {
   console.log("Inside if");
  } else {
   console.log("Inside else");
  } */

/*    function work(x, y = 4) {
    return x + y;
   }
   console.log(work(32); */

function find_max(nums) {
  let max_num = [] // smaller than all other numbers
  for (let num of nums) {
    if (num > max_num) {
      // (Fill in the missing line here)
      // return num =max_num;
      //  return max_num +=1;
        max_num = num
      //  max_num += num
    }
  }
  return max_num;
}
const arr = [645,5,84,21,5444]
const re = find_max(arr)
console.log(re)
