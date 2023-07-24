import React from 'react'
import handleScrollToNext from '../components/scrollToNext';

export default function MacSetup() {
  return (
    <div id='mac-setup' className="hero min-h-screen bg-base-200 relative">
  <div className="hero-content text-center">
    <div className="max-w-md">
      <button onClick={() => handleScrollToNext('home')} className=' btn text-base-200 hover:bg-accent group absolute bottom-0 left-0 mb-4 ml-4'>Secret back button<span className='opacity-0 group-hover:opacity-100'>😉</span></button>
      <h1 className="text-5xl font-bold">Mac Setup 🤯</h1>
      <p className="py-6 font-semibold">The first step of the onboarding process was setting up the Mac to ensure it has all the correct software and tools ready for use.</p>
      <div className='flex justify-center font-semibold'>
      <ul className='list-disc mr-6 text-left'>
        <li>VS Code</li>
        <li>Company Portal</li>
        <li>Postman</li>
        <li>NodeJs</li>
        </ul>
        <ul className='list-disc ml-6 text-left'>
        <li>MS 365</li>
        <li>Iterm</li>
        <li>Docker</li>
        <li>TablePlus</li>
      </ul>
      </div>
      <button onClick={() => handleScrollToNext('git-github')} className="btn btn-success mb-4 absolute bottom-0 right-0 mr-4">Next Slide</button>
    </div>
  </div>
</div>
  )
}
