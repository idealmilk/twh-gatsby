import useMouse from '@react-hook/mouse-position';
import { motion, Variants } from 'framer-motion';
import type { PageProps } from 'gatsby';
import React, { useRef, useState } from 'react';
import { ArrowUpRight } from 'react-feather';
import styled from 'styled-components';

import { AboutText, Hero, Footer, Header, SEO, Interviews } from 'components';
import Whiteout from 'components/Whiteout';

const Content = styled.div`
  position: absolute;
  top: 100vh;
  width: 100vw;
  color: black;
  background: ${(props) => props.theme.colors.white};
  z-index: 10000;
`;

const IndexPage: React.FC<PageProps> = () => {
  const [defaultCursorColor, setIsDefaultCursorColor] = useState('white');

  const [cursorText, setCursorText] = useState<string | JSX.Element>('');
  const [cursorVariant, setCursorVariant] = useState('default');

  const [showWhiteout, setShowWhiteout] = useState(false);

  const ref = useRef(null);
  const mouse = useMouse(ref, {
    enterDelay: 0,
    leaveDelay: 0,
  });

  const mouseXPosition = mouse.x !== null ? mouse.clientX : 0;
  const mouseYPosition = mouse.y !== null ? mouse.clientY : 0;

  const variants: Variants = {
    default: {
      opacity: 1,
      height: 10,
      width: 10,
      fontSize: '16px',
      backgroundColor: defaultCursorColor,
      x: mouseXPosition ? mouseXPosition : 0,
      y: mouseYPosition ? mouseYPosition : 0,
    },
    project: {
      opacity: 1,
      backgroundColor: 'transparent',
      color: 'white',
      border: `1px solid white`,
      height: 80,
      width: 80,
      fontSize: '36px',
      display: 'flex',
      textAlign: 'center',
      justifyContent: 'center',
      paddingTop: '14px',
      x: mouseXPosition ? mouseXPosition - 32 : 0,
      y: mouseYPosition ? mouseYPosition - 32 : 0,
    },
  };

  let spring = {
    type: 'spring',
    stiffness: 500,
    damping: 28,
  };

  const allElements = Array.from(
    document.querySelectorAll('*')
  ) as HTMLElement[];

  const projectEnter = () => {
    setCursorText(<ArrowUpRight size={48} />);
    setCursorVariant('project');

    spring = {
      type: 'spring',
      stiffness: 200,
      damping: 48,
    };

    for (let i = 0; i < allElements.length; i++) {
      allElements[i].style.cursor = 'none';
    }
  };

  const projectLeave = () => {
    setCursorText('');
    setCursorVariant('default');

    spring = {
      type: 'spring',
      stiffness: 500,
      damping: 28,
    };

    for (let i = 0; i < allElements.length; i++) {
      allElements[i].style.cursor = '';
    }
  };

  return (
    <main ref={ref}>
      <SEO
        title='Matthew Gilligan'
        description='Tokyo-based Frontend Engineer'
      />
      <Whiteout showWhiteout={showWhiteout} />
      <motion.div
        variants={variants}
        className='cursor'
        animate={cursorVariant}
        transition={spring}
      >
        {cursorText}
      </motion.div>
      <Header showWhiteout={showWhiteout} setShowWhiteout={setShowWhiteout} />
      <Hero />
      <Content
        onMouseEnter={() => setIsDefaultCursorColor('black')}
        onMouseLeave={() => setIsDefaultCursorColor('white')}
      >
        <AboutText />
        <Interviews projectEnter={projectEnter} projectLeave={projectLeave} />
        <Footer showWhiteout={showWhiteout} setShowWhiteout={setShowWhiteout} />
      </Content>
    </main>
  );
};

export default IndexPage;
