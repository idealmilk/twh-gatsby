import React, { useEffect, useState } from 'react';

import { motion } from 'framer-motion';

import { Projects } from 'data/Projects';
import { Close } from 'icons/icons';

import { Container } from './styled';
import List from './List';

// Stagger on menu link
const parent = {
  animate: { transition: { staggerChildren: 0.1, delayChildren: 1 } },
};

type MenuProps = {
  setMenuState: Function;
  menuState: any;
  setCursorHovered: Function;
  x: number;
  y: number;
};

const Menu = ({
  setMenuState,
  menuState,
  setCursorHovered,
  x,
  y,
}: MenuProps) => {
  const closeMenu = () => {
    setMenuState(!menuState);
  };

  const [windowHeight, setWindowHeight] = useState(100);

  useEffect(() => {
    if (window) {
      setWindowHeight(window.innerHeight);
    }
  }, []);

  return (
    <Container
      style={{
        transform: menuState ? 'translateY(0)' : 'translateY(-100vh)',
      }}
    >
      <div className='menu-title'>Products</div>
      <div
        onClick={() => closeMenu()}
        onMouseEnter={() => setCursorHovered(true)}
        onMouseLeave={() => setCursorHovered(false)}
        className='close'
      >
        <Close />
      </div>

      {menuState && (
        <>
          <motion.div
            initial={{ visibility: 'hidden', height: 0 }}
            animate={{ visibility: 'visible', height: 800 }}
            className='projects'
          >
            <div className='menu'>
              <div className='container'>
                <div className='menu-inner'>
                  <motion.ul
                    variants={parent}
                    initial='initial'
                    animate='animate'
                    exit='exit'
                  >
                    {Projects.map((list: any) => (
                      <List
                        key={list.id}
                        setCursorHovered={setCursorHovered}
                        leftLineFlex={list.leftLineFlex}
                        rightLineFlex={list.rightLineFlex}
                        title={list.title}
                        thumbnailPosition={list.thumbnailPosition}
                        offset={list.offset}
                        src={list.src}
                        id={list.id}
                        x={x}
                        y={y}
                      />
                    ))}
                  </motion.ul>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </Container>
  );
};

export default Menu;
