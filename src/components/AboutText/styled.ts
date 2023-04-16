import { motion } from 'framer-motion';
import styled from 'styled-components';

export const TextWrap = styled(motion.div)`
  width: 60rem;
  max-width: 90%;
  margin: 10rem auto;
  text-align: center;

  p {
    margin-bottom: 1rem;
  }
`;
