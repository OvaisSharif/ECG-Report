import React from 'react'
import "./index.css";


function DataFiles({ filedata }) {
    return (
        <>
            {
                filedata.map((filedata, index) => {
                    return <li className='datafiles my-2 d-flex align-center' key={index}>

                        <img src={filedata.logo} />

                        <span className='ml-2'>{filedata.name}</span>

                    </li>
                })
            }
        </>
    )
}

export default DataFiles