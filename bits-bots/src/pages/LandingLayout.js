import React from "react";
import * as styled from "./LandingLayout.styles.js";
import { Outlet } from "react-router-dom";

function LandingLayout() {
    return (
        <styled.Container>
            <Outlet />
        </styled.Container>
    )
}

export default LandingLayout;