import React from 'react';

import { Container, FrameWrap } from './styled';

type TrailerProps = {
  embedLink: string;
};

const Trailer = ({ embedLink }: TrailerProps) => {
  return (
    <Container>
      <h2>Watch the trailer</h2>
      <FrameWrap>
        <iframe
          src={embedLink}
          width='840'
          height='472.5'
          allow='autoplay; fullscreen; picture-in-picture'
          title='Trailer'
          allowFullScreen
        ></iframe>
      </FrameWrap>
    </Container>
  );
};

export default Trailer;
