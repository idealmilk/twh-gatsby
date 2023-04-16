import { motion } from 'framer-motion';
import React, { useContext, useEffect, useState } from 'react';

import { LanguageContext } from 'context/LanguageContext';

import { Container, TextWrap } from './styled';

const Hero = () => {
  const { isEnglish } = useContext(LanguageContext);

  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.pageYOffset);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Container as={motion.div}>
      <TextWrap style={{ transform: `translateY(-${offsetY * 0.5}px)` }}>
        <h1>{isEnglish ? 'Together We Heal' : 'Ser Reflejo'}</h1>
      </TextWrap>
    </Container>
  );
};

export default Hero;
