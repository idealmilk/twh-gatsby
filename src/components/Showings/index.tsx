import { LanguageContext } from 'context/LanguageContext';
import React, { MouseEventHandler, useContext } from 'react';

import { Container } from './styled';
import AnimatedLine from 'components/common/Animations/Lines';

type ShowingsProps = {
  projectEnter: MouseEventHandler;
  projectLeave: MouseEventHandler;
};

const Showings = ({ projectEnter, projectLeave }: ShowingsProps) => {
  const { isEnglish } = useContext(LanguageContext);

  return (
    <Container>
      <h2>{isEnglish ? 'Showings' : 'Presentaciones'}</h2>
      <table>
        <tbody>
          <tr>
            <td colSpan={3}>
              <AnimatedLine />
            </td>
          </tr>
          <tr className='table-row'>
            <td>Cartegena</td>
            <td>{isEnglish ? '12 Feb 2023' : '2 de febrero de 2023'}</td>
            <td>{isEnglish ? 'Reserve tickets' : 'Reservar entradas'}</td>
          </tr>
          <tr>
            <td colSpan={3}>
              <AnimatedLine />
            </td>
          </tr>
          <tr className='table-row'>
            <td>London</td>
            <td>{isEnglish ? '12 March 2023' : '12 de marzo de 2023'}</td>
            <td>{isEnglish ? 'Reserve tickets' : 'Reservar entradas'}</td>
          </tr>
          <tr>
            <td colSpan={3}>
              <AnimatedLine />
            </td>
          </tr>
        </tbody>
      </table>
    </Container>
  );
};

export default Showings;
