function deliciousCake(Jim, Dela, Chinku){
    if(Jim > Dela && Jim > Chinku){
        return "Jim will get the cake";
    }
    else if( Dela > Jim && Dela > Chinku){
        return "Dela will get the cake";
    }
    return "Chinku will get the cake";
}
const result = deliciousCake(84,99,77);
console.log(result);
const result2 = deliciousCake(69, 97, 99);
console.log(result2)

///////////////////////////
const result3=Math.max(84,99,77)
console.log(result3)

let sum=0; 
for( let i = 0; i<=3;i++){ 
sum = sum + i; 
}
console.log(sum)

