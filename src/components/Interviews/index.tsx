import { motion, useAnimation } from 'framer-motion';
import React, { MouseEventHandler, useContext, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

import { ImgWrap } from 'components/common/Wraps/styled';
import { Image } from 'components';
import Temp1 from 'images/temp1.png';
import Temp2 from 'images/temp2.png';
import { LanguageContext } from 'context/LanguageContext';

import { Container, Card } from './styled';

type AboutProps = {
  projectEnter: MouseEventHandler;
  projectLeave: MouseEventHandler;
};

const AboutText = ({ projectEnter, projectLeave }: AboutProps) => {
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
      <ImgWrap onMouseEnter={projectEnter} onMouseLeave={projectLeave}>
        <Card>
          <Image image={Temp1} />
        </Card>
        <Card>
          <Image image={Temp2} />
        </Card>
      </ImgWrap>
    </Container>
  );
};

export default AboutText;
