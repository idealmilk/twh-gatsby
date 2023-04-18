import { motion } from 'framer-motion';
import styled from 'styled-components';

export const Container = styled(motion.div)`
  width: 100%;
  margin: 0 auto 10rem;
  text-align: center;
  h2 {
    text-align: center;
    font-size: 5rem;
    margin-bottom: 2rem;
  }
`;

export const Card = styled(motion.div)`
  display: flex;
  justify-content: space-between;
  margin: 3rem 0;
`;

export const Details = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-left: 3rem;
  width: 100%;
`;
