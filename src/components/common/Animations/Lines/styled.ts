import { motion } from 'framer-motion';
import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  overflow: hidden;
`;

export const Line = styled(motion.div)`
  height: 1px;
  background: ${(props) => props.theme.colors.black};
  width: 100%;
`;
