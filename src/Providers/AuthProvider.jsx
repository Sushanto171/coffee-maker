import { createUserWithEmailAndPassword, deleteUser, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { createContext } from 'react';
import auth from './../firebaseInit/firebase.init';
import { successAlert } from '../components/SuccessAlert';
    export const AuthContext = createContext();

const AuthProvider = ({children}) => {
const [user, setUser] = useState(null);
const [loading , setLoading] = useState(true);
const [titles , setTitle] = useState("Coffee Maker");
    const googleProvider = new GoogleAuthProvider();


    useEffect(()=>{
     const unSubscribe = onAuthStateChanged(auth, user =>{
        if(user){
            setUser(user)
        }
        else{
            setUser(null)
        }
        setLoading(false);
        }) 
        return ()=>{
            unSubscribe()
        }
    },[]);
  document.title = titles + " | Coffee Maker";
    const createUser = (email, password)=>{
     return   createUserWithEmailAndPassword(auth, email ,password)
    };

    const logInViaGoogle = ()=>{
       return signInWithPopup(auth,googleProvider)
    };

    const signIn = (email, password)=>{
        return signInWithEmailAndPassword(auth, email, password)
    };

    const signOutUser = ()=>{
        signOut(auth)
        .then(()=>{
            successAlert("out")
            // setUser(null)
        })
        .catch(error => console.log(error))
    };

    const userDelete =()=>{
       return deleteUser(auth.currentUser)
    }
    const userInfo = {
        createUser,
        user, 
        setUser,
        logInViaGoogle,
        signIn,
        loading , 
        setLoading,
        setTitle,
        signOutUser,
        userDelete
    }
    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;