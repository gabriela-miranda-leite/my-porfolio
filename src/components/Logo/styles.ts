import styled from 'styled-components';

export const Container = styled.div`
  width: 21rem;
  position: relative;
`;

export const Logo = styled.h1`
  font-family: 'Ubuntu';
  font-weight: 500;
  font-size: 4rem;
`;

export const Square = styled.div`
  width: 1rem;
  height: 1rem;
  background-color: ${({theme}) => theme.colors.primary};
  position: absolute;
  bottom: 2.1rem;
  left: 19rem;
`;

export const Line = styled.hr`
  border: none;
  border-top: 3px dashed ${({theme}) => theme.colors.text};
  width: 95%;
`;
