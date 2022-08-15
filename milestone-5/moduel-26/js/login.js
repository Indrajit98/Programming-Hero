document.getElementById('btn-submit').addEventListener('click',function(){
    // console.log('Indrajit')
    const emailField = document.getElementById('user-email')
    const email = emailField.value;
    //  console.log(email)
    const passwordField = document.getElementById('user-password')
    const password = passwordField.value;
    // console.log(password)

    if(email === 'indrajit@gmail.com' && password === 'indrajit') {
        window.location.href = 'bank.html';

    }
    else(
        alert('wrong password')
    )
})