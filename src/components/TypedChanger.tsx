import React from 'react';
import Typed from 'typed.js';

export default function TypedChanger() {
  // Create reference to store the DOM element containing the animation
  const el = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ['Onboarding with Hamilton Robson'],
      typeSpeed: 110,
      loop: true,
      loopCount: Infinity,
      backSpeed: 100,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);

  return (
    <div className="App text-6xl">
      <span ref={el} />
    </div>
  );
}