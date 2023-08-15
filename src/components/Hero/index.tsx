import { motion } from 'framer-motion';
import React, { useContext, useEffect, useState } from 'react';

import { LanguageContext } from 'context/LanguageContext';

import { Container, TextWrap } from './styled';
import AnimatedLetters from 'components/common/Animations/Letters';

type HeroProps = {
  header: string;
  subheader: string;
};

const Hero = ({ header, subheader }: HeroProps) => {
  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.pageYOffset);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Container as={motion.div}>
      <TextWrap offsetY={offsetY}>
        <AnimatedLetters title={header} large={true} />
        <AnimatedLetters title={subheader} large={false} />
      </TextWrap>
    </Container>
  );
};

export default Hero;
