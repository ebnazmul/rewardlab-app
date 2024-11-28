import { createContext, useEffect, useState } from "react";
import { onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth"
import auth from "../configs/firebase.config";

export const MainContext = createContext(null)

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
        handleEmailPasswordLogin,
        handleEmailPasswordSignup
    }

    return (
        <MainContext.Provider value={value}>{children}</MainContext.Provider>
    );
}

export default ContextProvider;