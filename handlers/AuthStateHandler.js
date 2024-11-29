import { useContext } from "react";
import { MainContext } from "../context/ContextProvider";
import Navigation from "../navigation/Navigation";
import InitialNavigation from "../navigation/InitialNavigation";
import Loading from "../utils/Loading";

const AuthStateHandler = () => {
    const { user, initialLoading } = useContext(MainContext)

    if (initialLoading) {
        return <Loading />
    }

    return (
        user ? <Navigation /> : <InitialNavigation />
    );
}

export default AuthStateHandler;