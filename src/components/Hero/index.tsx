import { motion } from 'framer-motion';
import React, { useContext, useEffect, useState } from 'react';

import { LanguageContext } from 'context/LanguageContext';

import { Container, TextWrap } from './styled';
import AnimatedLetters from 'components/common/AnimatedLetters';

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
      <TextWrap offsetY={offsetY}>
        <AnimatedLetters
          title={isEnglish ? 'Together We Heal' : 'Ser Reflejo'}
          large={true}
        />

        <AnimatedLetters
          title={
            isEnglish ? 'women, art and resistance' : 'una juntanza para sanar'
          }
          large={false}
        />
      </TextWrap>
    </Container>
  );
};

export default Hero;
