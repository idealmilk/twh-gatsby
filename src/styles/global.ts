import * as styled from 'styled-components';

import Baskervvile from 'assets/Fonts/Baskervville-Regular.ttf';

import { defaultTheme } from './theme';

const typedTheme: styled.DefaultTheme = defaultTheme;

const GlobalStyles = styled.createGlobalStyle`
  @font-face {
    font-family: 'Baskervvile';
    src: url(${Baskervvile}) format('truetype');
  }

  *,
  html,
  body {
    margin: 0;
    font-family: 'Baskervvile', serif;
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

  /* Hamburger Menu */
  ul {
    margin: 0;
    padding: 0;
    span {
      text-transform: uppercase;
      font-size: 0.875rem;
      font-weight: 400;
      margin-bottom: 1rem;
      display: block;
      letter-spacing: 0.05rem;
    }
    .columns {
      display: flex;
      .column {
        &:first-child {
          margin-right: 2rem;
          @media (max-width: 680px) {
            margin-right: 8rem;
          }
        }
      }
    }
    li {
      list-style: none;
      font-size: 0.875rem;
      font-weight: 300;
      color: ${(props) => props.theme.colors.black};
      margin-bottom: 0.5rem;
      @media (max-width: 680px) {
        margin-bottom: 0.75rem;
      }
      a {
        color: ${(props) => props.theme.colors.black};
      }
      &.disabled {
        opacity: 0.4;
      }
    }
  }

  .container {
    flex-grow: 1;
    margin: 0 auto;
    padding: 0 32px;
    position: relative;
    width: auto;

    max-width: 700px;

    &.fluid {
      padding: 0;
      margin: 0;
      max-width: 100% !important;
    }
  }

  .body-lock {
    overflow-y: hidden;
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
