function paperRequirements (firstBookNumber, secondBookNumber, thirdBookNumber){

    const firstBook = firstBookNumber * 100;
    const secondBook = secondBookNumber * 200;
    const thirdBook = thirdBookNumber * 300;
    const totalPage = firstBook + secondBook + thirdBook;

    return totalPage;

}
const result = paperRequirements(2,4,1)
console.log(result);