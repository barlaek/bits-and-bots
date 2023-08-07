import React from "react";
import * as styled from "./Registration.styles.js";
import Register from "../Components/Register.js";

const Registration = () => {
    return (
        <styled.Background>
            <styled.Container>
                <h1>Register an account</h1>
                <Register />
            </styled.Container>
        </styled.Background>
    )
}

export default Registration;