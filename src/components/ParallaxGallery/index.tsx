import { motion, useAnimation } from 'framer-motion';
import React, {
  MouseEventHandler,
  useContext,
  useEffect,
  useState,
} from 'react';
import { useInView } from 'react-intersection-observer';

import { ImgWrap } from 'components/common/Wraps/styled';
import { Image } from 'components';
import Temp1 from 'images/temp1.png';
import Temp2 from 'images/temp2.png';
import { LanguageContext } from 'context/LanguageContext';

import { Container, Gallery, TextWrap } from './styled';

const ParallexGallery = () => {
  const controls = useAnimation();
  const [aboutTextRef, inView] = useInView();
  const { isEnglish } = useContext(LanguageContext);

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const textVariants = {
    visible: { opacity: 1, y: 0, transition: { duration: 1.25 } },
    hidden: { opacity: 0, y: 200 },
  };

  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.pageYOffset);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Container>
      <TextWrap
        as={motion.div}
        ref={aboutTextRef}
        animate={controls}
        initial='hidden'
        variants={textVariants}
      >
        <p>
          {isEnglish
            ? "Five generations of armed conflict in Colombia has turned many women's bodies into battlegrounds."
            : 'イギリスにてデータマーケティング会社のソフトウェアエンジニアとして働き、退職後デザイン事務所 New Edge Studioにてウェブデベロッパーとしてフリーランス所属。'}
        </p>
        <p>
          {isEnglish
            ? 'During this time, 75,000 displace people, mainly women, have ended up in the city of Cartagena; many of whom are re-victimised by a racist, patriarchal and classist society.'
            : 'フロントエンドエクスペリエンスを構築する際には、各要素を慎重に検討し、視覚的に美しく、直感的に使用でき、まとまりのある全体感を作り上げることを追求しています。'}
        </p>
        <p>
          {isEnglish
            ? 'Through this trauma, grows the need to heal through storytelling and art, to build a life free from violence.'
            : 'フロントエンドエクスペリエンスを構築する際には、各要素を慎重に検討し、視覚的に美しく、直感的に使用でき、まとまりのある全体感を作り上げることを追求しています。'}
        </p>
        <p>
          {isEnglish
            ? 'This is why we come together.'
            : 'フロントエンドエクスペリエンスを構築する際には、各要素を慎重に検討し、視覚的に美しく、直感的に使用でき、まとまりのある全体感を作り上げることを追求しています。'}
        </p>
      </TextWrap>
      <Gallery>
        <img
          src={Temp1}
          style={{ transform: `translateY(-${offsetY * 0.3}px)` }}
        />
        <img
          src={Temp2}
          style={{ transform: `translateY(-${offsetY * 0.5}px)` }}
        />
        <img
          src={Temp1}
          style={{ transform: `translateY(-${offsetY * 0.3}px)` }}
        />
        <img
          src={Temp2}
          style={{ transform: `translateY(-${offsetY * 0.3}px)` }}
        />
        <img
          src={Temp1}
          style={{ transform: `translateY(-${offsetY * 0.5}px)` }}
        />
      </Gallery>
    </Container>
  );
};

export default ParallexGallery;
