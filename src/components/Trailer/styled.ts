import styled from 'styled-components';

export const Container = styled.div`
  display: block;
  margin-bottom: 10rem;
  h2 {
    text-align: center;
    font-size: 5rem;
    margin-bottom: 2rem;
  }
`;

export const FrameWrap = styled.div`
  position: relative;
  display: block;
  width: 84rem;
  height: 47.25rem;
  margin: 0 auto;

  iframe {
    position: absolute;
    width: 100%;
    height: 100%;
    border: none;
  }

  video {
    width: 100%;
  }
`;
