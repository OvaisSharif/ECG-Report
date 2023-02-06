import React from 'react'
import DataFiles from './datafiles';
import Userrecord from './usersrecord';
import "./index.css";


function Data({ filedata, usersrecords }) {
    return (
        <div className='row'>
            <div className='col-3 datatable'>
                <h6 className='filesheading mb-3'>Files/Documents</h6>
                <ul>
                    <DataFiles filedata={filedata} />
                </ul>
            </div>
            <div className='col-9 container-fluid records'>
                <div className='row justify-content-between userrecordcolumns'>
                    <div className='col-3 recordhead1'>Root Canal Treatment</div>
                    <div className='col-3 recordhead2'>Show Previous Treatments</div>
                </div>

                {
                    usersrecords.length > 0 &&
                    usersrecords.map((userrecord, index) => {
                        return (
                            <div className='row userrecordparent'>
                                <div key={index} className="col-3 ">
                                    <Userrecord userrecord={userrecord.date} date />
                                </div>
                                <div key={index} className="col-3 ">
                                    <Userrecord userrecord={userrecord.treatment} />
                                </div>
                                <div key={index} className="col-6 ">
                                    <div className='row'>
                                        {
                                            userrecord.info.length > 0 &&
                                            userrecord.info.map((item, id) => {
                                                return <div className={id === 2 ? 'col-4 d-flex' : 'col-4'} >
                                                    <Userrecord userrecord={item} info id={id} />
                                                </div>
                                            })
                                        }
                                    </div>
                                </div>
                            </div>

                        )


                    })
                }
            </div>
        </div >
    )
}

export default Data;