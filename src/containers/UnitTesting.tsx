import React from 'react'
import handleScrollToNext from '../components/scrollToNext';

export default function UnitTesting() {
  return (
    <div id='unit-testing' className="hero min-h-screen bg-base-200 relative">
  <div className="hero-content text-center">
    <div className="max-w-md">
      <button onClick={() => handleScrollToNext('git-github')} className=' btn text-base-200 hover:bg-accent group absolute top-0 left-0 mt-4 ml-4'>Secret back button<span className='opacity-0 group-hover:opacity-100'>😉</span></button>
      <h1 className="text-5xl font-bold">🧪 Unit Testing 🧪</h1>
      <p className="py-6 font-semibold">The first step of the onboarding process was setting up the Mac to ensure it has all the correct software and tools ready for use.</p>
     
      <button onClick={() => handleScrollToNext('git-github')} className="btn btn-secondary mb-4 absolute bottom-0 right-0 mr-4">Next Slide</button>
    </div>
  </div>
</div>
  )
}
