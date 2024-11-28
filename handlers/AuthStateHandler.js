import { useContext } from "react";
import { MainContext } from "../context/ContextProvider";
import Navigation from "../navigation/Navigation";
import InitialNavigation from "../navigation/InitialNavigation";

const AuthStateHandler = () => {
    const { user } = useContext(MainContext)

    

    return (
        user ? <Navigation /> : <InitialNavigation />
    );
}

export default AuthStateHandler;