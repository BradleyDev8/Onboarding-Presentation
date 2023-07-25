import React from 'react'
import handleScrollToNext from "../components/scrollToNext";
import HRbg2 from "../assets/HRbg2.png";
import Giffy from "../components/Giffy";

export default function ThankYou() {

  
  return (
    <div id='thankyou-page' className='hero min-h-screen relative' style={{backgroundImage: `url(${HRbg2})`}}>
        <div className='hero-content text-center flex'>
            <div className=' text-base-200'>
                <h1 className='text-5xl font-bold'>Thank you!👍</h1>
                <p className='font-semibold text-lg pt-2 '>Thanks to the team for the training and support provided.</p>
                <h2 className='text-5xl font-semibold mb-4 mt-8'>Any Questions?</h2>
                <Giffy />
            </div>
            
        </div>
      <button onClick={() => handleScrollToNext('tailwind-page')} className=' btn bg-secondary text-white border-none hover:bg-accent group absolute bottom-0 right-0 mb-4 mr-4'>Not so Secret back button 😒</button>
    </div>

  )
}
