import React from 'react'
import handleScrollToNext from '../components/scrollToNext'
import ChatBubble from '../components/ChatBubble'

export default function TailwindCss() {

  

  return (
    <div id='tailwind-page' className='hero min-h-screen bg-base-100 relative'>
      <div className='hero-content center'>
        <div className=''>
        <button
            onClick={() => handleScrollToNext("react-setup")}
            className=" btn text-base-100 bg-base-100 border-none hover:bg-accent group absolute bottom-0 left-0 mb-4 ml-4"
          >
            Secret back button
            <span className="opacity-0 group-hover:opacity-100">😉</span>
          </button>
          <div className='flex justify-center items-center'>
            <h1 className='text-6xl mb-8'>💨 Tailwind CSS 💨</h1>
          </div>
          <div className="chat chat-start">
  <div className="chat-bubble chat-bubble-primary">I am a utility-first CSS framework</div>
</div>
<div className="chat chat-start">
  <div className="chat-bubble chat-bubble-secondary">I am applied directly to the TSX using "className"</div>
</div>
<div className="chat chat-start">
  <div className="chat-bubble chat-bubble-accent">I am highly customizable, if you check my config file you will see my custom CSS</div>
</div>
<div className="chat chat-end">
  <div className="chat-bubble chat-bubble-info">Once you understand how I work, I am pretty simple to use.</div>
</div>
<ChatBubble/>
{/* <div className="chat chat-end">
  <div className="chat-bubble chat-bubble-success">Ask Kyle😁</div>
</div> */}
<div className="chat chat-end">
  <div className="chat-bubble chat-bubble-warning">This chat box feature is an example of what I can do</div>
</div>
<div className="chat chat-end">
  <div className="chat-bubble chat-bubble-error">But all the styles you see on this presentation have been created with TailwindCSS</div>
</div>
<button onClick={() => handleScrollToNext('thankyou-page')} className="btn btn-success mb-4 absolute bottom-0 right-0 mr-4 hover:opacity-80">Next Slide</button>
        </div>
      </div>

    </div>
  )
}
