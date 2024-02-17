import React, { useEffect, useRef } from 'react';
import Navbar from './components/Navbar';
import LandingPage from './components/LandingPage';
import Marquee from './components/Marquee';
import About from './components/About';
import LocomotiveScroll from 'locomotive-scroll';

function App() {
  const mainContentRef = useRef(null);

  useEffect(() => {
    const scrollInstance = new LocomotiveScroll({
      el: mainContentRef.current,
      smooth: true,
      // Decrease the speed to slow down the scrolling
      // You can adjust this value as needed
      speed: 20000,œ
      // You can add more options here as needed
    });

    // Cleanup function
    return () => {
      if (scrollInstance) {
        scrollInstance.destroy();
      }
    };
  }, []);

  return (
    <div className='w-full min-h-screen bg-zinc-900 text-white' ref={mainContentRef}>
      <Navbar />
      <LandingPage />
      <Marquee />
      <About />
    </div>
  );
}

export default App;
