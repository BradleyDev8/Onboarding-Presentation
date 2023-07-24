import React from "react";
import handleScrollToNext from "../components/scrollToNext";
import AccordionChecked from "../components/AccordionChecked";

export default function Architecture() {
  return (
    <div id="architecture" className="hero min-h-screen bg-base-100 relative">
      <div className="hero-content text-center m-8">
        <div className="">
          <button
            onClick={() => handleScrollToNext("unit-testing")}
            className=" btn text-base-100 bg-base-100 border-none hover:bg-accent group absolute bottom-0 left-0 mb-4 ml-4"
          >
            Secret back button
            <span className="opacity-0 group-hover:opacity-100">😉</span>
          </button>
          <h1 className="text-5xl font-bold mb-6">🏛️ Architecture 🏛️</h1>
          <p>
            
          </p>
          <AccordionChecked/>
          <button onClick={() => handleScrollToNext('react-setup')} className="btn btn-success mb-4 absolute bottom-0 right-0 mr-4">Next Slide</button>
        </div>
      </div>
    </div>
  );
}
