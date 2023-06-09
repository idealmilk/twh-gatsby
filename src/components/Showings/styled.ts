import { motion } from 'framer-motion';
import styled from 'styled-components';

export const Container = styled(motion.div)`
  width: 100%;
  margin: 0 auto 10rem;
  h2 {
    text-align: center;
    font-size: 5rem;
    margin-bottom: 2rem;
  }

  h3 {
    margin-bottom: 2rem;
  }

  table {
    width: 100%;

    tbody {
      width: 100%;

      tr {
        height: 4rem;
      }
    }
  }

  @media (max-width: ${(props) => props.theme.breakpoints.tabletPor}) {
    width: 100%;

    td {
      font-size: 1.4rem;
    }
  }
`;

export const TableDivider = styled.div`
  width: 100%;
`;

export const Divider = styled(motion.div)`
  height: 1px;
  background: white;
  width: 100%;
`;
