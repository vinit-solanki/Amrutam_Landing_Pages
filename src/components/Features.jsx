import React from 'react'
import Messages from '../assets/MessagesAvatar.png';
import Assurance from '../assets/AssuranceAvatar.png';
import Doctor from '../assets/DoctorAvatar.png';
import Planning from '../assets/PlanningAvatar.png';
function Features() {
  return (
    <div className='w-screen relative bg-custom-lightYellow p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
        <div className='w-full flex justify-center items-center'>
            <img src={Messages} alt="" />
            <p className='text-lg text-custom-green font-bold'>Convenient Online & 
            In-clinic Consultations</p>
        </div>
        <div className='w-full flex justify-center items-center'>
            <img src={Assurance} alt="" />
            <p className='text-lg text-custom-green font-bold'>Convenient Online & 
            In-clinic Consultations</p>
        </div>
        <div className='w-full flex justify-center items-center'>
            <img src={Doctor} alt="" />
            <p className='text-lg text-custom-green font-bold'>Convenient Online & 
            In-clinic Consultations</p>
        </div>
        <div className='w-full flex justify-center items-center'>
            <img src={Planning} alt="" />
            <p className='text-lg text-custom-green font-bold'>Convenient Online & 
            In-clinic Consultations</p>
        </div>
    </div>
  )
}

export default Features