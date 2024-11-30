import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { createContext } from 'react';
import auth from './../firebaseInit/firebase.init';
    export const AuthContext = createContext();
const AuthProvider = ({children}) => {
const [user, setUser] = useState(null);
const [loading , setLoading] = useState(true);

    const googleProvider = new GoogleAuthProvider();


    useEffect(()=>{
     const unSubscribe = onAuthStateChanged(auth, user =>{
        if(user){
            setUser(user)
        }
        setLoading(false);
        }) 
        return ()=>{
            unSubscribe()
        }
    },[])
    console.log(user)
    const createUser = (email, password)=>{
     return   createUserWithEmailAndPassword(auth, email ,password)
    };

    const logInViaGoogle = ()=>{
       return signInWithPopup(auth,googleProvider)
    };

    const signIn = (email, password)=>{
        return signInWithEmailAndPassword(auth, email, password)
    }
    const userInfo = {
        createUser,
        user, 
        setUser,
        logInViaGoogle,
        signIn,
        loading , 
        setLoading
    }
    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;