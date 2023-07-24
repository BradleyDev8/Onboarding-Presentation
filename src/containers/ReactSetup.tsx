import React from "react";
import handleScrollToNext from "../components/scrollToNext";
import logo from "../assets/logo.svg";

export default function ReactSetup() {
  const openInNewTab = (url: any) => {
    window.open(url, "_blank", "noreferrer");
  };
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
          <p className="py-6 font-semibold">
            The React onboarding process included a workshop that tasked us with
            challanges such as:{" "}
          </p>
          <div className="flex justify-center font-semibold">
            <ul className="list-disc mr-6 text-left">
              <li>Creating a blog Page</li>
              <li>Add re-usable Nav Bar component</li>
              <li>Update links to Nav Bar</li>
              <li>Adding an image</li>
              <li>Using Flexbox</li>
              <li>Adding another page</li>
            </ul>
          </div>
          <div className="flex justify-center">
            <button
              role="link"
              onClick={() => openInNewTab("http://localhost:3001/")}
              className="btn btn-secondary mt-4 absolute"
            >
              Click me to see React WorkShop😎
            </button>
          </div>
          <button onClick={() => handleScrollToNext("Architecture-setup")} className="btn btn-success mb-4 absolute bottom-0 right-0 mr-4">Next Slide</button>
        </div>
      </div>
    </div>
  );
}
