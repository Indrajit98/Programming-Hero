function user(){
    const url = 'https://jsonplaceholder.typicode.com/users'
    fetch(url)
    .then(res => res.json())
    .then(data => {
        for(element of data){
            console.log(element)
            const {name,uername,email} = element
            const ul = document.getElementById('name-list');
           const li = document.createElement('li')
            li.innerHTML = `
            ${name}   ${uername}  ${email}
            `;
            ul.appendChild(li)
            
        }
    });
    
}
const uerName = document.getElementById('btn-user-name').addEventListener('click', () => {
    user()
})
