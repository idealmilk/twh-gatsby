import { motion, useAnimation } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

import { RichText } from 'components';
import Temp1 from 'images/temp1.png';
import Temp2 from 'images/temp2.png';

import { Container, Gallery, TextWrap } from './styled';

type BioProps = {
  body: any;
};

const Bio = ({ body }: BioProps) => {
  const controls = useAnimation();
  const [aboutTextRef, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const textVariants = {
    visible: { opacity: 1, y: 0, transition: { duration: 1.25 } },
    hidden: { opacity: 0, y: 200 },
  };

  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.pageYOffset);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Container>
      <TextWrap
        as={motion.div}
        ref={aboutTextRef}
        animate={controls}
        initial='hidden'
        variants={textVariants}
      >
        <RichText {...body} />
      </TextWrap>
      <Gallery>
        <img
          src={Temp1}
          style={{ transform: `translateY(-${offsetY * 0.3}px)` }}
        />
        <img
          src={Temp2}
          style={{ transform: `translateY(-${offsetY * 0.5}px)` }}
        />
        <img
          src={Temp1}
          style={{ transform: `translateY(-${offsetY * 0.3}px)` }}
        />
        <img
          src={Temp2}
          style={{ transform: `translateY(-${offsetY * 0.3}px)` }}
        />
        <img
          src={Temp1}
          style={{ transform: `translateY(-${offsetY * 0.5}px)` }}
        />
      </Gallery>
    </Container>
  );
};

export default Bio;
