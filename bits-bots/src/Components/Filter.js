import React, { useState } from "react";
import * as styled from "./Filter.styles.js";

const Filter = (props) => {
    const [open, setOpen] = useState(false);

    const toggle = () => {
        setOpen(!open)
    }

    return (
        <styled.Container>
            <styled.Filter onClick={toggle}>{props.label}</styled.Filter>
            {open && (
                <div>
                    {props.children}
                </div>
            )}
        </styled.Container>
    )
}

export default Filter;