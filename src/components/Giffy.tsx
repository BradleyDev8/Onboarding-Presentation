import React from 'react';

const Giffy: React.FC = () => {
  const outerDivStyle = {
    width: "100%",
    height: 0,
    paddingBottom: "83%",
    position: "relative" as "relative"
  };

  const iframeStyle = {
    position: "absolute" as "absolute",
    width: "100%",
    height: "100%"
  };

  return (
    <div>
      <div style={outerDivStyle}>
        <iframe 
        title='Giffy'
          src="https://giphy.com/embed/hyyV7pnbE0FqLNBAzs" 
          style={iframeStyle}
          className="giphy-embed"
          allowFullScreen
        ></iframe>
      </div>
      <p><a href="https://giphy.com/gifs/theoffice-the-office-tv-frame-toby-hyyV7pnbE0FqLNBAzs" className="opacity-0">This is a GIF</a></p>
    </div>
  );
};

export default Giffy;



