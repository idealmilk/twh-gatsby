import { motion } from 'framer-motion';
import { Link } from 'gatsby';
import React, { useState, useRef, useEffect } from 'react';

import { GatsbyImageConverter } from 'components';

// Transition Animation
const transition = { duration: 0.8, ease: [0.6, -0.05, 0.01, 0.9] };

// Menu Title Slide Up
const titleSlideUp = {
  initial: { y: 200 },
  animate: { y: 0 },
};

// Menu lines grow
const lineGrow = {
  initial: { width: '100%' },
  animate: { width: 0 },
};

type ListProps = {
  leftLineFlex: any;
  rightLineFlex: any;
  title: any;
  thumbnailPosition: any;
  offset: any;
  src: any;
  id: number;
  setCursorHovered: Function;
  x: number;
  y: number;
};

const List = ({
  leftLineFlex,
  rightLineFlex,
  title,
  thumbnailPosition,
  offset,
  src,
  id,
  setCursorHovered,
  x,
  y,
}: ListProps) => {
  const [hoverState, setHoverState] = useState(false);
  const list = useRef<HTMLLIElement>(null);
  const [state, setState] = useState({
    top: 0,
    left: 0,
  });
  useEffect(() => {
    if (list.current) {
      setState({
        top: list.current.getBoundingClientRect().top,
        left: list.current.getBoundingClientRect().left,
      });
    }
  }, [hoverState]);

  return (
    <motion.li ref={list}>
      <Link to={`/product/${id}`}>
        <div className='wrapper'>
          <div className={`line left flex-${leftLineFlex}`}>
            <motion.div
              variants={lineGrow}
              className='mask'
              transition={{ ...transition, duration: 1 }}
            ></motion.div>
          </div>
          <motion.div
            onHoverStart={() => setHoverState(true)}
            onHoverEnd={() => setHoverState(false)}
            onMouseEnter={() => setCursorHovered(true)}
            onMouseLeave={() => setCursorHovered(false)}
            className='title'
          >
            <h2>
              <motion.div
                variants={titleSlideUp}
                transition={transition}
                className='text'
              >
                {title}
              </motion.div>
            </h2>
          </motion.div>
          <div className='thumbnail' style={{ left: thumbnailPosition }}>
            <GatsbyImageConverter src={src} />
            <motion.div
              variants={lineGrow}
              transition={{ ...transition, duration: 1 }}
              className='mask'
            ></motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            className='floating-image'
            animate={{
              opacity: hoverState ? 1 : 0,
              x: x - state.left + offset,
              y: y - state.top,
            }}
            transition={{
              ease: 'linear',
            }}
          >
            <GatsbyImageConverter src={src} />
          </motion.div>
          <div className={`line right flex-${rightLineFlex}`}>
            <motion.div
              variants={lineGrow}
              className='mask right'
              transition={{ ...transition, duration: 1 }}
            ></motion.div>
          </div>
        </div>
      </Link>
    </motion.li>
  );
};

export default List;
