import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from 'firebase/auth'
import { app } from '../firebase/firebase.config';


export const AuthContext = createContext();
const auth = getAuth(app)

const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null)
    const [loading,setLoading] = useState(true)

    const createUser = (email,password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const signIn = (email,password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }
    const googleSignIn= (provider) => {
        setLoading(true)
        return signInWithPopup(auth,provider)
    }
    const logOut = () =>{
        setLoading(true)
        return signOut(auth)

    }
    const updateUser = (userInfo) =>{
        return updateProfile(auth.currentUser,userInfo)
    }

    useEffect(()=> {
      const unSubscribe = onAuthStateChanged(auth,currentUser =>{
            console.log("user observing")
            setUser(currentUser)
            setLoading(false)

        });
        return () => unSubscribe();
        

    },[])

    const authInfo = {auth,createUser,signIn,logOut,googleSignIn,updateUser,loading,user}

    return (
        <AuthContext.Provider value={authInfo}>
            {children}  
        </AuthContext.Provider>
    );
};

export default AuthProvider;