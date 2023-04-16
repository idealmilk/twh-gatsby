import { motion } from 'framer-motion';
import styled from 'styled-components';

export const Container = styled(motion.div)`
  position: absolute;
  bottom: 0;
  height: 6rem;
  width: 100vw;
  z-index: 10000;
`;

export const InnerWrap = styled(motion.div)`
  width: 13rem;
  margin: 0 auto;
  justify-content: space-between;
`;
