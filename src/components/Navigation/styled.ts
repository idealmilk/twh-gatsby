import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  top: 0;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  z-index: 1000;

  @media (max-width: ${(props) => props.theme.breakpoints.tabletPor}) {
    top: revert;
    bottom: 0;
  }
`;

export const TileWrap = styled.div`
  position: absolute;
  bottom: 0;
  display: flex;
  width: 100%;
  -moz-transform: rotate(180deg);
  -webkit-transform: rotate(180deg);
  -o-transform: rotate(180deg);
  -ms-transform: rotate(180deg);
  filter: progid:DXImageTransform.Microsoft.BasicImage(rotation=2);

  @media (max-width: ${(props) => props.theme.breakpoints.tabletPor}) {
    display: block;
    -moz-transform: rotate(0);
    -webkit-transform: rotate(0);
    -o-transform: rotate(0);
    -ms-transform: rotate(0);
    filter: progid:DXImageTransform.Microsoft.BasicImage(rotation=0);
  }
`;
