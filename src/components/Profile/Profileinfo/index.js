import React from 'react'
import "./index.css";

function Profileinfo({ profileinfo }) {
    return (
        <div className='profileitem'>
            <p className='name'>{profileinfo.name}</p>
            <p className='data'>{profileinfo.data}</p>
        </div>
    )
}

export default Profileinfo