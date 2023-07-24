import React from 'react'
import handleScrollToNext from '../components/scrollToNext';

export default function UnitTesting() {
    
    const openInNewTab = (url: any) => {
        window.open(url, '_blank', 'noreferrer');
    };

  return (
    <div id='unit-testing' className="hero min-h-screen bg-base-200 relative">
  <div className="hero-content text-center">
    <div className="max-w-md">
      <button onClick={() => handleScrollToNext('git-github')} className=' btn text-base-200 hover:bg-accent group absolute top-0 left-0 mt-4 ml-4'>Secret back button<span className='opacity-0 group-hover:opacity-100'>😉</span></button>
      <h1 className="text-5xl font-bold">🧪 Unit Testing 🧪</h1>
      <div className='flex justify-start text-clip gap-5'>
      <p className="py-6 font-semibold">The Unit Testing onboarding taught us about the importance of Test Driven Development. Unit testing allows the developer to catch bugs early in the development process, promote code reusability and enable easier refactoring.</p>
      <p className="py-6 font-semibold">The Unit Testing onboarding process included a testing workshop, this had a series of tasks to complete including creating functions and tests for Fetch, Upload, Edit and deleting functions.</p>
      </div>
      <button onClick={() => handleScrollToNext('git-github')} className="btn btn-secondary mb-4 absolute bottom-0 right-0 mr-4">Next Slide</button>
      <button role='link' onClick={() => openInNewTab("http://localhost:3001/")} className="btn btn-secondary mb-4 absolute bottom-0 left-0 ml-4">I am A test Button😎</button>
    </div>
  </div>
</div>
  )
}
