import React, { useContext, useEffect } from 'react';
import { motion } from 'framer-motion';
import { AnchorLink } from 'gatsby-plugin-anchor-links';
import { Link } from 'gatsby';

import { LanguageContext } from 'context/LanguageContext';

import { Container, HamburgerMenu, HeaderInner, Logo, Nav } from './styled';

type HeaderProps = {
  showWhiteout: any;
  setShowWhiteout: any;
  menuState: any;
  setMenuState: any;
  setCursorHovered: any;
};

const Header = ({
  showWhiteout,
  setShowWhiteout,
  menuState,
  setMenuState,
  setCursorHovered,
}: HeaderProps) => {
  const { isEnglish, toggleLanguage } = useContext(LanguageContext);

  const handleLanguageToggle = () => {
    const whiteout = document.getElementById('whiteout');
    if (whiteout) {
      whiteout.style.display = 'block';
    }

    setShowWhiteout(true);
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
    <Container
      as={motion.section}
      initial={{ opacity: 0, y: -180 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        ease: 'easeInOut',
        duration: 1,
        delay: 0.6,
      }}
    >
      <HeaderInner>
        <Logo>
          <Link to='/'>{isEnglish ? 'Together We Heal' : 'Ser Reflejo'}</Link>
        </Logo>

        <HamburgerMenu
          onClick={() => setMenuState(!menuState)}
          className='hamburger-menu'
          onMouseEnter={() => setCursorHovered(true)}
          onMouseLeave={() => setCursorHovered(false)}
        >
          <span></span>
          <span></span>
        </HamburgerMenu>
      </HeaderInner>
    </Container>
  );
};

export default Header;
