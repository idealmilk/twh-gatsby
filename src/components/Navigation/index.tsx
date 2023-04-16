import React, { MouseEventHandler, useContext } from 'react';

import { LanguageContext } from 'context/LanguageContext';
import { Container, TileWrap } from './styled';

type NavigationProps = {
  projectEnter: MouseEventHandler;
  projectLeave: MouseEventHandler;
  setProjectColor: Function;
  setProjectTextColor: Function;
};

const Navigation = ({
  projectEnter,
  projectLeave,
  setProjectColor,
  setProjectTextColor,
}: NavigationProps) => {
  const { isEnglish } = useContext(LanguageContext);

  return (
    <Container>
      <TileWrap>
        <div
          style={{ height: '100%', width: '100%' }}
          onMouseEnter={(e) => {
            setProjectColor('rgba(241,202,4,1)');
            setProjectTextColor('black');
            projectEnter(e);
          }}
          onMouseLeave={projectLeave}
        ></div>
        <div
          style={{ height: '100%', width: '100%' }}
          onMouseEnter={(e) => {
            setProjectColor('rgba(212,2,3,1)');
            setProjectTextColor('white');
            projectEnter(e);
          }}
          onMouseLeave={projectLeave}
        ></div>
        <div
          style={{ height: '100%', width: '100%' }}
          onMouseEnter={(e) => {
            setProjectColor('rgba(21,1,237,1)');
            setProjectTextColor('white');
            projectEnter(e);
          }}
          onMouseLeave={projectLeave}
        ></div>
      </TileWrap>
    </Container>
  );
};

export default Navigation;
