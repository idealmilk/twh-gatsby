import React from 'react';

import { motion, AnimatePresence } from 'framer-motion';

import { Projects } from 'data/Projects';
import { Close } from 'icons/icons';

import { Container } from './styled';
import List from './List';
import Panels from './Panels';

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

  return (
    <Container>
      <AnimatePresence>
        {menuState && (
          <>
            <motion.div
              initial={{ visibility: 'hidden' }}
              exit={{
                visibility: 'hidden',
                transition: { delay: 1 },
              }}
              animate={{
                visibility: 'visible',
                transition: { delay: 1 },
              }}
              className='projects'
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
            <Panels />
          </>
        )}
      </AnimatePresence>
    </Container>
  );
};

export default Menu;
