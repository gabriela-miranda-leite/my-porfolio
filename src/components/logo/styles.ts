import styled from 'styled-components';

export const Container = styled.div`
  width: 28rem;
  position: relative;
`;

export const Logo = styled.h1`
  font-family: 'Ubuntu';
  font-weight: 500;
  font-size: 4rem;

  @media (min-width: 390px) {
    font-size: 5rem;
  }
`;

export const Square = styled.div`
  width: 1.5rem;
  height: 1.5rem;
  background-color: ${({theme}) => theme.colors.primary};
  position: absolute;
  bottom: 1rem;
  left: 19rem;

  @media (min-width: 390px) {
    bottom: 1.2rem;
    left: 24rem;
  }
`;

export const Line = styled.hr`
  border: none;
  border-top: 3px dashed ${({theme}) => theme.colors.text};
  width: 70%;

  @media (min-width: 390px) {
    width: 95%;
  }
`;
