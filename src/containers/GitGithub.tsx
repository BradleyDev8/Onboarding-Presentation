import React from 'react'
import handleScrollToNext from '../components/scrollToNext';
import gitlogo from '../assets/git-logo.png';
import gitHubLogo from '../assets/github-logo.png';
import githubimage from '../assets/github-image.png';
import gitmeme from '../assets/gitmemeHR.png'

export default function GitGitHub() {
  return (
    <div id='git-github' className="hero min-h-screen bg-base-100 relative">
  <div className="hero-content text-center">
    <div className="max-w-md">
      <button onClick={() => handleScrollToNext('mac-setup')} className=' btn bg-base-100 border-none text-base-100 hover:bg-accent group absolute bottom-0 left-0 mb-4 ml-4'>Secret back button<span className='opacity-0 group-hover:opacity-100'>😉</span></button>
      <div className='flex items-center'>
      <img src={gitlogo} alt="" className='w-16 inline-flex mr-2'/>
      <h1 className="text-5xl font-bold">Git & GitHub</h1>
      <img src={gitHubLogo} alt="" className='w-20 inline-flex ml-1 '/>
      </div>
      <p className="py-6 font-semibold">Git & GitHub workshop conducted by Chloe. The workshop helped discover the intricacies of Git configuration, Git commands, branching, local & remote repositories. </p>
    <label htmlFor="my_modal_6" className="btn btn-primary mr-2">Click Me!!</label>
    <input type="checkbox" id="my_modal_6" className="modal-toggle" />
    <div className="modal">
    <div className="modal-box">
        <img src={githubimage} className='w-full' alt="" />
        <div className="modal-action">
        <label htmlFor="my_modal_6" className="btn btn-primary ">Close!</label>
        </div>
    </div>
    </div>
    <label htmlFor="my_modal_2" className="btn btn-primary ml-2">And Me!</label>
    <input type="checkbox" id="my_modal_2" className="modal-toggle" />
    <div className="modal">
    <div className="modal-box-2">
        <img src={gitmeme} className='w-full' alt="" />
        <div className="modal-action">
        <label htmlFor="my_modal_2" className="btn btn-primary ">Close!</label>
        </div>
    </div>
    </div>
      <button onClick={() => handleScrollToNext("unit-testing")} className="btn btn-success mb-4 absolute bottom-0 right-0 mr-4 hover:opacity-80">Next Slide</button>
    </div>
  </div>
</div>
  )
}
