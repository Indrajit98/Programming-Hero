document.getElementById('btn-add-name').addEventListener('click', function(){
    const nameField = document.getElementById('name-field');
    const nameValue = nameField.value;
    console.log(nameValue)
    localStorage.setItem('name', nameValue)
    
})
document.getElementById('btn-remove-name').addEventListener('click', function(){
   
    localStorage.removeItem('name')
    
})

document.getElementById('btn-add-age').addEventListener('click', function(){
    const ageField = document.getElementById('age-field');
    const ageValue = ageField.value;
    console.log(ageValue)
    localStorage.setItem('age', ageValue)
})
document.getElementById('btn-remove-age').addEventListener('click', function(){
   
    localStorage.removeItem('age')
    
})
document.getElementById('btn-all-clear').addEventListener('click', function(){
   
    localStorage.clear()
    
})
