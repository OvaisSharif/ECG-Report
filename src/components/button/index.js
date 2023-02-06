import React from 'react'
import "./index.css";

function Button(props) {
    return (
        <button className="button" type={props.type}>{props.children}</button>
    )
}

export default Button;