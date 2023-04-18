import { motion } from 'framer-motion';
import styled from 'styled-components';

type EnglishProp = {
  isEnglish?: boolean;
  large?: boolean;
};

export const RowTitle = styled(motion.div)`
  position: relative;
  white-space: nowrap;
`;

export const RowLetter = styled(motion.span)<EnglishProp>`
  font-size: ${(props) => (props.large ? '5.6rem' : '3.6rem')};
  color: ${(props) => props.theme.colors.white};
  font-weight: 500;
  position: relative;
  letter-spacing: ${(props) => (props.large ? '0.6rem' : '1.1rem')};
  margin-bottom: ${(props) => (props.large ? '-1rem' : '0')};
  text-transform: ${(props) => (props.large ? 'uppercase' : 'lowercase')};
  display: inline-block;
  white-space: nowrap;
`;
