import React, { useState } from "react";
import * as styled from "./Profile.styles.js";

const Profile = (props) => {
    const [open, setOpen] = useState(false);

    const toggle = () => {
        setOpen(!open);
    }

    return (
        <div>
            <styled.Profile onClick={toggle}>{props.label}</styled.Profile>
            {open && <div>{props.children}</div>}
        </div>
    )
}

export default Profile;