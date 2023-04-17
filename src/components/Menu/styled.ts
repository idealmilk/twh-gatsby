import { motion } from 'framer-motion';
import styled from 'styled-components';

export const Container = styled(motion.div)`
  .projects {
    position: fixed;
    height: 100%;
    width: 100%;
    z-index: 100000;
    overflow: hidden;
    background: #fff;
    .close,
    .menu-title {
      z-index: 1000;
      position: absolute;
      color: ${(props) => props.theme.colors.black};
      top: 3rem;
      right: 5.8rem;
      display: flex;
      align-items: center;
      text-transform: uppercase;
      font-size: 0.875rem;
      letter-spacing: 0.05rem;
      cursor: pointer;
      svg {
        height: 30px;
      }
    }
    .menu-title {
      top: 3rem;
      left: 5.8rem;
      text-transform: capitalize;
      font-size: 1.4rem;
    }
    .menu {
      height: 100vh;
      .menu-inner {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 8rem 0;
        height: 100vh;
        ul {
          width: 100%;
          display: block;
          li {
            color: ${(props) => props.theme.colors.white};
            position: relative;
            width: 100%;
            height: 115px;
            a {
              height: 100%;
              .wrapper {
                height: 100%;
                display: flex;
                align-items: flex-end;
                .title {
                  margin: 0 1rem;
                  z-index: 10;
                  &:hover {
                    color: black;
                    -webkit-text-fill-color: white; /* Will override color (regardless of order) */
                    -webkit-text-stroke-width: 1px;
                    -webkit-text-stroke-color: black;
                  }
                  h2 {
                    overflow: hidden;
                    margin: 0;
                    div {
                      font-size: 6rem;
                      font-weight: 500;
                    }
                  }
                }
                .thumbnail {
                  margin-bottom: 1.4rem;
                  overflow: hidden;
                  position: absolute;
                  left: 30rem;
                  width: 10rem;
                  height: 8rem;
                  .mask {
                    height: 100%;
                    width: 100%;
                    z-index: 8;
                    position: absolute;
                    background: ${(props) => props.theme.colors.white};
                    top: 0;
                  }
                  img {
                    position: absolute;
                    width: 100%;
                    height: 100%;
                    right: 0;
                  }
                }
                .floating-image {
                  pointer-events: none;
                  width: 40rem;
                  position: absolute;
                  background-size: cover;
                  background-position: 50%;
                  z-index: 99;
                  overflow: hidden;
                }
              }
              .line {
                height: 1px;
                width: 100%;
                background: ${(props) => props.theme.colors.black};
                margin-bottom: 0.8rem;
                position: relative;
                display: flex;
                align-items: center;
                &.flex-0 {
                  flex: 0;
                  &:after {
                    display: none;
                  }
                }
                &.flex-1 {
                  flex: 1;
                }
                &.flex-2 {
                  flex: 2;
                }
                &.flex-3 {
                  flex: 3;
                }
                &.left {
                  &:after {
                    content: '';
                    position: absolute;
                    height: 6px;
                    width: 6px;
                    border-radius: 100%;
                    background: ${(props) => props.theme.colors.black};
                    right: 0;
                  }
                }
                &.right {
                  &:after {
                    content: '';
                    position: absolute;
                    height: 6px;
                    width: 6px;
                    border-radius: 100%;
                    background: ${(props) => props.theme.colors.black};
                  }
                }
                .mask {
                  background: ${(props) => props.theme.colors.white};
                  width: 100%;
                  height: 6px;
                  z-index: 9;
                  position: absolute;
                  &.right {
                    right: 0;
                  }
                }
              }
            }
          }
        }
      }
    }
  }

  .left-panel-background {
    z-index: 1000000;
    height: 100vh;
    width: 50vw;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 11;
  }
  .right-panel-background {
    z-index: 1000000;
    height: 100vh;
    width: 50vw;
    position: absolute;
    bottom: 0;
    right: 0;
    z-index: 11;
  }
`;
