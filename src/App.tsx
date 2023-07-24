import React from 'react';
import './App.css';
import handleScrollToNext from './components/scrollToNext';
import MacSetup from './containers/MacSetup';
import GitGitHub from './containers/GitGithub';
import UnitTesting from './containers/UnitTesting';
import ReactSetup from './containers/ReactSetup';
import NavBar from './components/NavBar';
import Architecture from './containers/Architecture';

function App() {

 
  
  return (
    <div>
      <NavBar/>
    <div id='home' className="hero min-h-screen bg-gradient-to-r from-primary to-secondary">
  <div className="hero-content text-center">
    <div className="max-w-md">
      <h1 className="text-5xl font-bold">Onboarding with Hamilton Robson</h1>
      <p className="py-6 font-semibold">This presentation will cover the topics that I have learned during the onboarding process at Hamilton Robson</p>
      <button className="btn btn-primary" onClick={() => handleScrollToNext('mac-setup')}>Start Presentation</button>
    </div>
  </div>
</div>
<MacSetup />
<GitGitHub />
<UnitTesting />
<Architecture />
<ReactSetup />


</div>




  );
}


export default App;

