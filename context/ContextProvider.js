import { createContext, useEffect, useState } from "react";
import * as firebase from "firebase/auth";
import auth from "../configs/firebase.config";
const { GoogleAuthProvider, signInWithPopup, signInWithEmailAndPassword, createUserWithEmailAndPassword, onAuthStateChanged } = firebase;

export const MainContext = createContext(null)
const googleAuthProvider = new GoogleAuthProvider()

const ContextProvider = ({ children }) => {

    const [user, setUser] = useState(null)
    const [initialLoading, setInitialLoading] = useState(true)

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            }
            
            setInitialLoading(false)
        })
        return () => unsubscribe()
    }, [])

    const handleContinueWithGoogle = async () => {
        try {
            // const update = await signInWithPopup(auth, googleAuthProvider)
            console.log('update');
        } catch (error) {
            console.log(error);
        }
    }

    const handleEmailPasswordLogin = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const handleEmailPasswordSignup = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const value = {
        user,
        setUser,
        initialLoading,
        handleContinueWithGoogle,
        handleEmailPasswordLogin,
        handleEmailPasswordSignup
    }

    return (
        <MainContext.Provider value={value}>{children}</MainContext.Provider>
    );
}

export default ContextProvider;