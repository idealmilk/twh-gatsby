import { motion } from 'framer-motion';
import styled from 'styled-components';

export const Container = styled(motion.div)`
  position: fixed;
  top: 0;
  display: flex;
  justify-content: center;
  height: 8rem;
  width: 100vw;
  padding: 0 10.8rem;
  font-size: 1.8rem;
  color: ${(props) => props.theme.colors.white};
  z-index: 10000;

  @media (max-width: ${(props) => props.theme.breakpoints.laptop}) {
    width: 100%;
    font-size: 1.6rem;

    padding: 0;
  }
  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    font-size: 1.2rem;
  }
`;

export const HeaderInner = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .logo {
    font-weight: 700;
    font-size: 3.6rem;
    @media (max-width: ${(props) => props.theme.breakpoints.laptop}) {
      font-size: 3.2rem;
      flex: 4;
    }
  }

  a,
  button {
    position: relative;
    margin: 0 40px;
    font-size: 2rem;
    color: ${(props) => props.theme.colors.white};
    white-space: nowrap;

    &::after {
      content: '';
      position: absolute;
      width: 100%;
      height: 2px;
      bottom: 0;
      left: 0;
      background-color: ${(props) => props.theme.colors.white};
      transform-origin: bottom right;
      transition: transform 0.25s ease-out;
      transform: scaleX(0);
    }

    &:hover::after {
      transform: scaleX(1);
      transform-origin: bottom left;
    }
  }

  @media (max-width: ${(props) => props.theme.breakpoints.laptop}) {
    width: 90%;
    margin: 0 auto;
  }
`;

export const Logo = styled.div`
  a {
    margin: 0;
  }
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;

  button {
    background: transparent;
    border: none;
    padding: 0;
    margin-right: 0;
  }

  @media (max-width: ${(props) => props.theme.breakpoints.tabletPor}) {
    display: none;
  }
`;

export const HamburgerMenu = styled.div`
  display: flex;
  height: 56px;
  width: 56px;
  border-radius: 100%;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  transition: 0.2s cubic-bezier(0.215, 0.61, 0.355, 1);
  cursor: pointer;
  button {
    background: transparent;
    border: none;
    padding: 0;
    margin-right: 0;
  }

  @media (max-width: ${(props) => props.theme.breakpoints.tabletPor}) {
    button {
      margin: 0;
    }
  }
`;
