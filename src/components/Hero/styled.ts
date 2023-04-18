import { motion } from 'framer-motion';
import styled from 'styled-components';
import Background from 'images/temp.png';

export const Container = styled(motion.div)`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  background-image: url(${Background});
  background-position: bottom;
  background-size: cover;
  top: 0;
  left: 0;

  @media (max-width: ${(props) => props.theme.breakpoints.tabletPor}) {
    display: block;
  }
`;

type TextWrapType = {
  offsetY: number;
};

export const TextWrap = styled(motion.div)<TextWrapType>`
  width: auto;
  max-width: 90%;
  text-align: center;

  div {
    transform: ${(props) => `translateY(-${props.offsetY * 0.5}px)`};
  }
`;
