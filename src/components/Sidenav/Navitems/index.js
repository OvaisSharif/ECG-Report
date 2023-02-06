import React from 'react'
import "./index.css"

function Navitem({ navitem }) {
    return (
        <div className='navitems'>
            <img src={navitem.logo} />
            <p className='defaulttext my-2'>{navitem.name}</p>
        </div>
    )
}

export default Navitem