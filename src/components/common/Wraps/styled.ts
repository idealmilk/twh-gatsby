import { motion } from "framer-motion";
import styled from "styled-components";

export const InnerWrap = styled.div`
  display: flex;
  justify-content: space-between;
  width: 130rem;
  max-width: 86%;
  margin: 0 auto;

  @media (max-width: ${(props) => props.theme.breakpoints.tabletPor}) {
    display: block;
  }
`;

export const TextWrap = styled(motion.div)`
  width: 50%;
  margin: auto 0;
  p {
    line-height: 1.8;
    margin-bottom: 2rem;
  }

  @media (max-width: ${(props) => props.theme.breakpoints.laptop}) {
    width: 45%;
  }

  @media (max-width: ${(props) => props.theme.breakpoints.tabletPor}) {
    width: 100%;
  }
`;

export const ImgWrap = styled.div`
  position: relative;
  width: 35%;
  text-align: center;

  @media (max-width: ${(props) => props.theme.breakpoints.tabletPor}) {
    width: 100%;
    margin-bottom: 3rem;
  }
`;
