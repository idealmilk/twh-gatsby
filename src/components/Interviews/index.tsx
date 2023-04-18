import { useAnimation } from 'framer-motion';
import React, { MouseEventHandler, useContext, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

import { ImgWrap } from 'components/common/Wraps/styled';
import { Image } from 'components';
import Temp1 from 'images/temp1.png';
import Temp2 from 'images/temp2.png';
import { LanguageContext } from 'context/LanguageContext';

import { Container, Card, Details } from './styled';
import AnimatedLine from 'components/common/Animations/Lines';

type InterviewsProps = {
  projectEnter: MouseEventHandler;
  projectLeave: MouseEventHandler;
};

const Interviews = ({ projectEnter, projectLeave }: InterviewsProps) => {
  const controls = useAnimation();
  const [aboutTextRef, inView] = useInView();

  const { isEnglish } = useContext(LanguageContext);

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  return (
    <Container>
      <h2>{isEnglish ? 'Get to know the lads' : 'Conozca a los chicos'}</h2>
      <Card>
        <ImgWrap onMouseEnter={projectEnter} onMouseLeave={projectLeave}>
          <Image image={Temp1} />
        </ImgWrap>
        <Details>
          <AnimatedLine />
          <AnimatedLine />
        </Details>
      </Card>
      <Card>
        <ImgWrap onMouseEnter={projectEnter} onMouseLeave={projectLeave}>
          <Image image={Temp2} />
        </ImgWrap>
        <Details>
          <AnimatedLine />
          <AnimatedLine />
        </Details>
      </Card>
    </Container>
  );
};

export default Interviews;
