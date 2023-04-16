import React, { MouseEventHandler, useContext } from 'react';

import Tile from 'components/Tile';
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
        >
          <Tile
            text='SciLeads'
            url='https://scileads.com/'
            index='03'
            role={isEnglish ? 'Development' : 'デベロップメント'}
            year='2021'
            variants={{
              backgroundColor: 'yellow',
              textColor: 'black',
              height: '65vh',
              width: '35vw',
            }}
          />
        </div>
        <div
          style={{ height: '100%', width: '100%' }}
          onMouseEnter={(e) => {
            setProjectColor('rgba(212,2,3,1)');
            setProjectTextColor('white');
            projectEnter(e);
          }}
          onMouseLeave={projectLeave}
        >
          <Tile
            text='The Glow'
            url='https://www.theglow.jp/'
            index='02'
            role={
              isEnglish
                ? 'Branding, Design, Development'
                : 'ブランディング / デザイン / デベロップメント'
            }
            year='2022'
            variants={{
              backgroundColor: 'red',
              textColor: 'white',
              height: '35vh',
              width: '40vw',
            }}
          />
        </div>
        <div
          style={{ height: '100%', width: '100%' }}
          onMouseEnter={(e) => {
            setProjectColor('rgba(21,1,237,1)');
            setProjectTextColor('white');
            projectEnter(e);
          }}
          onMouseLeave={projectLeave}
        >
          <Tile
            text='New Edge Studio'
            url='https://newedgestud.io/'
            index='01'
            role={
              isEnglish ? 'Design, Development' : 'デザイン / デベロップメント'
            }
            year='2023'
            variants={{
              backgroundColor: 'blue',
              textColor: 'white',
              height: '50vh',
              width: '25vw',
            }}
          />
        </div>
      </TileWrap>
    </Container>
  );
};

export default Navigation;
