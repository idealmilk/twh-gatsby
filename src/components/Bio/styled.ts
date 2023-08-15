import { motion } from 'framer-motion';
import styled from 'styled-components';

export const Container = styled(motion.div)`
  display: flex;
  justify-content: space-between;
  height: 90vh;
  width: 100%;
  text-align: center;
`;

export const TextWrap = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 50%;
  text-align: left;
  p {
    margin-bottom: 1rem;
  }
`;

export const Gallery = styled(motion.div)`
  position: relative;
  display: block;
  width: 45%;
  margin-top: 16rem;
  transform: translateY(200px);
  img {
    position: absolute;
    display: block;
    object-fit: cover;
  }

  img:first-of-type {
    top: 0;
    left: 0;
    width: 15rem;
    height: 10rem;
  }
  img:nth-of-type(2) {
    top: 15%;
    left: 55%;
    width: 20rem;
    height: 13rem;
  }
  img:nth-of-type(3) {
    top: 35%;
    left: 20%;
    width: 15rem;
    height: 20rem;
  }
  img:nth-of-type(4) {
    width: 14rem;
    height: 18rem;
    bottom: 10%;
    right: 15%;
  }
  img:nth-of-type(5) {
    width: 19rem;
    height: 12rem;
    left: 5%;
    bottom: -30%;
  }
`;
