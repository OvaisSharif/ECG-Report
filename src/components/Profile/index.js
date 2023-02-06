import React from 'react'
import Heading from '../Heading'
import Profileinfo from './Profileinfo'
import profilepic from "../../assets/profilepic.svg";
import Button from '../button';
import "./index.css";

function Profile({ profiledata }) {
    return (
        <div className='row'>
            <div className='col-3 text-center'>
                <img className='profileimg' src={profilepic} />
                <Heading text={profiledata.name} />
                <p className='profileemail'>{profiledata.email}</p>
                <div className='row'>
                    <div className='past col-6 text-center pl-5 pr-0'>
                        <p className='pastnumber'>{profiledata.past.number}</p>
                        <p className='pastname'>{profiledata.past.name}</p>
                    </div>
                    <div className='upcoming col-6 text-center pl-0 pr-5'>
                        <p className='upcomingnumber'>{profiledata.upcoming.number}</p>
                        <p className='upcomingname'>{profiledata.upcoming.name}</p>
                    </div>
                </div>
                <Button type="button">Send Message</Button>
            </div>


            <div className='col-9'>
                <div className='row profileinfo'>
                    {
                        profiledata.profileinfo.length > 0 &&
                        profiledata.profileinfo.map((item, index) => {
                            return (
                                <div key={index} className='col-3'>
                                    <Profileinfo profileinfo={item} />
                                </div>
                            )
                        })
                    }

                </div>

                <div className='row dataheading'>
                    <div className='col-3 text-center datahead1'>Upcoming Appointments</div>
                    <div className='col-3 text-center datahead2'>Past Appointments</div>
                    <div className='col-3 text-center datahead2'>Medical Records</div>
                </div>
            </div>

        </div >

    )
}

export default Profile