import React from 'react'
import "./index.css";

function Userrecord({ userrecord, info, date }) {
    return (

        userrecord.icon ?
            <div className='d-flex align-items-center'>

                <p>
                    <img src={userrecord.icon} className='mr-1' />
                    {userrecord.name}
                </p>
            </div> :
            <div className={info ? "" : 'userrecord'} >
                <p className={date ? "heading mb-2" : 'defaulttext mb-1 mt-2'}>
                    {userrecord.name}
                </p>
                {
                    userrecord.data &&
                    <p className={date ? "defaulttext" : 'resulttext'}>
                        {userrecord.data}
                    </p>
                }
            </div >



    )
}

export default Userrecord