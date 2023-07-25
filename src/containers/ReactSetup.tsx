import React from "react";
import handleScrollToNext from "../components/scrollToNext";
import logo from "../assets/logo.svg";
import ReactAccordion from "../components/ReactAccordion";

export default function ReactSetup() {
  
  return (
    <div id="react-setup" className="hero min-h-screen bg-base-200 relative ">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <button
            onClick={() => handleScrollToNext("architecture")}
            className="btn bg-base-200 border-none text-base-200 hover:bg-accent group absolute bottom-0 left-0 mb-4 ml-4"
          >
            Secret back button
            <span className="opacity-0 group-hover:opacity-100">😉</span>
          </button>
          <div className="flex justify-center items-center">
            <img src={logo} className="App-logo w-32 inline-flex " alt="logo" />
            <h1 className="text-6xl font-bold text-primary absolute">React</h1>
            <img
              src={logo}
              className="App-logo w-32 inline-flex ml-48"
              alt="logo"
            />
          </div>
          <ReactAccordion />
          <div className="flex justify-center">
            
          </div>
          <button onClick={() => handleScrollToNext("tailwind-page")} className="btn btn-success mb-4 absolute bottom-0 right-0 mr-4 hover:opacity-80">Next Slide</button>
        </div>
      </div>
    </div>
  );
}
