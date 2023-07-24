import React from 'react'
import handleScrollToNext from '../components/scrollToNext';

export default function ReactSetup() {
  return (
    <div id='react-setup' className='hero min-h-screen bg-base-100 relative'>
        <div className='hero-content text-center'>
            <div className='max-w-md'>
                <button onClick={()=> handleScrollToNext('unit-testing')} className='btn bg-base-100 border-none text-base-100 hover:bg-accent group absolute top-0 left-0 mt-4 ml-4'>Secret back button<span className='opacity-0 group-hover:opacity-100'>😉</span></button>
                <div className=' items-center'>
                    <h1 className='text-5xl  font-bold text-primary'>React</h1>
                </div>
                    <p className='py-6 font-semibold'>The React onboarding process included a workshop Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, sint. Doloremque doloribus repellendus, reiciendis nulla assumenda ad optio corrupti adipisci.</p>
            </div>
        </div>
    </div>
  )
}
