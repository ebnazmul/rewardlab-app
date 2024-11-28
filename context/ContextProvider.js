import { createContext } from "react";

export const MainContext = createContext(null)

const ContextProvider = ({ children }) => {

    const value = {
        user: 0
    }

    return (
        <MainContext.Provider value={value}>{children}</MainContext.Provider>

    );
}

export default ContextProvider;