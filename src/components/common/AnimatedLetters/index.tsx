import React from 'react';
import { RowLetter, RowTitle } from './styled';
import { motion } from 'framer-motion';

const banner = {
  animate: {
    transition: {
      delayChildren: 1.25,
      staggerChildren: 0.1,
    },
  },
};

const letterAni = {
  initial: { y: 200, opacity: 0 },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      ease: [0.6, 0.01, 0.65, 0.95],
      duration: 1,
    },
  },
};

type AnimatedLettersProps = {
  title: string;
  disabled?: boolean;
  isEnglish?: boolean;
  large?: boolean;
};

const AnimatedLetters = ({
  title,
  disabled,
  isEnglish,
  large,
}: AnimatedLettersProps) => (
  <RowTitle
    as={motion.div}
    variants={disabled ? {} : banner}
    initial='initial'
    animate='animate'
  >
    {[...title].map((letter) => (
      <RowLetter
        as={motion.span}
        variants={disabled ? {} : letterAni}
        isEnglish={isEnglish}
        large={large}
      >
        {letter}
      </RowLetter>
    ))}
  </RowTitle>
);

export default AnimatedLetters;
