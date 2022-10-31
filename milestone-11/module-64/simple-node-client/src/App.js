
import './App.css';
import { useEffect, useState } from 'react';

function App() {

  const [users,setUsers] = useState([])

  console.log(users)
  useEffect( () =>{
    fetch('http://localhost:5000/users')
    .then(res => res.json())
    .then(data=> setUsers(data))
  },[])

  const handleAddUser = e=>{
    e.preventDefault();
    const form= e.target;
    const name = form.name.value;
    const email = form.email.value;
    const user={name,email}

    // console.log(user);
    fetch('http://localhost:5000/users', {
      method: 'POST',
      headers:{
        'content-type': 'application/json'
      },
      body: JSON.stringify(user)

    })
    .then(res => res.json())
    .then(data => {
      const newUser = [...users,data];
      setUsers(newUser)
    })
    .catch(err => console.error(err))

    form.reset();
  }



  return (
    <div className="App">
  
      <form onSubmit={handleAddUser}>
        <input type="text" name="name" placeholder='name' /> <br />
        <input type="email" name="email" placeholder='email' /> <br />
        <button type='submit'>Add user</button>
       
        
      </form>



      <h3>Users: {users.length}</h3>
      {
        users.map(p=> <p key={p._id}> {p.name} {p.email}</p>)
      }
      
      
      
    </div>
  );
}

export default App;
