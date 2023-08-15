import React, { useContext, useEffect } from 'react';
import { GitHub, Linkedin } from 'react-feather';

import { Container, InnerWrap } from './styled';
import { LanguageContext } from 'context/LanguageContext';

type FooterProps = {
  showWhiteout: any;
  setShowWhiteout: any;
};

const Footer = ({ showWhiteout, setShowWhiteout }: FooterProps) => {
  const { isEnglish, toggleLanguage } = useContext(LanguageContext);

  const handleLanguageToggle = () => {
    // const whiteout = document.getElementById('whiteout');
    // if (whiteout) {
    //   whiteout.style.display = 'block';
    // }

    // setShowWhiteout(true);
    toggleLanguage();
  };

  useEffect(() => {
    if (showWhiteout) {
      setTimeout(() => {
        toggleLanguage();
        if (typeof window !== 'undefined') {
          window.location.reload();
        }
      }, 2000);
    }
  }, [showWhiteout, toggleLanguage]);

  return (
    <Container>
      <InnerWrap>
        <button onClick={handleLanguageToggle}>
          {isEnglish ? 'ES' : 'EN'}
        </button>
      </InnerWrap>
    </Container>
  );
};

export default Footer;
