import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  .row {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  .circle {
    display: inline-block;
    width: 30px;
    height: 30px;
  }
  .circle1 {
    animation-name: loading;
    animation-duration: 1s;
    animation-direction: alternate;
    animation-iteration-count: infinite;
    transform: translate(0);
    animation-timing-function: ease-in-out;
    background-color: ${(props) => props.theme.colors.blue};
  }
  @keyframes loading {
    0% {
      transform: translate(0, -30px);
    }
    50% {
      transform: translate(0);
    }
    100% {
      transform: translate(0, 30px);
    }
  }
  .circle2 {
    animation-name: loading2;
    animation-duration: 1s;
    animation-direction: alternate;
    animation-iteration-count: infinite;
    transform: translate(0);
    animation-timing-function: ease-in-out;
    animation-delay: 1s;
    background-color: ${(props) => props.theme.colors.red};
  }
  @keyframes loading2 {
    0% {
      transform: translate(0, -30px);
    }
    50% {
      transform: translate(0);
    }
    100% {
      transform: translate(0, 30px);
    }
  }
  .circle3 {
    animation-name: loading3;
    animation-duration: 1s;
    animation-direction: alternate;
    animation-iteration-count: infinite;
    transform: translate(0);
    animation-timing-function: ease-in-out;
    background-color: ${(props) => props.theme.colors.yellow};
  }
  @keyframes loading3 {
    0% {
      transform: translate(0, -30px);
    }
    50% {
      transform: translate(0);
    }
    100% {
      transform: translate(0, 30px);
    }
  }
`;
