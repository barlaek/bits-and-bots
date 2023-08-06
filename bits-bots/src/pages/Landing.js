import React, { useState } from "react";
import * as styled from "./Landing.styles.js";

const Landing = (props) => {
    const [login, setLogin] = useState(false);
    const [ register, setRegister] = useState(false);
    
    const toggleLogin = () => {
        setLogin(!login);
    };

    const toggleReg = () => {
        setRegister(!register);
    };

    return (
        <styled.Background>
            <styled.Container>
                <div>
                    <styled.Login onClick={toggleLogin}>{props.label}</styled.Login>
                    {login && <div>{props.children}</div>}
                </div>
                <div>
                    <styled.Login onClick={toggleReg}>{props.label}</styled.Login>
                    {register && <div>{props.children}</div>}
                </div>
            </styled.Container>
        </styled.Background>
    )
}

export default Landing;