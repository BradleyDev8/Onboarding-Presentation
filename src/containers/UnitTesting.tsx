import React from 'react'
import handleScrollToNext from '../components/scrollToNext';
import logo from "../assets/logo.svg";
import testing101 from "../assets/testing-101.png";

export default function UnitTesting() {
    
    

  return (
    <div id='unit-testing' className="hero min-h-screen bg-base-200 items-start relative">
  <div className="hero-content text-center mt-8">
    <div className="">
      <button onClick={() => handleScrollToNext('git-github')} className=' btn text-base-200 hover:bg-accent group absolute bottom-0 left-0 mb-4 ml-4'>Secret back button<span className='opacity-0 group-hover:opacity-100'>😉</span></button>
      <h1 className="text-5xl font-bold">🧪 Unit Testing 🧪</h1>
      <div className='flex gap-5 hero-content mt-16'>
      <div className="card w-96 h-52 bg-base-200 text-primary-content shadow-success shadow-lg">
        <div className="card-body text-base-100 font-semibold">
            <p className='text-gray-100'>The Unit Testing onboarding taught us about the importance of Test Driven Development. Unit testing allows the developer to catch bugs early in the development process, promote code reusability and enable easier refactoring.</p>
            <div className="card-actions justify-end">
            </div>
        </div>
        </div>
        <div className="card w-96 h-52 bg-base-200 text-primary-content shadow-success shadow-lg">
        <div className="card-body text-base-100 font-semibold">
            <p className='text-gray-100'>The Unit Testing onboarding process included a testing workshop, this had a series of tasks to complete including creating functions and tests for Fetch, Upload, Edit and deleting functions.</p>
            <div className="card-actions justify-end">
            </div>
        </div>
        </div>
      {/* <p className="py-6 font-semibold">The Unit Testing onboarding taught us about the importance of Test Driven Development. Unit testing allows the developer to catch bugs early in the development process, promote code reusability and enable easier refactoring.</p>
      <p className="py-6 font-semibold">The Unit Testing onboarding process included a testing workshop, this had a series of tasks to complete including creating functions and tests for Fetch, Upload, Edit and deleting functions.</p> */}
      </div>
      <div className='flex justify-center mt-6 '>
      <div className="card card-compact w-96 bg-base-200  shadow-success shadow-lg">
  <figure><img src={testing101} alt="" className='h-full'/></figure>
  
</div>
        </div>
      <button onClick={() => handleScrollToNext('architecture')} className="btn btn-success mb-4 absolute bottom-0 right-0 mr-4">Next Slide</button>
      
    </div>
  </div>
</div>
  )
}
