import React from "react";
import * as styled from "./Registration.styles.js";
import Register from "../Components/Register.js";
import Tab from "../Components/Tab.js";

const Registration = () => {
    return (
        <styled.Background>
            <styled.Container>
                <Tab />
                <h1>Register account</h1>
                <Register />
            </styled.Container>
        </styled.Background>
    )
}

export default Registration;