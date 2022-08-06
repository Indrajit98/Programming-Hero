const lyrics ='o bondhu kala paki tumi jeno ki'
// const number =  52;
// const result= typeof(lyrics)
// const resultNumber= typeof(number)
// console.log(result)
// console.log(resultNumber)
const searchString = "KaLa Paki"
const search = lyrics.toLocaleLowerCase().includes(searchString.toLowerCase());
console.log(search)
if(lyrics.indexOf('kala') !== -1){
    console.log('exists inside the  string')
}
else{
    console.log('cannot find it')
}