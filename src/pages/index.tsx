import { graphql, type PageProps } from 'gatsby';
import React, { useContext, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

import {
  Hero,
  Footer,
  Header,
  SEO,
  Interviews,
  Menu,
  Trailer,
  Bio,
  RichText,
} from 'components';
import Whiteout from 'components/Whiteout';
import { InnerWrap } from 'components/common/Wraps/styled';
import useMousePosition from 'hooks/useMousePosition';
import { LandingPageTypes } from 'types/types';
import { LanguageContext } from 'context/LanguageContext';

const Content = styled.div`
  position: absolute;
  top: 100vh;
  width: 100vw;
  color: black;
  background: ${(props) => props.theme.colors.white};
  z-index: 10000;
`;

type GraphQLResult = {
  englishContent: LandingPageTypes;
  spanishContent: LandingPageTypes;
};

const HomePage = ({ data }: PageProps<GraphQLResult>) => {
  const { englishContent, spanishContent } = data;
  const [activeLanguage, setActiveLanguage] = useState(englishContent);

  console.log(activeLanguage);

  const { isEnglish, toggleLanguage } = useContext(LanguageContext);

  useEffect(() => {
    const locale = navigator.language;
    const localeIsSpanish = locale.toLowerCase().includes('es');

    if (localeIsSpanish) {
      toggleLanguage();
    }
  }, []);

  useEffect(() => {
    if (isEnglish) {
      setActiveLanguage(englishContent);
    } else {
      setActiveLanguage(spanishContent);
    }
  }, [isEnglish, englishContent, spanishContent]);

  const [showWhiteout, setShowWhiteout] = useState(false);

  // State of our menu
  const [menuState, setMenuState] = useState(false);
  // State of to display our custom cursor
  const [cursorHovered, setCursorHovered] = useState(false);

  useEffect(() => {
    menuState
      ? document.body.classList.add('body-lock')
      : document.body.classList.remove('body-lock');
  }, [menuState]);

  const { x, y } = useMousePosition();

  const ref = useRef(null);

  return (
    <main ref={ref}>
      <SEO
        title={activeLanguage.header}
        description={activeLanguage.subheader}
      />
      <Whiteout showWhiteout={showWhiteout} />

      <Header
        menuState={menuState}
        setMenuState={setMenuState}
        showWhiteout={showWhiteout}
        setShowWhiteout={setShowWhiteout}
        setCursorHovered={setCursorHovered}
      />
      <Menu
        setCursorHovered={setCursorHovered}
        menuState={menuState}
        setMenuState={setMenuState}
        x={x}
        y={y}
      />
      <Hero
        header={activeLanguage.header}
        subheader={activeLanguage.subheader}
      />
      <Content>
        <InnerWrap>
          <Bio body={activeLanguage.whoAreWe} />

          <h1>Together We Heal</h1>
          <RichText {...activeLanguage.twhDesc} />
          <Trailer embedLink={activeLanguage.trailerEmbedLink} />
          <Interviews />
        </InnerWrap>
        <Footer showWhiteout={showWhiteout} setShowWhiteout={setShowWhiteout} />
      </Content>
    </main>
  );
};

export const query = graphql`
  query {
    englishContent: contentfulLandingPage(
      title: { eq: "Mujeres Espejo - EN" }
    ) {
      header
      subheader
      whoAreWe {
        raw
      }
      whatDoWeDo {
        raw
      }
      twhDesc {
        raw
      }
      trailerEmbedLink
    }
    spanishContent: contentfulLandingPage(
      title: { eq: "Mujeres Espejo - ES" }
    ) {
      header
      subheader
      whoAreWe {
        raw
      }
      whatDoWeDo {
        raw
      }
      twhDesc {
        raw
      }
      trailerEmbedLink
    }
  }
`;

export default HomePage;
