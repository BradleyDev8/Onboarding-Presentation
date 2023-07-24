import React from 'react';
import './App.css';
import handleScrollToNext from './components/scrollToNext';
import MacSetup from './containers/MacSetup';
import GitGitHub from './containers/GitGithub';

function App() {

 
  
  return (
    <div>
    <div id='home' className="hero min-h-screen bg-base-100">
  <div className="hero-content text-center">
    <div className="max-w-md">
      <h1 className="text-5xl font-bold">Onboarding with Hamilton Robson</h1>
      <p className="py-6 font-semibold">This presentation will cover the topics that I have learned during the onboarding process at Hamilton Robson</p>
      <button className="btn btn-primary" onClick={() => handleScrollToNext('mac-setup')}>Start Presentation</button>
      <div className="radial-progress" style={radialStyle}>70%</div>
    </div>
  </div>
</div>
<MacSetup />
<GitGitHub />


</div>




  );
}


export default App;

