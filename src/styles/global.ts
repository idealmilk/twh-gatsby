import * as styled from 'styled-components';

import { defaultTheme } from './theme';

const typedTheme: styled.DefaultTheme = defaultTheme;

const GlobalStyles = styled.createGlobalStyle`
  *,
  html,
  body {
    margin: 0;
    font-family: sans-serif;
    font-size: 10px;
    font-style: normal;
    font-weight: 400;
    line-height: 1.5;
    box-sizing: border-box;
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none;
  }

  html::-webkit-scrollbar {
    display: none;
  }

  html,
  body,
  #root,
  main {
    position: relative;
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
  }

  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }

  body {
    line-height: 1;
  }

  main {
    width: 100vw;
  }

  h1,
  h2,
  h3,
  h4,
  h5 {
    margin: 0;
    padding: 0;
  }

  h3 {
    font-size: 2rem;
  }

  p,
  td {
    font-size: 2.8rem;
    line-height: 1.8;

    @media (max-width: ${(props) => props.theme.breakpoints.laptop}) {
      font-size: 2.2rem;
    }

    @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
      font-size: 1.8rem;
    }
  }

  a {
    text-decoration: none;
  }

  blockquote,
  q {
    quotes: none;
  }

  blockquote:before,
  blockquote:after,
  q:before,
  q:after {
    content: '';
    content: none;
  }

  :focus {
    outline: 0;
  }

  ins {
    text-decoration: none;
  }

  del {
    text-decoration: line-through;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  .clear {
    clear: both;
  }

  img {
    border: 0;
  }

  img a {
    border: 0;
    padding: 0;
    margin: 0;
  }

  .image-container {
    width: 100%;
    position: relative;
    overflow: hidden;
    display: flex;
    justify-content: center;
    &:after {
      position: absolute;
      content: '';
      width: 100%;
      height: 100%;
      background: white;
      top: 0;
      right: 0;
    }
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      margin: 0 auto;
    }
  }

  .cursor {
    position: fixed;
    z-index: 1000000;
    display: flex;
    flex-flow: row;
    align-content: center;
    justify-content: center;
    top: 0;
    left: 0;
    height: 10px;
    width: 10px;
    background-color: #1e91d6;
    border-radius: 200px;
    pointer-events: none;
    color: #fff;
    text-align: center;
    font-size: 16px;

    @media (max-width: ${(props) => props.theme.breakpoints.tabletPor}) {
      display: none;
    }
  }
`;

GlobalStyles.defaultProps = {
  theme: typedTheme,
};

export default GlobalStyles;
