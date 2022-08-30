const url = 'https://randomuser.me/api/?results=50'
fetch(url)
.then(res => res.json())
.then (data => console.log(data.results[0].gender))