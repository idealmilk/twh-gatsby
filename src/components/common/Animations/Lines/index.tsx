import React, { useRef } from 'react';
import { Container, Line } from './styled';
import { useInView } from 'framer-motion';

const AnimatedLine = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <Container ref={ref}>
      <Line
        style={{
          transform: isInView ? 'none' : 'translateX(-50vw)',
          // transitionDelay: "0.4",
          opacity: isInView ? 1 : 0.2,
          transition: 'all 1.4s cubic-bezier(0.17, 0.55, 0.55, 1) 0.6s',
        }}
      />
    </Container>
  );
};

export default AnimatedLine;
