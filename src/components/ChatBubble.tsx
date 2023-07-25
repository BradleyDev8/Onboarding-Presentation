import React, { useState } from 'react';
import kyleYoda from '../assets/kyleYoda.png'

const ChatBubble: React.FC = () => {
  const [isImageOpen, setIsImageOpen] = useState<boolean>(false);

  const toggleImage = (): void => {
    setIsImageOpen(!isImageOpen);
  };

  return (
    <div>
      <div className="chat chat-end" onClick={toggleImage}>
        <div className="chat-bubble chat-bubble-success">Ask Kyle😁</div>
      </div>
      
      {isImageOpen && (
        <div className="w-full h-auto">
          <img src={kyleYoda} className='h-56' alt="description" />
          <div className="chat-bubble chat-bubble-success">"Secret, shall I tell you? Grand Master of TailwindCSS am I."</div>
        </div>
      )}
    </div>
  );
};

export default ChatBubble;
