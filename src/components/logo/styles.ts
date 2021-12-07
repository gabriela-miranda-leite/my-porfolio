import styled from 'styled-components';

export const Container = styled.div`
  width: 20rem;
  height: 8rem;
  position: relative;

  display: flex;
  align-items: center;
  justify-content: flex-end;

  @media (min-width: 750px) {
    width: 39rem;
    height: 15rem;
  }

  @media (min-width: 1170px) {
    width: 49rem;
    height: 19rem;
  }
`;

export const Title = styled.h1`
  font-family: 'Ubuntu';
  font-weight: 500;
  font-size: 4rem;

  @media (min-width: 750px) {
    font-size: 8rem;
  }

  @media (min-width: 1170px) {
    font-size: 10rem;
  }
`;

export const Square = styled.div`
  height: 1rem;
  width: 1rem;

  background-color: ${({theme}) => theme.colors.primary};
  position: absolute;
  bottom: 0%;

  @media (min-width: 1170px) {
    height: 1.5rem;
    width: 1.5rem;
  }
`;
