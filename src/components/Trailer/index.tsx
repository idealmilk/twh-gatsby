import React, { useContext } from 'react';

import { LanguageContext } from 'context/LanguageContext';
import { Container, FrameWrap } from './styled';

type TrailerProps = {};

const Trailer = ({}: TrailerProps) => {
  const { isEnglish } = useContext(LanguageContext);

  return (
    <Container>
      <h2>Watch the trailer</h2>
      <FrameWrap>
        <iframe
          src={
            isEnglish
              ? 'https://player.vimeo.com/video/805999726?h=b664da809f'
              : 'https://player.vimeo.com/video/806000244?h=243da8b249'
          }
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
