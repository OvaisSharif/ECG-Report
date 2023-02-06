import React from 'react';
import "./index.css"

function Heading({ text, className }) {
    return (
        <h1 className="heading">{text}</h1>
    )
}

export default Heading