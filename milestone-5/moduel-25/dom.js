///////////////////////1
function makeRed(){
    document.body.style.backgroundColor='red'

}
///////////////2
const greenButton =document.getElementById('green')
greenButton.onclick= makeGreen
function makeGreen(){
    document.body.style.backgroundColor='green'

}
///////////3
const makePurple = document.getElementById('purple');
makePurple.onclick = function purple(){
    document.body.style.backgroundColor = "purple"
}

/////////////////////4
const makePink = document.getElementById('pink');
makePink.addEventListener('click',pinkButton);
function pinkButton(){
    document.body.style.backgroundColor = 'pink';
}
///////////////////5
document.getElementById('tomato').addEventListener('click',function(){
    document.body.style.backgroundColor = 'tomato';

})

////////////////////////////////////
document.getElementById('update-button').addEventListener('click',function(){
    const inputField = document.getElementById('input-text')
    const defaultText = document.getElementById('default-text');
   const  inputText= inputField.value;
   defaultText.innerHTML = inputText
   inputField.value = ' '  

})
