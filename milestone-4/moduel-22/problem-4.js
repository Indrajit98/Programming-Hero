let friendName = ['nayeem','mohon', 'neowaj','indrajit','dipto'];
let largeName = friendName[0];
function bestFriend (friendName){
    for(let i=0; i<friendName.length; i++){
        let element = friendName[i];
        if(largeName.length < element.length){
           largeName = element;
        }
    }
    return largeName;
}
const result = bestFriend(friendName);
console.log(result);