import React, { useEffect, useState } from 'react';

import { Container } from './styled';

type ImageProps = {
  image: string;
};

const Image = ({ image }: ImageProps) => {
  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.pageYOffset);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Container>
      <img
        src={image}
        alt='Meeee'
        style={{
          transform: `translateY(calc(10rem - ${offsetY * 0.1}px)) scale(2)`,
        }}
      />
    </Container>
  );
};

export default Image;
