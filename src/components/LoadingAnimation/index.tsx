import React from 'react';

import { Container } from './styled';

const LoadingAnimation = () => {
  return (
    <Container>
      <div className='row'>
        <div className='circle circle1'></div>
        <div className='circle circle2'></div>
        <div className='circle circle3'></div>
      </div>
    </Container>
  );
};

export default LoadingAnimation;
