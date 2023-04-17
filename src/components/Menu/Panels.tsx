import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';

const transition = { duration: 0.8, ease: [0.6, -0.05, 0.01, 0.9] };

const Panels = () => {
  const [panelComplete, setPanelComplete] = useState(false);

  const [windowHeight, setWindowHeight] = useState(100);

  useEffect(() => {
    if (window) {
      setWindowHeight(window.innerHeight);
    }
  }, []);

  return (
    <>
      <motion.div
        initial={{ height: 0 }}
        animate={{
          height: [0, window.innerHeight, 0],
          bottom: [null, 0, 0],
        }}
        exit={{
          height: [0, window.innerHeight, 0],
          top: [null, 0, 0],
        }}
        transition={{ ...transition, duration: 2, times: [0, 0.5, 1] }}
        style={{ background: panelComplete ? 'pink' : 'blue' }}
        className='left-panel-background'
      ></motion.div>
      <motion.div
        style={{
          background: panelComplete ? 'pink' : 'blue',
        }}
        initial={{ height: 0 }}
        animate={{
          height: [0, windowHeight, 0],
          bottom: [0, 0, windowHeight],
        }}
        exit={{
          height: [0, windowHeight, 0],
          bottom: [null, 0, 0],
        }}
        transition={{ ...transition, duration: 2, times: [0, 0.5, 1] }}
        className='right-panel-background'
        onAnimationComplete={() => {
          setPanelComplete(!panelComplete);
        }}
      ></motion.div>
    </>
  );
};

export default Panels;
