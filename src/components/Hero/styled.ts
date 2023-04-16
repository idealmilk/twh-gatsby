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

export const TextWrap = styled(motion.div)`
  width: 40rem;
  max-width: 90%;
  text-align: center;

  h1 {
    color: white;
    font-size: 10rem;
    line-height: 1.1;
    font-family: serif;
  }
`;
