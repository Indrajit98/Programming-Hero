// import logo from './logo.svg';
import './App.css';

import { getAuth, GithubAuthProvider, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import app from './firebase/firebase.init';
import { useState } from 'react';
const auth = getAuth(app);





function App() {
  const googleProvider = new GoogleAuthProvider();
  const [user , setUser] = useState({})

  const githubProvider = new GithubAuthProvider();

 

  const handleGoogleSingIn = () =>{
    console.log('indrajit');
    signInWithPopup(auth,googleProvider)
    .then (result => {
      const user = result.user;
      console.log(user);
      setUser(user)

    })
    .catch (error => {
      console.error('error: ', error)
    })

  }

  const handleGithubSingIn = () =>{
    signInWithPopup(auth,githubProvider)
    .then (result =>{
      const user = result.user;
      console.log(user)
      setUser(user)
    })
    .catch((error) =>{
      console.error('error: ',error);
    })

  }

  const handleGoogleSingOut = () =>{
    signOut(auth)
    .then(() =>{
      setUser ({})

    })
    .catch(() =>{
      setUser({})

    })
  }



  return (
    <div className="App">
     { user.uid ?<button onClick={handleGoogleSingOut}>Sing out</button>  :
      <div>
        <button onClick={handleGoogleSingIn}>Google Sing In</button>
        <button onClick={handleGithubSingIn}>Github Sign</button>
      </div>
      }

    {
      user.uid && <div>
      <h1>Name:{user.displayName}</h1>
        <p>Email: {user.email}</p>
        <img src={user.photoURL} alt="" />
      </div>
    
    }
      
    </div>
  );
}

export default App;
