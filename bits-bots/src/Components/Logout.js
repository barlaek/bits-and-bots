import React from "react";
import useStorage from "../Utilities/Hooks/useStorage";
import * as styled from "./Logout.styles.js";

const Logout = () => {
    const data = useStorage();
    
    const logOut = () => {
        localStorage.clear();
    }

    return <styled.Logout onClick={logOut}>Logout</styled.Logout>
}

export default Logout;