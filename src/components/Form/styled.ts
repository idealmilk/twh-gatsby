import styled from 'styled-components';

export const Container = styled.form`
  min-height: 160px;
  width: 40%;
  text-align: center;

  @media (max-width: ${(props) => props.theme.breakpoints.tabletPor}) {
    margin: 4rem auto 0;
    width: 60%;
  }

  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    margin: 4rem auto 0;
    width: 90%;
  }
`;

export const FormWrap = styled.div`
  transition: all 0.5s ease;

  button {
    background: transparent;
    color: white;
    border: none;
    margin: 2rem 0;

    p {
      position: relative;
      font-size: 1.6rem;
      &::after {
        content: '';
        position: absolute;
        width: 100%;
        height: 2px;
        bottom: 0;
        left: 0;
        background-color: ${(props) => props.theme.colors.white};
        transform-origin: bottom right;
        transition: transform 0.25s ease-out;
        transform: scaleX(0);
      }

      &:hover::after {
        transform: scaleX(1);
        transform-origin: bottom left;
      }
    }
  }

  .loader {
    border: 2px solid #f3f3f3; /* Light grey */
    border-top: ${(props) => `2px solid ${props.theme.colors.blue}`};
    border-right: ${(props) => `2px solid ${props.theme.colors.red}`};
    border-bottom: ${(props) => `2px solid ${props.theme.colors.yellow}`};
    border-left: 2px solid white;
    border-radius: 50%;
    width: 20px;
    height: 20px;
    animation: spin 2s linear infinite;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export const InputWrap = styled.div`
  width: 100%;
  margin: 0 auto;
  overflow: hidden;
`;

export const FormResponse = styled.div`
  width: 100%;
  color: #969ca0;
  text-align: center;
  transition: all 0.5s ease-in;

  p {
    font-size: 1.4rem;
  }
`;

type InputContainerProps = {
  color: string;
};

export const InputContainer = styled.div<InputContainerProps>`
  margin-bottom: 1.4rem;
  input {
    width: 100%;
    padding: 14px;
    border: none;
    font-size: 1.6rem;
    background: ${(props) => props.theme.colors[props.color]};
    color: white;
    &:focus,
    &::placeholder {
      color: white;
    }
  }
  @media (max-width: ${(props) => props.theme.breakpoints.tabletPor}) {
    width: 100%;
  }
`;

export const TextAreaContainer = styled.div`
  height: 258px;
  textarea {
    width: 100%;
    height: 100%;
    padding: 14px;
    border: none;
    font-size: 1.6rem;
    border: 1px solid black;
    background: ${(props) => props.theme.colors.yellow};
    color: black;
    &:focus,
    &::placeholder {
      color: black;
    }
  }
  @media (max-width: ${(props) => props.theme.breakpoints.tabletPor}) {
    width: 100%;
  }
`;

export const FormContainer = styled.div`
  width: 100%;
`;

export const Form = styled.form`
  display: flex;
  background: #ffffff;
  border-radius: 4rem;
  overflow: hidden;
  @media (max-width: ${(props) => props.theme.breakpoints.tabletPor}) {
    background: transparent;
    display: block;
    border-radius: 0;
  }
`;
